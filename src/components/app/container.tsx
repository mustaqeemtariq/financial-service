import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
	className?: string
	children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
	return (
		<div className={clsx('pl-6 sm:pl-8 relative z-50 flex justify-between space-x-7', className)}>
			{children}
		</div>
	)
}
