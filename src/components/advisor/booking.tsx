import clsx from 'clsx'

import { Table } from 'components/app/table'

interface AdvisorBookingProps {
	data: any
}

export const AdvisorBooking = ({ data }: AdvisorBookingProps) => {
	const renderBookingsTBody = (items: any) => {
		return (
			<tbody>
				{items.map((item: any, index: number) => (
					<tr
						key={index}
						className={clsx('border-b border-pagination', {
							'border-t border-pagination': index === 0
						})}>
						<td className="tw-table-td">{item.price}</td>
						<td className="tw-table-td">{item.status}</td>
						<td className="tw-table-td">{item.date}</td>
						<td className="tw-table-td">{item.title}</td>
						<td>
							<div className="flex items-center space-x-4">
								<img src={item?.company?.image} alt="person" className="w-14 h-14" />
								<p className="font-semibold text-sm">{item?.company?.name}</p>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		)
	}

	return <Table items={data} renderComponent={renderBookingsTBody} />
}
