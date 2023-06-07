import { Dashboard } from 'pages/dashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}
