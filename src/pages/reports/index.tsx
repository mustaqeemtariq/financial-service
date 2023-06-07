import React from 'react'
import { AppLayout } from 'components/app/layout'
import { Container } from 'components/app/container'
import { DashboardCard } from 'components/dashboard/card'
import personImage from 'assets/dashboard/person.png'
import { AppFooter } from 'components/app/footer'
import { AppHeader } from 'components/app/header'

export const Reports = () => {
	const breadcrumbs = [
		{ title: 'Reports', path: '/reports' },
		{ title: 'Top Advisors', path: '/reports/top-advisors' }
	]
	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="pt-8 space-y-5">
					<h2 className="font-semibold text-xl text-heading">Top Advisors</h2>
					<div className="grid grid-cols-5 justify-around gap-y-7 gap-x-11">
						<DashboardCard image={personImage} name="Advisor Name" status="Available" />
						<DashboardCard image={personImage} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Available" />
						<DashboardCard image={personImage} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Available" />
						<DashboardCard image={personImage} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Available" />
						<DashboardCard image={personImage} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
						<DashboardCard image={personImage} name="Advisor Name" status="Hired" />
					</div>
					<AppFooter />
				</div>
			</Container>
		</AppLayout>
	)
}
