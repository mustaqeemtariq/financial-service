import clsx from 'clsx'
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
				'py-4 px-5 shadow-2xl shadow-pagination text-center space-y-5 border border-black border-opacity-20',
				className,
				{
					'border border-success': status === 'Available',
					'border border-false': status === 'Inactive',
					'border border-neutral': status === 'Recruiting'
				}
			)}>
			<img src={image} alt="card-picture" className="mx-auto h-24 w-24" />
			<div className="space-y-2">
				<h4 className="font-semibold">{name}</h4>
				<p
					className={clsx('text-xs', {
						'text-success': status === 'Available',
						'text-false': status === 'Inactive',
						'text-neutral': status === 'Recruiting'
					})}>
					{status}
				</p>
			</div>
		</div>
	)
}
