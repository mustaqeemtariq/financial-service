import { AppLayout } from 'components/app/layout'
import { DashboardStatsCard } from 'components/dashboard/stats-card'
import { DashboardCard } from 'components/dashboard/card'
import { AppHeader } from 'components/app/header'
import { Container } from 'components/app/container'
import { AppFooter } from 'components/app/footer'
import { companyIcon, personIcon } from 'assets/icons'
import { Notification } from 'components/app/notification'
import { Filter } from 'components/inputs/filter'

export const Dashboard = () => {
	const breadcrumbs = [
		{ title: 'Dashboards', path: '/' },
		{ title: 'Admin', path: '/' }
	]
	const options = [{ name: 'This Week' }, { name: 'This Month' }, { name: 'This Year' }]
	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="space-y-16 basis-3/4 pt-8">
					<div className="space-y-5">
						<Filter options={options} />
						<div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7">
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
							<DashboardStatsCard title="Companies" stats={111} percentage="11.01%" />
						</div>
					</div>
					<div className="space-y-5">
						<h2 className="font-semibold text-xl text-heading">Top Advisors</h2>
						<div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7">
							<DashboardCard image={personIcon} name="Advisor Name" status="Available" />
							<DashboardCard image={personIcon} name="Advisor Name" status="Inactive" />
							<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
							<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						</div>
					</div>
					<div className="space-y-5">
						<h2 className="font-semibold text-xl text-heading">Companies</h2>
						<div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7">
							<DashboardCard
								className="shadow-none"
								image={companyIcon}
								name="Company Name"
								status="Available"
							/>
							<DashboardCard
								className="shadow-none"
								image={companyIcon}
								name="Company Name"
								status="Inactive"
							/>
							<DashboardCard
								className="shadow-none"
								image={companyIcon}
								name="Company Name"
								status="Recruiting"
							/>
						</div>
					</div>
					<AppFooter />
				</div>
				<div className="basis-1/4">
					<Notification expandable={false} />
				</div>
			</Container>
		</AppLayout>
	)
}
