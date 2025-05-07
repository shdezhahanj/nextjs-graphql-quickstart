'use client';

import { Modal } from '@/components/molecules/Modal/Modal';
import { TransactionForm } from '@/components/molecules/TransactionForm/TransactionForm';
import React, { type FC, useState } from 'react';

export const Expense: FC = () => {
	const [isOpenModal, setIsModalOpen] = useState(false);

	const handleAddExpense = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<button
				onClick={handleAddExpense}
				className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
				type="button"
			>
				Add Expense
			</button>

			{isOpenModal && (
				<Modal onClose={() => setIsModalOpen(false)} title="Expense">
					<TransactionForm />
				</Modal>
			)}
		</>
	);
};
