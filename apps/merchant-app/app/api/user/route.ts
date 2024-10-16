import { NextResponse } from "next/server";
import prisma from "@repo/db/client";  // Default import, as prisma is exported as default

export const GET = async () => {
  await prisma.user.create({
    data: {
      email: "asd",
          name: "adsads",
          password: "123",
          number: "1234"
    },
  });
  
  return NextResponse.json({
    message: "hi there",
  });
};
