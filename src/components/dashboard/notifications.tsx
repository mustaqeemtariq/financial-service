import React from 'react'
import personImage from 'assets/dashboard/person.png'
import companyImage from 'assets/dashboard/company.png'

export const Notifications = () => {
	return (
		<div className="bg-stats p-6 min-h-full">
			<div className="space-y-5">
				<h5 className="text-sm font-semibold">Notifications</h5>
				<div>
					<p className="text-sm">ABC Company Calling</p>
					<p className="text-xs text-black opacity-40">Just now</p>
				</div>
				<h5 className="text-sm font-semibold">Advisor&rsquo;s Activities</h5>
				<div className="flex space-x-2">
					<img src={personImage} alt="person" className="w-6 h-6" />
					<div>
						<p className="text-sm">Jame&apos;s Interview Started with Company X</p>
						<p className="text-xs text-black opacity-40">Just now</p>
					</div>
				</div>
				<h5 className="text-sm font-semibold">New Clients/Companies</h5>
				<div className="flex space-x-2">
					<img src={companyImage} alt="person" className="w-6 h-6" />
					<div>
						<p className="text-sm">HealthTech.co</p>
						<p className="text-xs text-black opacity-40">Just now</p>
					</div>
				</div>
			</div>
		</div>
	)
}
