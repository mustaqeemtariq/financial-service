import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText?: string
	register: UseFormRegister<any>
	error?: FieldErrors<FieldValues>
	name: string
	className?: string
}
export const Input = ({
	labelText,
	name,
	placeholder,
	register,
	error,
	className,
	...props
}: InputProps) => {
	const errorText = error?.[name]?.message as string

	return (
		<div className="w-full">
			{labelText && (
				<label htmlFor={name} className="block text-[#0D0C18]">
					{labelText}
				</label>
			)}
			<div>
				<input
					{...props}
					{...(register?.(name) ?? {})}
					placeholder={placeholder}
					className={clsx(
						'w-full text-ellipsis overflow-hidden bg-transparent placeholder-heading text-heading border border-transparent focus:outline-none active:bg-transparent',
						className
					)}
				/>
			</div>
			{errorText && <p className="text-xs text-red-600 ">{errorText}</p>}
		</div>
	)
}
