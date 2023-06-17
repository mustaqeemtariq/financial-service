import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Advisors } from 'pages/advisors'
import { AddAdvisor } from 'pages/advisors/add'
import { AdvisorDetails } from 'pages/advisors/details'
import { Dashboard } from 'pages/dashboard'
import { Reports } from 'pages/reports'
import { Bookings } from 'pages/reports/bookings'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/reports/top-advisors" element={<Reports />} />
				<Route path="/reports/bookings" element={<Bookings />} />
				<Route path="/advisors" element={<Advisors />} />
				<Route path="/advisors/:name" element={<AdvisorDetails />} />
				<Route path="/advisors/add" element={<AddAdvisor />} />
			</Routes>
		</BrowserRouter>
	)
}
