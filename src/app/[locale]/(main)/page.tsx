'use client';
import { Icon, Typography } from '@/components';
import { defaultButtonClasses } from '@/components/atoms/Button/Button';
import IconBox from '@/components/molecules/IconBox/IconBox';
import { FEATURES } from '@/utils/constants';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

export default function HomePage() {
	const t = useTranslations('HomePage');

	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col justify-center gap-6 p-8 text-center">
			<Typography.Title level="h1">{t('title')}</Typography.Title>
			<Typography.Paragraph>{t('description')}</Typography.Paragraph>
			<div className="grid  grid-cols-2 sm:grid-cols-4 gap-4">
				{FEATURES.map((item) => (
					<IconBox key={item.id} icon={item.icon} title={item.title} />
				))}
			</div>
			<a
				href="https://github.com/shdezhahanj/nextjs-graphql-quickstart"
				target="_blank"
				className={classNames(
					'mx-auto cursor-pointer justify-between',
					defaultButtonClasses.outlined.primary,
				)}
				rel="noreferrer"
			>
				<Icon name="GitHub" className="my-auto mr-4" size="2em" />
				<span className="my-auto">Source Code</span>
			</a>
		</div>
	);
}
