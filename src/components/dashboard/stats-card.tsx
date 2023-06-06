import React from 'react'

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
				<p className="text-xs">{percentage}</p>
			</div>
		</div>
	)
}
