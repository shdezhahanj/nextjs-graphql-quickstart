import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'feat', // New feature
				'fix', // Bug fix
				'docs', // Documentation changes
				'style', // Changes that do not affect the meaning of the code (white-space, formatting, etc.)
				'refactor', // Code changes that neither fix a bug nor add a feature
				'perf', // Performance improvement
				'test', // Adding missing tests or correcting existing tests
				'build', // Changes that affect the build system or external dependencies (example scopes: npm)
				'ci', // Changes to CI configuration files and scripts
				'chore', // Other changes that don't modify src or test files
				'revert', // Reverts a previous commit
			],
		],
	},
};

export default Configuration;
