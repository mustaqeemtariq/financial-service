import { useState } from 'react'
import { toast } from 'react-hot-toast'
import clsx from 'clsx'

import { AppLayout } from 'components/app/layout'
import { Container } from 'components/app/container'
import { AppFooter } from 'components/app/footer'
import { AppHeader } from 'components/app/header'
import { companyIcon, personIcon } from 'assets/icons'
import { Notification } from 'components/app/notification'
import { InputDate } from 'components/fields/date'
import { Table } from 'components/app/table'

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
		if (name === 'from') setSelectedDate(() => ({ to: '', from: value }))
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
			<tbody>
				{items.map((item: any, index: number) => (
					<tr key={index} className=" border">
						<td className="tw-table-td pr-0">
							<div className={clsx('flex items-center', open ? 'gap-x-2' : 'gap-x-4')}>
								<img src={item.image} alt="person" className="w-14 h-14" />
								<p className="font-semibold text-sm">{item.name}</p>
							</div>
						</td>
						<td className="tw-table-td whitespace-nowrap">{item.price}</td>
						<td className="tw-table-td">{item.status}</td>
						<td className="tw-table-td">{item.date}</td>
						<td className="tw-table-td">{item.title}</td>
						<td className="tw-table-td pl-0">
							<div className={clsx('flex items-center', open ? 'gap-x-2' : 'gap-x-4')}>
								<img src={item.company.image} alt="person" className="w-14 h-14" />
								<p className="text-sm">{item.company.name}</p>
							</div>
						</td>
					</tr>
				))}
			</tbody>
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
					<Table items={items} renderComponent={renderComponent} showSelect={true} />
					<AppFooter />
				</div>
				<Notification openNotifications={open} setOpenNotifications={setOpen} />
			</Container>
		</AppLayout>
	)
}
