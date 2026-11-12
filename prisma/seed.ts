import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { SentencesMock } from './mock-data';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error('DATABASE_URL is not set');
}

const prisma = new PrismaClient({
	adapter: new PrismaPg({ connectionString }),
});

async function main() {
	await prisma.sentence.createMany({
		data: SentencesMock,
	});
}

main()
	.catch(() => {
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
