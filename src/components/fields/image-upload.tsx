import React, { InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	labelText?: string
	onUpload?: (files: FileList) => void
}

export const ImageUpload = ({ name, labelText, onUpload }: InputProps) => {
	const [files, setFiles] = useState<FileList>()

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		if (!files) return
		setFiles(files)
		onUpload?.(files)
	}

	return (
		<div>
			<div className="relative">
				<input
					type="file"
					className="hidden w-full appearance-none"
					accept=".jpg,.jpeg,.png"
					name={name}
					onChange={handleInputChange}
				/>
				<div
					className="flex flex-col cursor-pointer justify-center items-center text-white rounded-full w-24 h-24 bg-black bg-blend-overlay bg-opacity-80 bg-advisor-image bg-contain bg-no-repeat bg-center"
					onClick={() => {
						const fileInput = document.querySelector(`[name=${name}]`) as HTMLInputElement
						fileInput.click()
					}}>
					{files && files.length > 0 ? (
						<img
							src={URL.createObjectURL(files[0])}
							alt="advisor-image"
							className="rounded-full w-24 h-24"
						/>
					) : (
						<p>{labelText}</p>
					)}
				</div>
			</div>
		</div>
	)
}
