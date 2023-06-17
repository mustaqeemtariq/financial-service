import React, { InputHTMLAttributes } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import moment from 'moment'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	onDateChange?: (value: string, name: string) => void
}

export const InputDate = ({ value, name, label, placeholder, onDateChange }: InputProps) => {
	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target
		if (value === '') {
			return onDateChange?.('', name)
		}
		const selectedDate = moment(event.target.value).format('MMM DD, YYYY')
		onDateChange?.(selectedDate, name)
	}
	return (
		<div className="w-full">
			{label && (
				<label htmlFor={name} className="text-sm text-strapline">
					{label}
				</label>
			)}
			<div className="relative flex items-center">
				<input
					type="date"
					name={name}
					onChange={handleDateChange}
					className="pr-8 opacity-0 absolute z-50 w-full input-cursor-pointer"
				/>
				<input
					type="text"
					disabled
					value={value}
					placeholder={placeholder}
					className="w-36 border-transparent py-1 pl-0 font-semibold sm:text-sm"
				/>
				<div className="absolute inset-y-auto w-full flex justify-end pr-8">
					<ChevronDownIcon className="h-5 w-5 opacity-40" aria-hidden="true" />
				</div>
			</div>
		</div>
	)
}
