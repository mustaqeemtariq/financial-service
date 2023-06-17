import clsx from 'clsx'
import React from 'react'

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode
}
export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				'flex w-full justify-center bg-neutral rounded-md border border-transparent py-2 px-6 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
				className,
				{
					'pointer-events-none cursor-not-allowed': props.disabled
				}
			)}>
			{children}
		</button>
	)
}
