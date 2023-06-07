import React from 'react'
import { AppLayout } from 'components/app/layout'
import { DashboardStatsCard } from 'components/dashboard/stats-card'
import { DashboardCard } from 'components/dashboard/card'
import personImage from 'assets/dashboard/person.png'
import companyImage from 'assets/dashboard/company.png'
import { Notifications } from 'components/dashboard/notifications'
import { AppHeader } from 'components/app/header'
import { Container } from 'components/app/container'
import { AppFooter } from 'components/app/footer'

export const Dashboard = () => {
	const breadcrumbs = [
		{ title: 'Dashboards', path: '/' },
		{ title: 'Admin', path: '/' }
	]
	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="space-y-16 basis-3/4 pt-8">
					<div className="space-y-5">
						<h5 className="text-sm font-semibold text-heading">This Week</h5>
						<div className="grid grid-cols-4 gap-x-7 max-md:grid-cols-2 max-md:gap-x-10 max-md:gap-y-7">
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
						</div>
					</div>
					<div className="space-y-5">
						<h2 className="font-semibold text-xl text-heading">Top Advisors</h2>
						<div className="flex flex-wrap justify-around">
							<DashboardCard image={personImage} name="Advisor Name" status="Available" />
							<DashboardCard image={personImage} name="Advisor Name" status="Inactive" />
							<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						</div>
					</div>
					<div className="space-y-5">
						<h2 className="font-semibold text-xl text-heading">Companies</h2>
						<div className="flex flex-wrap justify-around">
							<DashboardCard
								className="shadow-none"
								image={companyImage}
								name="Company Name"
								status="Available"
							/>
							<DashboardCard
								className="shadow-none"
								image={companyImage}
								name="Company Name"
								status="Inactive"
							/>
							<DashboardCard
								className="shadow-none"
								image={companyImage}
								name="Company Name"
								status="Recruiting"
							/>
						</div>
					</div>
					<AppFooter />
				</div>
				<div className="basis-1/4">
					<Notifications />
				</div>
			</Container>
		</AppLayout>
	)
}
