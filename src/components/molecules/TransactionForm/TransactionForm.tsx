'use client';

import { useTranslations } from 'next-intl';
import React, { type FC, useState, type FormEvent } from 'react';

interface Props {
	onSubmit?: (data: {
		amount: number;
		description: string;
		category: string;
	}) => void;
	onCancel?: () => void;
}

export const TransactionForm: FC<Props> = ({ onSubmit, onCancel }) => {
	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const t = useTranslations('TransactionForm');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// onSubmit({
		//   amount: parseFloat(amount),
		//   description,
		//   category,
		// })
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label
					htmlFor="number"
					className="block text-sm font-medium text-gray-700"
				>
					{t('amount')}
				</label>
				<input
					id="number"
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					required
					className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
					placeholder="Enter amount"
				/>
			</div>

			<div>
				<label
					htmlFor="description"
					className="block text-sm font-medium text-gray-700"
				>
					{t('description')}
				</label>
				<input
					id="description"
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
					placeholder="e.g., Salary or Groceries"
				/>
			</div>

			<div>
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					{t('category')}
				</label>
				<select
					id="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					required
					className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
				>
					<option value="" disabled>
						Select category
					</option>
					<option value="Salary">Salary</option>
					<option value="Food">Food</option>
					<option value="Transport">Transport</option>
					<option value="Shopping">Shopping</option>
					<option value="Utilities">Utilities</option>
					<option value="Other">Other</option>
				</select>
			</div>

			<div className="flex justify-end gap-3 pt-4">
				<button
					type="button"
					onClick={onCancel}
					className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
				>
					Save
				</button>
			</div>
		</form>
	);
};
