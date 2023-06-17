import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface PaginationProps {
	items?: Array<any>
	itemsPerPage?: number
	showButton: boolean
	showSelect: boolean
	renderComponent: (item: any) => JSX.Element
	totalSelectedPages?: number
}

const ShowItemPerPageOptions = [5, 10, 30, 50, 70, 100]

const DEFAULT_ITEMS_PER_PAGE = 5
const DEFAULT_PAGE_INDEX = 0

export const Pagination = ({
	items,
	renderComponent,
	showSelect,
	showButton,
	totalSelectedPages = 100
}: PaginationProps) => {
	const [pageIndex, setPageIndex] = useState(DEFAULT_PAGE_INDEX)
	const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE)

	const sliceStart = pageIndex * itemsPerPage
	const sliceEnd = sliceStart + itemsPerPage

	const [currItems, setCurrItems] = useState(items?.slice(sliceStart, sliceEnd))

	const numberOfBottomPages = Math.ceil((items ?? []).length / itemsPerPage)

	useEffect(() => {
		const updatedCurrItems = items?.slice(sliceStart, sliceEnd)

		if (updatedCurrItems?.length === 0 && numberOfBottomPages !== 0) {
			setPageIndex(numberOfBottomPages - 1)
		}
	}, [items, numberOfBottomPages])

	useEffect(() => {
		setCurrItems(items?.slice(sliceStart, sliceEnd))
	}, [items, items?.length, sliceStart, sliceEnd, pageIndex])

	useEffect(() => {
		setCurrItems(items?.slice(sliceStart, sliceEnd))
	}, [pageIndex])

	const totalPages = Math.ceil((items ?? []).length / itemsPerPage)

	let pageArray = [0, 1, 2]
		.map(v => pageIndex + 1 + v)
		.filter(page => page > 0 && page <= totalPages)

	if (pageIndex > totalPages - 4) {
		pageArray = [-1, 0, 1, 2]
			.map(v => pageIndex + 1 + v)
			.filter(page => page > 0 && page <= totalPages)
	}
	if (pageIndex > totalPages - 3) {
		pageArray = [-2, -1, 0, 1, 2]
			.map(v => pageIndex + 1 + v)
			.filter(page => page > 0 && page <= totalPages)
	}
	if (pageIndex > totalPages - 2) {
		pageArray = [-3, -2, -1, 0, 1, 2, 3]
			.map(v => pageIndex + 1 + v)
			.filter(page => page > 0 && page <= totalPages)
	}

	const goToPage = (index: number) => {
		if (index >= 0 && index <= totalPages - 1) {
			setPageIndex(index)
		}
	}

	const onNext = () => {
		// subtracting one because our page index starts from 0
		if (pageIndex < totalPages - 1) {
			setPageIndex(index => index + 1)
		}
	}

	const onPrevious = () => {
		if (pageIndex - 1 >= 0) {
			setPageIndex(index => index - 1)
		}
	}
	const onFirst = () => {
		setPageIndex(0)
	}
	return (
		<>
			{renderComponent(currItems)}
			<tfoot className="table-footer-group">
				<tr>
					<td colSpan={200}>
						<div className="flex items-center bg-[#FAFAFA] py-4">
							<div className="flex flex-1 justify-between sm:hidden px-2">
								<button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
									Previous
								</button>
								<button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
									Next
								</button>
							</div>
							<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">
								{showSelect && (
									<div>
										<p className="text-base border font-semibold border-pagination rounded w-80 text-center py-3.5 bg-pagination text-heading whitespace-nowrap">
											Showing
											<select
												value={itemsPerPage}
												onChange={event => {
													setItemsPerPage(Number(event.target.value))
												}}
												className="py-1 pr-5 border-transparent bg-pagination text-neutral focus:border-none focus:ring-0">
												{ShowItemPerPageOptions.map(option => (
													<option key={option} className="font-semibold" value={option}>
														{option}
													</option>
												))}
											</select>
											of <span className="font-semibold"> {totalSelectedPages} </span>
										</p>
									</div>
								)}

								{showButton && (
									<div className="w-full sm:w-auto text-right mt-2 sm:mt-0">
										<nav
											className="isolate inline-flex -space-x-px rounded-md"
											aria-label="Pagination">
											<button
												className={clsx(
													'relative inline-flex items-center rounded-l-md  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
													{ 'disabled text-gray-400': pageIndex == 0 }
												)}
												onClick={onPrevious}
												onDoubleClick={onFirst}>
												<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
												<span className="sr-only">Previous</span>
											</button>

											{pageArray.map(page => (
												<button
													key={page}
													className={clsx(
														'relative inline-flex items-center px-4 py-2 text-sm font-medium',
														page === pageIndex + 1
															? 'className="relative z-10 inline-flex items-center bg-pagination rounded-full px-4 py-2 text-sm font-medium focus:z-20'
															: 'text-gray-500'
													)}
													onClick={() => goToPage(page - 1)}>
													{page}
												</button>
											))}
											{!pageArray.includes(totalPages) && (
												<>
													{pageIndex < totalPages - 4 ? <div>...</div> : ''}
													<button
														key={'last'}
														className={clsx(
															'relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500',
															totalPages - 1 === pageIndex
																? 'className="relative z-10 inline-flex items-center border border-indigo-600 bg-indigo-600 text-white rounded-full px-4 py-2 text-sm font-medium focus:z-20'
																: ''
														)}
														onClick={() => goToPage(totalPages - 1)}>
														{totalPages}
													</button>
												</>
											)}

											<button
												className={clsx(
													'relative inline-flex items-center rounded-r-md px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
													{ 'disabled text-gray-400': totalPages == pageIndex + 1 }
												)}
												onClick={onNext}>
												<span className="sr-only">Next</span>
												<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
											</button>
										</nav>
									</div>
								)}
							</div>
						</div>
					</td>
				</tr>
			</tfoot>
		</>
	)
}
