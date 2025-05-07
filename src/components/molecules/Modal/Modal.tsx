import classNames from 'classnames';
import React, { type FC, type MouseEvent, type ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	title?: string;
	maxWidth?: string;
	className?: string;
}

export const Modal: FC<ModalProps> = ({
	children,
	onClose,
	title,
	maxWidth = 'max-w-[500px]',
	className = '',
}) => {
	const handleOverlayClick = (e: MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
			onClick={handleOverlayClick}
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					onClose();
				}
			}}
		>
			<div
				className={classNames(
					'relative bg-white rounded-2xl w-full p-4 shadow-xl',
					maxWidth,
					className,
				)}
			>
				<button
					type="button"
					className="absolute size-8 rounded-full top-1 right-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 duration-100"
					onClick={onClose}
				>
					✕
				</button>
				{title && (
					<h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
				)}
				<div>{children}</div>
			</div>
		</div>
	);
};
