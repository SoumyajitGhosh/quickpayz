import { NextResponse } from "next/server";
import prisma from "@repo/db/client";  // Default import, as prisma is exported as default

export const GET = async () => {
  await prisma.user.upsert({
    where: {
      email: "asd",  // Checking if user with this email exists
    },
    update: {
      name: "adsads",  // If user exists, update these fields
      password: "123",
      number: "1234",
    },
    create: {
      email: "asd",  // If user doesn't exist, create a new user
      name: "adsads",
      password: "123",
      number: "1234",
    },
  });
  
  return NextResponse.json({
    message: "hi there",
  });
};
