import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { companyIcon, personIcon } from 'assets/icons'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

interface NotificationProps {
	expandable?: boolean
	getStatus?: (value: boolean) => void
}

export const Notification = ({ getStatus, expandable = true }: NotificationProps) => {
	const [open, setOpen] = useState(false)
	return (
		<div className={clsx('relative bg-stats min-h-full', !open ? 'px-4' : 'p-6')}>
			<div className={clsx('space-y-5', !open && 'hidden')}>
				<h5 className="text-sm font-semibold">Notifications</h5>
				<div>
					<p className="text-sm">ABC Company Calling</p>
					<p className="text-xs text-black opacity-40">Just now</p>
				</div>
				<h5 className="text-sm font-semibold">Advisor&rsquo;s Activities</h5>
				<div className="flex space-x-2">
					<img src={personIcon} alt="person" className="w-6 h-6" />
					<div>
						<p className="text-sm">Jame&apos;s Interview Started with Company X</p>
						<p className="text-xs text-black opacity-40">Just now</p>
					</div>
				</div>
				<h5 className="text-sm font-semibold">New Clients/Companies</h5>
				<div className="flex space-x-2">
					<img src={companyIcon} alt="person" className="w-6 h-6" />
					<div>
						<p className="text-sm">HealthTech.co</p>
						<p className="text-xs text-black opacity-40">Just now</p>
					</div>
				</div>
			</div>
			<div
				onClick={() => {
					getStatus?.(false)
					setOpen(false)
				}}
				className={clsx(
					'absolute flex cursor-pointer items-center justify-center inset-y-1/2 right-full bg-stats h-20 w-3.5',
					!open && expandable && 'hidden'
				)}>
				<ChevronRightIcon className="h-4 w-4 opacity-30" aria-hidden="true" />
			</div>
			<div
				onClick={() => {
					getStatus?.(true)
					setOpen(true)
				}}
				className={clsx(
					'absolute flex cursor-pointer items-center justify-center inset-y-1/2 right-full align-middle bg-stats h-20 w-3.5',
					open && expandable && 'hidden'
				)}>
				<ChevronLeftIcon className="h-4 w-4 opacity-30" aria-hidden="true" />
			</div>
		</div>
	)
}
