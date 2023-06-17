import { ReactElement } from 'react'
import { Pagination } from './pagination'

type TableParams = {
	headers?: string[]
	items: any
	renderComponent: (item: any) => ReactElement<any, any>
	showButton?: boolean
	showSelect?: boolean
}

export const Table = ({
	headers,
	items,
	renderComponent,
	showButton = false,
	showSelect = false
}: TableParams) => {
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
				showButton={showButton}
				showSelect={showSelect}
			/>
		</table>
	)
}
