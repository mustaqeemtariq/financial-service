import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
interface StatsCardProps {
	title: string
	stats: number
	percentage: string
}
export const DashboardStatsCard = ({ title, stats, percentage }: StatsCardProps) => {
	return (
		<div className="p-6 pr-8 bg-stats rounded-2xl space-y-2">
			<h4 className="font-semibold text-sm">{title}</h4>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">{stats}</h3>
				<div className="flex space-x-1.5">
					<p className="text-xs">{percentage}</p>
					<ArrowTrendingUpIcon className="w-3 h-3" aria-hidden="true" />
				</div>
			</div>
		</div>
	)
}
