import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Use declare global to avoid TypeScript errors with globalThis
declare global {
  // Declare global prisma to be of type PrismaClient or undefined
  var prismaGlobal: PrismaClient | undefined;
}

// Check if there's an existing instance of PrismaClient in globalThis (for non-production environments)
const prisma: PrismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();

// In non-production environments, cache the Prisma client in globalThis
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
