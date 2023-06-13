import { useState } from 'react'
import clsx from 'clsx'

import { AppLayout } from 'components/app/layout'
import { Container } from 'components/app/container'
import { DashboardCard } from 'components/dashboard/card'
import { AppFooter } from 'components/app/footer'
import { AppHeader } from 'components/app/header'
import { personIcon } from 'assets/icons'
import { Notification } from 'components/app/notification'

export const Advisors = () => {
	const breadcrumbs = [
		{ title: 'Advisors', path: '/advisors' },
		{ title: 'All Advisors', path: '/advisors' }
	]

	const [open, setOpen] = useState(false)

	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="pt-8 space-y-5">
					<h2 className="font-semibold text-xl text-heading">All Advisors</h2>
					<div
						className={clsx(
							'grid gap-y-7 gap-x-11',
							open
								? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'
								: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7'
						)}>
						<DashboardCard image={personIcon} name="Advisor Name" status="Available" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Available" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Available" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Available" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Inactive" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
						<DashboardCard image={personIcon} name="Advisor Name" status="Hired" />
					</div>
					<AppFooter />
				</div>
				<Notification openNotifications={open} setOpenNotifications={setOpen} />
			</Container>
		</AppLayout>
	)
}
