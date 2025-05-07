import { Expense, Income } from '@/components';

export default function HomePage() {
	return (
		<div className="container mx-auto p-4 ">
			<div className="flex items-center gap-4">
				<Income />
				<Expense />
			</div>
		</div>
	);
}
