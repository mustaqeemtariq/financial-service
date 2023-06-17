import { pdfIcon } from 'assets/icons'
import React, { InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	labelText?: string
	onUpload?: (files: FileList) => void
}

export default function FileUpload({ name, labelText, onUpload }: InputProps) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [files, setFiles] = useState<FileList>()
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		if (!files) return
		setFiles(files)
		onUpload?.(files)
	}

	return (
		<div className="w-full">
			{labelText && (
				<label htmlFor={name} className="block text-[#0D0C18]">
					{labelText}
				</label>
			)}
			<div className="relative">
				<input
					type="file"
					className="hidden w-full appearance-none"
					accept=".pdf"
					name={name}
					onChange={handleInputChange}
				/>
				<button
					className="flex items-center cursor-pointer gap-x-1.5 text-xs text-neutral rounded-md bg-white bg-opacity-30 py-1 px-2.5"
					onClick={() => {
						const fileInput = document.querySelector(`[name=${name}]`) as HTMLInputElement
						fileInput.click()
					}}>
					<img src={pdfIcon} alt="pdf" className="h-3.5 w-3.5" />
					Add Resume
				</button>
			</div>
		</div>
	)
}
