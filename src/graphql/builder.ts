import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import { DateTimeResolver } from 'graphql-scalars';
import type PrismaTypes from '@/generated/pothos-types';
import { getDatamodel } from '@/generated/pothos-types';
import prisma from '@/lib/prisma';

export const builder = new SchemaBuilder<{
	PrismaTypes: PrismaTypes;
	Scalars: {
		Date: {
			Input: Date;
			Output: Date;
		};
	};
}>({
	plugins: [PrismaPlugin],
	prisma: {
		client: prisma,
		dmmf: getDatamodel(),
	},
});

builder.queryType({
	fields: (t) => ({
		ok: t.boolean({
			resolve: () => true,
		}),
	}),
});

builder.addScalarType('Date', DateTimeResolver, {});
