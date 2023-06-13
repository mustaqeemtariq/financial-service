import { Dashboard } from 'pages/dashboard'
import { Reports } from 'pages/reports'
import { Bookings } from 'pages/reports/bookings'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/reports" element={<Reports />} />
				<Route path="/reports/bookings" element={<Bookings />} />
			</Routes>
		</BrowserRouter>
	)
}
