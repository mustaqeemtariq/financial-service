import { useState } from 'react'
import clsx from 'clsx'

import { AppLayout } from 'components/app/layout'
import { Container } from 'components/app/container'
import { AppFooter } from 'components/app/footer'
import { AppHeader } from 'components/app/header'
import { Pagination } from 'components/app/pagination'
import { companyIcon, personIcon } from 'assets/icons'
import { Notification } from 'components/app/notification'
import { InputDate } from 'components/fields/date'
import { toast } from 'react-hot-toast'

export const Bookings = () => {
	const breadcrumbs = [
		{ title: 'Reports', path: '/reports/top-advisors' },
		{ title: 'Bookings', path: '/reports/bookings' }
	]

	const items = [
		{
			image: personIcon,
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			image: personIcon,
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			image: personIcon,
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			image: personIcon,
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			image: personIcon,
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		},
		{
			image: personIcon,
			name: 'Advisor Name',
			price: '$ 50 k',
			status: 'Hired for 3 months',
			date: 'June 01, 2023 - August 31, 2023',
			title: 'Business Plan Assisstance',
			company: { image: companyIcon, name: 'Company Name' }
		}
	]

	const [open, setOpen] = useState(false)
	const [selectedDate, setSelectedDate] = useState({ from: '', to: '' })

	const onDateChange = (value: string, name: string) => {
		if (name === 'from') setSelectedDate(prev => ({ ...prev, from: value }))
		if (name === 'to') {
			if (new Date(value) > new Date(selectedDate.from)) {
				setSelectedDate(prev => ({ ...prev, to: value }))
			} else {
				toast.error('To Date cannot be less than From Date')
			}
		}
	}

	const renderComponent = (items: any) => {
		return (
			<div className="space-y-4">
				{items?.map((item: any, index: number) => (
					<div
						key={index}
						className={clsx(
							'border border-gray-300 p-6 grid grid-col-6 grid-flow-col items-center',
							open ? 'gap-x-4' : 'gap-x-11'
						)}>
						<div className={clsx('flex items-center', open ? 'space-x-2' : 'space-x-4')}>
							<img src={item?.image} alt="person" className="w-14 h-14" />
							<p className="font-semibold text-sm">{item?.name}</p>
						</div>
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
		)
	}

	return (
		<AppLayout>
			<AppHeader breadcrumbs={breadcrumbs} />
			<Container>
				<div className="space-y-5 pt-8 pr-6 sm:pr-8">
					<div className="flex justify-between items-center">
						<h2 className="font-semibold text-xl text-heading">Bookings</h2>

						<div className="flex items-center space-x-2">
							<InputDate
								value={selectedDate.from}
								label="From"
								name="from"
								onDateChange={onDateChange}
							/>
							<InputDate value={selectedDate.to} label="To" name="to" onDateChange={onDateChange} />
						</div>
					</div>
					<Pagination
						totalSelectedPages={items?.length}
						items={items}
						renderComponent={renderComponent}
						showButton={false}
						showSelect={true}
					/>
					<AppFooter />
				</div>
				<Notification openNotifications={open} setOpenNotifications={setOpen} />
			</Container>
		</AppLayout>
	)
}
