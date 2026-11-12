import { builder } from '@/graphql/builder';
import prisma from '@/lib/prisma';

builder.prismaObject('Sentence', {
	fields: (t) => ({
		id: t.exposeID('id'),
		quote: t.exposeString('quote', { nullable: true }),
		author: t.exposeString('author', { nullable: true }),
	}),
});

builder.queryField('sentence', (t) =>
	t.prismaField({
		type: 'Sentence',
		nullable: true,
		resolve: async (query, _parent) => {
			const everyIdInTable = await prisma.sentence.findMany({
				select: { id: true },
			});
			const idArray = everyIdInTable.map(
				(element: { id: string }) => element.id,
			);

			if (idArray.length === 0) {
				return null;
			}

			const randomIndex = Math.floor(Math.random() * idArray.length);
			const randomIdFromTable = idArray[randomIndex];
			return prisma.sentence.findFirst({
				...query,
				where: {
					id: randomIdFromTable,
				},
			});
		},
	}),
);
