import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	output: 'standalone',
	serverExternalPackages: ['pg', '@prisma/adapter-pg', '@prisma/client'],
};

export default withNextIntl(nextConfig);
