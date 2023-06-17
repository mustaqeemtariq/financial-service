import { useState } from 'react'
import clsx from 'clsx'

import { Container } from 'components/app/container'
import { AppHeader } from 'components/app/header'
import { AppLayout } from 'components/app/layout'
import { Notification } from 'components/app/notification'
import { companyIcon, pdfIcon, personIcon } from 'assets/icons'
import { AppFooter } from 'components/app/footer'
import { Table } from 'components/app/table'

export const AdvisorDetails = () => {
	const breadcrumbs = [
		{ title: 'Advisors', path: '/advisors' },
		{ title: 'All Advisors', path: '/advisors/all' }
	]

	const items: any = [
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
	const [tabs, setTabs] = useState('details')
	const [interview, setInterview] = useState('all')

	const renderInterviewsTBody = (items: any) => {
		return (
			<tbody>
				{items.map((item: any, index: number) => (
					<tr
						key={index}
						className={clsx('border-b border-pagination', {
							'border-t border-pagination': index === 0
						})}>
						<td className="tw-table-td">May 10, 2023</td>
						<td className="tw-table-td">{item.title}</td>
						<td className="tw-table-td">{item.title}</td>
						<td className="tw-table-td">{item.status}</td>
						<td className="tw-table-td">{item.status}</td>
						<td className="tw-table-td">{item.price}</td>
					</tr>
				))}
			</tbody>
		)
	}
	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="pt-8 space-y-5 basis-11/12">
					<div className="flex space-x-6 items-center">
						<h2
							onClick={() => setTabs('details')}
							className={clsx(
								'font-semibold cursor-pointer',
								tabs === 'details' ? 'text-xl text-heading' : 'text-base text-active opacity-80'
							)}>
							Advisor Details
						</h2>
						<span>|</span>
						<h2
							onClick={() => setTabs('interviews')}
							className={clsx(
								'font-semibold cursor-pointer',
								tabs === 'interviews' ? 'text-xl text-heading' : 'text-base text-active opacity-80'
							)}>
							View Interviews
						</h2>
						<span>|</span>
						<h2
							onClick={() => setTabs('chat')}
							className={clsx(
								'font-semibold cursor-pointer',
								tabs === 'chat' ? 'text-xl text-heading' : 'text-base text-active opacity-80'
							)}>
							Start Chat
						</h2>
					</div>
					<div className="w-full rounded-md shadow-2xl shadow-pagination">
						<div className="p-2.5">
							<div className="flex justify-between items-center rounded-sm bg-section py-5 px-6">
								{tabs === 'details' ? (
									<>
										<div className="flex gap-x-3 items-center">
											<img src={personIcon} alt="person" className="w-20 h-20" />
											<h2 className="font-medium text-2xl text-heading">Alexandar Smith</h2>
										</div>
										<div className="space-y-4">
											<h6>Financial planner</h6>
											<div className="flex gap-x-4 items-center">
												<h6>10+ years of experience</h6>
												<img src={pdfIcon} className="w-5 h-5 cursor-pointer" />
											</div>
										</div>
										<div className="space-y-2">
											<button className="text-center w-40 text-button border border-button px-4 py-2">
												Deactivate
											</button>
											<p className="text-xs">Joined on December 31, 2022</p>
										</div>
									</>
								) : (
									<>
										<div className="flex gap-x-3 items-center">
											<img src={personIcon} alt="person" className="w-20 h-20" />
											<h2 className="font-medium text-2xl text-heading">Alexandar Smith</h2>
											<span>|</span>
											<div>Financial Planner</div>
										</div>
										<button
											onClick={() =>
												setInterview(prev => (prev === 'scheduled' ? 'all' : 'scheduled'))
											}
											className="text-interview px-8 py-2 bg-white">
											{interview === 'all' ? 'View Scheduled interviews' : 'Back to all interview'}
										</button>
									</>
								)}
							</div>
						</div>
						<div className="px-6 py-5">
							<div className={clsx({ hidden: tabs !== 'details' })}>
								<p className="text-strapline font-semibold text-sm pb-3">Booking Status</p>
								{items.length > 0 ? (
									items.map((item: any, index: number) => (
										<div
											key={index}
											className={clsx(
												'border-b border-pagination px-3 py-6 grid grid-col-5 grid-flow-col items-center',
												open ? 'gap-x-4' : 'gap-x-11',
												{ 'border-t': index === 0 }
											)}>
											<p className="text-sm">{item?.price}</p>
											<p className="text-sm">{item?.status}</p>
											<p className="text-sm">{item?.date}</p>
											<p className="text-sm">{item?.title}</p>
											<div className={clsx('flex items-center', open ? 'space-x-2' : 'space-x-4')}>
												<img src={item?.company?.image} alt="person" className="w-14 h-14" />
												<p className="font-semibold text-sm">{item?.company?.name}</p>
											</div>
										</div>
									))
								) : (
									<p className="text-heading mt-6">No record found</p>
								)}
							</div>
							<div className={clsx({ hidden: tabs !== 'interviews' })}>
								<Table
									headers={['Date', 'Job Role', 'Client', 'Status', 'Hiring Period', 'Hired For']}
									items={items}
									renderComponent={renderInterviewsTBody}
								/>
							</div>
						</div>
					</div>
					<AppFooter />
				</div>
				<Notification openNotifications={open} setOpenNotifications={setOpen} />
			</Container>
		</AppLayout>
	)
}
