import { useState } from 'react'
import clsx from 'clsx'

import { Container } from 'components/app/container'
import { AppHeader } from 'components/app/header'
import { AppLayout } from 'components/app/layout'
import { Notification } from 'components/app/notification'
import { companyIcon, personIcon } from 'assets/icons'
import { AppFooter } from 'components/app/footer'

export const AdvisorDetails = () => {
	const breadcrumbs = [
		{ title: 'Advisors', path: '/advisors' },
		{ title: 'All Advisors', path: '/advisors/all' }
	]

	const items = [
		{
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		}
	]

	const [open, setOpen] = useState(false)
	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="pt-8 space-y-5 basis-11/12">
					<div className="flex space-x-6 items-center">
						<h2 className="font-semibold text-xl text-heading">Advisor Details</h2>
						<span>|</span>
						<h2 className="font-semibold text-base text-active opacity-80">View Interviews</h2>
					</div>
					<div className="w-full rounded-md shadow-2xl shadow-pagination p-8 space-y-9">
						<div className="flex justify-between items-center">
							<div className="flex space-x-2.5 items-center">
								<img src={personIcon} alt="person" className="w-20 h-20" />
								<h2 className="font-medium text-2xl text-heading">Alexandar Smith</h2>
							</div>
							<div className="space-y-4">
								<h6>Financial planner</h6>
								<h6>10+ years of experience</h6>
							</div>
							<div className="space-y-2">
								<button className="text-center w-40 text-button border border-button px-4 py-2">
									Deactivate
								</button>
								<p className="text-xs">Joined on December 31, 2022</p>
							</div>
						</div>
						<div className="space-y-3">
							<p className="text-strapline text-sm">Booking Status</p>
							{items?.map((item: any, index: number) => (
								<div
									key={index}
									className={clsx(
										'border-b border-gray-300 p-6 grid grid-col-6 grid-flow-col items-center',
										open ? 'gap-x-4' : 'gap-x-11',
										{ 'border-t': index === 0 }
									)}>
									<p className="text-sm">{item?.price}</p>
									<p className="text-sm">{item?.status}</p>
									<p className="text-sm">{item?.price}</p>
									<p className="text-sm">{item?.date}</p>
									<p className="text-sm">{item?.title}</p>
									<div className={clsx('flex items-center', open ? 'space-x-2' : 'space-x-4')}>
										<img src={item?.company?.image} alt="person" className="w-14 h-14" />
										<p className="font-semibold text-sm">{item?.company?.name}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<AppFooter />
				</div>
				<Notification openNotifications={open} setOpenNotifications={setOpen} />
			</Container>
		</AppLayout>
	)
}
