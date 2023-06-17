import { useState } from 'react'

import clsx from 'clsx'
import { personIcon } from 'assets/icons'

import { AdvisorForm } from 'components/advisor/form'
import { Container } from 'components/app/container'
import { AppFooter } from 'components/app/footer'
import { AppHeader } from 'components/app/header'
import { AppLayout } from 'components/app/layout'
import { Notification } from 'components/app/notification'
import { Pagination } from 'components/app/pagination'
import { DashboardCard } from 'components/dashboard/card'
import { ImageUpload } from 'components/fields/image-upload'

export const AddAdvisor = () => {
	const breadcrumbs = [
		{ title: 'Advisors', path: '/advisors' },
		{ title: 'All Advisors', path: '/advisors/add' }
	]

	const items = [
		{ image: personIcon, name: 'Advisor Name', status: 'Available' },
		{ image: personIcon, name: 'Advisor Name', status: 'Available' },
		{ image: personIcon, name: 'Advisor Name', status: 'Available' },
		{ image: personIcon, name: 'Advisor Name', status: 'Available' },
		{ image: personIcon, name: 'Advisor Name', status: 'Available' },
		{ image: personIcon, name: 'Advisor Name', status: 'Available' },
		{ image: personIcon, name: 'Advisor Name', status: 'Available' }
	]

	const [open, setOpen] = useState(false)
	const renderComponent = (items: any) => {
		return (
			<div
				className={clsx(
					'grid gap-y-7 gap-x-11 px-6 py-5',
					open
						? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'
						: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7'
				)}>
				{items.map((item: any, index: number) => (
					<DashboardCard key={index} image={item.image} name={item.name} status={item.status} />
				))}
			</div>
		)
	}

	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="pt-8 space-y-5">
					<h2 className="font-semibold text-xl text-heading">Add Advisor</h2>
					<div className="w-full rounded-md shadow-2xl shadow-pagination space-y-9">
						<div className="p-2.5">
							<div className="bg-section rounded-sm flex gap-x-6 py-5 px-6">
								<ImageUpload name="upload-advisor" labelText="Upload" />
								<AdvisorForm />
							</div>
						</div>
						<Pagination
							totalSelectedPages={items?.length}
							items={items}
							renderComponent={renderComponent}
							showSelect={false}
							showButton={true}
						/>
					</div>
					<AppFooter />
				</div>
				<Notification openNotifications={open} setOpenNotifications={setOpen} />
			</Container>
		</AppLayout>
	)
}
