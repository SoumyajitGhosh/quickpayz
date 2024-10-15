"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
  const session = await getServerSession(authOptions);
  const from = session?.user?.id;
  if (!from) {
    return {
      message: "Error while sending",
    };
  }
  const toUser = await prisma.user.findFirst({
    where: {
      number: to,
    },
  });

  if (!toUser) {
    return {
      message: "User not found",
    };
  }
  await prisma.$transaction(async (tx) => {
    // In postgres, a transaction ensure that either
    // all the statements happen or none.It does not lock rows / revert a transaction
    //if something from this transaction got updated before the transaction committed(unlike MongoDB)
    //[ In short if two requests are made very very fast, one after another, the requests are taken
    //care of sequentially].
    const userId = Number(from);
    if (isNaN(userId)) {
      throw new Error("Invalid user ID");
    }
    await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${userId} FOR UPDATE`;
    const fromBalance = await tx.balance.findUnique({
      where: { userId: Number(from) },
    });
    if (!fromBalance || fromBalance.amount < amount) {
      throw new Error("Insufficient funds");
    }

    await tx.balance.update({
      where: { userId: Number(from) },
      data: { amount: { decrement: amount } },
    });

    await tx.balance.update({
      where: { userId: toUser.id },
      data: { amount: { increment: amount } },
    });

    await tx.p2pTransfer.create({
      data: {
        fromUserId: from,
        toUserId: toUser.id,
        amount,
        timestamp: new Date(),
      },
    });
  });
}
