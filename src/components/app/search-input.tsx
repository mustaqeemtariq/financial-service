import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type SearchInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

export const Search = ({ className, placeholder, ...restProp }: SearchInputProps) => {
	return (
		<div>
			<div className="relative mt-1 rounded-md">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<MagnifyingGlassIcon
						className="h-8 w-8 pr-2 text-black decoration-solid stroke-slate-300"
						aria-hidden="true"
					/>
				</div>
				<input
					type="search"
					{...restProp}
					name="search"
					id="search"
					className={clsx(
						'block p-1.5 pl-10 rounded outline-none bg-search border-transparent text-base',
						className?.includes('w-') ? className : 'sm:w-[420px]'
					)}
					placeholder={placeholder ?? 'Search...'}
					autoComplete="off"
				/>
			</div>
		</div>
	)
}
