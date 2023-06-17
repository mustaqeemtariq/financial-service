import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MapPinIcon } from '@heroicons/react/24/outline'
import * as yup from 'yup'

import { Input } from 'components/fields/input'
import { Button } from 'components/fields/button'
import FileUpload from 'components/fields/file-upload'

export const AdvisorForm = () => {
	const schema = yup.object<Advisor>().shape({
		name: yup.string().required('Name is required'),
		loca: yup.string().email('Email must be a valid email address').required('Email is required'),
		location: yup.string().required('Location is required'),
		email: yup.string().email('Email must be a valid email address').required('Email is required'),
		designation: yup.string().required('Designation is required'),
		experience: yup
			.number()
			.typeError('Experience must be a number')
			.transform((value, originalValue) => (originalValue === '' ? undefined : value))
			.required('Experience is required')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Advisor>({
		resolver: yupResolver(schema),
		mode: 'onSubmit'
	})

	const handleFormSubmit = (data: Advisor) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<div className="grid grid-cols-3 grid-rows-2 gap-y-3 ">
				<div>
					<Input
						placeholder="Add Full Name"
						name="name"
						register={register}
						error={errors}
						className="font-medium text-2xl"
					/>
				</div>
				<div>
					<Input
						placeholder="Add Designation"
						name="designation"
						register={register}
						error={errors}
					/>
				</div>
				<div>
					<Button>Save Advisor</Button>
				</div>
				<div>
					<div className="flex gap-x-1">
						<MapPinIcon className="h-3.5 w-3.5 mt-1.5" aria-hidden="true" />
						<Input
							placeholder="Add Location"
							name="location"
							register={register}
							className="text-sm"
						/>
					</div>
					{errors.location && <p className="text-xs text-red-600 ">{errors.location.message}</p>}
				</div>
				<div>
					<div className="flex flex-col gap-y-1.5 2xl:flex-row 2xl:gap-x-2.5">
						<Input
							placeholder="Add year of experience"
							name="experience"
							register={register}
							error={errors}
							className="text-sm"
						/>
						<FileUpload name="resume" />
					</div>
				</div>
				<div>
					<Input
						placeholder="Add email address"
						name="email"
						register={register}
						error={errors}
						className="text-sm"
					/>
				</div>
			</div>
		</form>
	)
}
