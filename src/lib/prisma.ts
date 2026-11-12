import { PrismaPg } from '@prisma/adapter-pg';
import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from '@/generated/prisma/client';

const createPrismaClient = (): PrismaClient => {
	const accelerateUrl = process.env.PRISMA_ACCELERATE_URL;

	if (accelerateUrl) {
		return new PrismaClient({
			accelerateUrl,
		}).$extends(withAccelerate()) as unknown as PrismaClient;
	}

	const connectionString = process.env.DATABASE_URL;

	if (!connectionString) {
		throw new Error('DATABASE_URL is not set');
	}

	return new PrismaClient({
		adapter: new PrismaPg({ connectionString }),
	});
};

declare const globalThis: {
	prismaGlobal: PrismaClient | undefined;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? createPrismaClient();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
