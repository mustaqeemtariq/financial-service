import { ReactElement } from 'react'
import { Pagination } from './pagination'

type TableParams = {
	headers?: string[]
	items: any
	renderComponent: (item: any) => ReactElement<any, any>
}

export const Table = ({ headers, items, renderComponent }: TableParams) => {
	return (
		<table className="min-w-full table-fixed">
			<thead>
				<tr>
					{headers?.map((header, index) => (
						<th key={header + index} scope="col" className="tw-table-th">
							{header}
						</th>
					))}
				</tr>
			</thead>
			<Pagination
				items={items}
				renderComponent={renderComponent}
				showButton={false}
				showSelect={false}
			/>
		</table>
	)
}
