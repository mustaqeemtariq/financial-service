import {
	ArrowRightIcon,
	BookmarkSquareIcon,
	ChevronRightIcon,
	StarIcon
} from '@heroicons/react/24/outline'
import React from 'react'
import { Search } from './search-input'
import personImage from 'assets/dashboard/person.png'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

interface AppHeaderProps {
	breadcrumbs?: { title: string; path: string }[]
}

export const AppHeader = ({ breadcrumbs }: AppHeaderProps) => {
	return (
		<div className="flex justify-between pl-8 pr-7 py-3 items-center border-b border-black border-opacity-10">
			<div className="flex space-x-5 items-center">
				<BookmarkSquareIcon className="w-4 h-4 stroke-active" aria-hidden="true" />
				<StarIcon className="w-4 h-4 fill-search stroke-active" aria-hidden="true" />
				<div className="flex space-x-2">
					{breadcrumbs?.map((breadcrumb, index) => (
						<div className="flex space-x-2" key={breadcrumb.title}>
							<Link to={breadcrumb.path}>
								<p className={clsx(index === 0 && 'text-active')}>{breadcrumb.title}</p>
							</Link>
							{index < breadcrumbs.length - 1 && <span>/</span>}
						</div>
					))}
				</div>
			</div>
			<div className="flex space-x-20">
				<Search placeholder="Search" className="w-40" />
				<div className="flex space-x-5 items-center">
					<img src={personImage} alt="person" className="w-12 h-12" />
					<p className="text-header">Admin J.Smith</p>
					<div className="flex items-center">
						<span className="text-button font-bold">|</span>
						<ArrowRightIcon className="w-4 h-4 stroke-button stroke-5" aria-hidden="true" />
					</div>
				</div>
			</div>
		</div>
	)
}
