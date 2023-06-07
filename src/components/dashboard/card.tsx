import clsx from 'clsx'
import React from 'react'

interface DashboardCardProps {
	image: string
	name: string
	status: string
	className?: string
}

export const DashboardCard = ({ image, name, status, className }: DashboardCardProps) => {
	return (
		<div
			className={clsx(
				'py-4 px-5 shadow-2xl text-center space-y-5 border border-black border-opacity-20',
				className,
				status === 'Available' && 'border border-status-success',
				status === 'Inactive' && 'border border-status-false',
				status === 'Recruiting' && 'border border-status-neutral'
			)}>
			<img src={image} alt="card-picture" className="mx-auto h-24 w-24" />
			<div className="space-y-2">
				<h4 className="font-semibold">{name}</h4>
				<p
					className={clsx(
						'text-xs',
						status === 'Available' && 'text-status-success',
						status === 'Inactive' && 'text-status-false',
						status === 'Recruiting' && 'text-status-neutral'
					)}>
					{status}
				</p>
			</div>
		</div>
	)
}
