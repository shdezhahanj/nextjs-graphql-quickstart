'use client';
import { Button, Icon, SelectBox, Typography } from '@/components';
import useTheme from '@/hook/useTheme';
import { type LocaleType, usePathname, useRouter } from '@/i18n/routing';
import { LANGUAGES } from '@/utils/constants';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC, useTransition } from 'react';

export const Header: FC = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();
	const locale = useLocale();
	const { theme, changeTheme } = useTheme();
	const t = useTranslations('HomePage');

	const clickChangeTheme = () => {
		changeTheme(theme === 'dark' ? '' : 'dark');
	};

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value as LocaleType;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	};

	console.log(locale);

	return (
		<header className="sticky left-0 top-0 w-full border-b border-b-regular bg-background p-4">
			<div className="mx-auto flex w-full container px-4 justify-between">
				<div className="flex gap-2">
					<Image src="/assets/svg/logo.svg" alt="logo" width={24} height={24} />
					<Typography.Text className="font-medium capitalize">
						{t('title')}
					</Typography.Text>
				</div>
				<div className="flex gap-4">
					<SelectBox
						options={LANGUAGES}
						onChange={changeLanguage}
						disabled={isPending}
						defaultValue={locale}
					/>
					<Button onClick={clickChangeTheme}>
						<Icon name={theme === 'dark' ? 'Sun' : 'Moon'} />
					</Button>
				</div>
			</div>
		</header>
	);
};
