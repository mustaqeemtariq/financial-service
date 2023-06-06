import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Routing } from 'routing'
import 'styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('dashboard-root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Toaster
			position={'top-right'}
			toastOptions={{
				style: {
					margin: '15px',
					background: '#828282',
					color: '#fff',
					width: '340px'
				},
				className: 'text-base',
				duration: 3000
			}}
		/>
		<Routing />
	</React.StrictMode>
)
