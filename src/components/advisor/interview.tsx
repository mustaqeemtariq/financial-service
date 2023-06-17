import clsx from 'clsx'

import { Table } from 'components/app/table'

interface AdvisorInterviewProps {
	data: any
}

export const AdvisorInterview = ({ data }: AdvisorInterviewProps) => {
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
		<Table
			headers={['Date', 'Job Role', 'Client', 'Status', 'Hiring Period', 'Hired For']}
			items={data}
			renderComponent={renderInterviewsTBody}
		/>
	)
}
