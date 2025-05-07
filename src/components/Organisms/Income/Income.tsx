'use client';

import { Modal } from '@/components/molecules/Modal/Modal';
import { TransactionForm } from '@/components/molecules/TransactionForm/TransactionForm';
import React, { type FC, useState } from 'react';

export const Income: FC = () => {
	const [isOpenModal, setIsModalOpen] = useState(false);

	const handleAddIncome = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<button
				onClick={handleAddIncome}
				className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
				type="button"
			>
				Add Income
			</button>

			{isOpenModal && (
				<Modal onClose={() => setIsModalOpen(false)} title="Income">
					<TransactionForm />
				</Modal>
			)}
		</>
	);
};
