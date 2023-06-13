import { useState } from 'react'
import {
	Bars3Icon,
	ChartBarIcon,
	Cog8ToothIcon,
	UsersIcon,
	XMarkIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
interface SidebarProps {
	children: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const navigation = [
		{ name: 'Admin', icon: ChartBarIcon, current: true, href: '/' },
		{
			name: 'Clients',
			icon: UsersIcon,
			current: false,
			children: [{ name: 'clients', href: '/' }]
		},
		{
			name: 'Advisors',
			icon: UsersIcon,
			current: false,
			children: [{ name: 'Report', href: '/' }]
		},
		{
			name: 'Connect',
			icon: UsersIcon,
			current: false,
			children: [{ name: 'Connect', href: '/' }]
		},
		{
			name: 'Reports',
			icon: UsersIcon,
			current: false,
			children: [
				{ name: 'Top Advisors', href: '/' },
				{ name: 'Advisors', href: '/' },
				{ name: 'New Advisors', href: '/' },
				{ name: 'Bookings', href: '/' }
			]
		}
	]

	const location = useLocation()
	const [showSidebar, setShowSidebar] = useState(false)

	const defaultDisclosureOpen = /^\/users\/.*$/.test(location.pathname)

	return (
		<div>
			<div className="md:hidden">
				<div className="flex items-center justify-between bg-primary py-3 px-4">
					<img className="rounded-md w-10" src="/logo.png" alt="Networx" />
					<h3>Networx</h3>
					<button
						type="button"
						className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						onClick={() => setShowSidebar(!showSidebar)}>
						<span className="sr-only">{showSidebar ? 'Close sidebar' : 'Open sidebar'}</span>
						{showSidebar ? (
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						) : (
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>
			</div>
			<div className="hidden bg-primary md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
				<div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-primary">
					<div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
						<div className="flex space-x-2 flex-shrink-0 items-center px-4 mb-4">
							<img className="rounded-md w-10" src="/logo.png" alt="Networx" />
							<h3 className="text-white font-semibold">Networx</h3>
						</div>
						<div>
							<nav className="flex-1 space-y-1 bg-primary px-2" aria-label="Sidebar">
								{navigation.map(item =>
									!item.children ? (
										<div key={item.name}>
											<NavLink
												to={item.href}
												className={({ isActive }) =>
													clsx(
														'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
														isActive
															? 'bg-active text-white hover:bg-active'
															: 'text-white hover:bg-active hover:text-white'
													)
												}>
												{({ isActive }) => (
													<>
														<item.icon
															className={clsx(
																'mr-3 h-6 w-6 flex-shrink-0',
																isActive ? 'text-white' : 'text-black group-hover:text-black'
															)}
															aria-hidden="true"
														/>
														{item.name}
													</>
												)}
											</NavLink>
										</div>
									) : (
										<Disclosure
											as="div"
											key={item.name}
											className="space-y-1"
											defaultOpen={defaultDisclosureOpen}>
											<Disclosure.Button
												className={({ open }) =>
													clsx(
														'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none',
														open
															? 'bg-active text-white hover:bg-active'
															: 'text-white hover:bg-active hover:text-white'
													)
												}>
												{({ open }) => (
													<>
														<item.icon
															className={clsx(
																'mr-3 h-6 w-6 flex-shrink-0  ',
																open
																	? 'text-white group-hover:text-white'
																	: 'text-black group-hover:text-black'
															)}
															aria-hidden="true"
														/>

														<span className="flex-1">{item.name}</span>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={2}
															stroke="currentColor"
															className={clsx(
																'ml-3 h-4 w-5 mr-3 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-white',
																open ? 'rotate-90 text-white' : 'text-white'
															)}>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M8.25 4.5l7.5 7.5-7.5 7.5"
															/>
														</svg>
													</>
												)}
											</Disclosure.Button>
											<Disclosure.Panel className="space-y-1">
												{item.children.map(subItem => (
													<NavLink
														key={subItem.name}
														to={subItem.href}
														className={({ isActive }) =>
															clsx(
																'group font-normal flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm  text-white hover:bg-active hover:text-white',
																isActive
																	? 'bg-primary text-blue-600 hover:bg-active'
																	: 'text-white hover:bg-active hover:text-white'
															)
														}>
														{subItem.name}
													</NavLink>
												))}
											</Disclosure.Panel>
										</Disclosure>
									)
								)}
							</nav>
						</div>
					</div>
				</div>
				<div className="flex flex-shrink-0 p-4 flex-col text-white space-y-4">
					<div className="flex space-x-2 items-center cursor-pointer">
						<Cog8ToothIcon className="h-4 w-5" aria-hidden="true" />
						<span>Settings</span>
					</div>
					<div className=" border-t border-gray-200 pt-4">
						<span>&#169; 2023 Networx LLC</span>
					</div>
				</div>
			</div>
			{showSidebar && (
				<div className="md:hidden">
					<nav className="bg-white px-2 pt-2 pb-3 space-y-1">
						{navigation.map(item =>
							!item.children ? (
								<div key={item.name}>
									<NavLink
										to={item.href}
										className={({ isActive }) =>
											clsx(
												'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
												isActive
													? 'bg-active text-blue-600 hover:bg-active'
													: 'text-white hover:bg-active hover:text-white'
											)
										}>
										{({ isActive }) => (
											<>
												<item.icon
													className={clsx(
														'mr-3 h-6 w-6 flex-shrink-0',
														isActive ? 'text-white' : 'text-black group-hover:text-black'
													)}
													aria-hidden="true"
												/>
												{item.name}
											</>
										)}
									</NavLink>
								</div>
							) : (
								<Disclosure
									as="div"
									key={item.name}
									className="space-y-1"
									defaultOpen={defaultDisclosureOpen}>
									<Disclosure.Button
										className={({ open }) =>
											clsx(
												'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none',
												open
													? 'bg-primary text-blue-600 hover:bg-active'
													: 'text-white hover:bg-active hover:text-white'
											)
										}>
										{({ open }) => (
											<>
												<item.icon
													className={clsx(
														'mr-3 h-6 w-6 flex-shrink-0  ',
														open
															? 'text-white hover:text-white'
															: 'text-black group-hover:text-black'
													)}
													aria-hidden="true"
												/>
												<span className="flex-1">{item.name}</span>

												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={2}
													stroke="currentColor"
													className={clsx(
														'ml-3 h-4 w-5 mr-3 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-white',
														open ? 'rotate-90 text-white' : 'text-white'
													)}>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M8.25 4.5l7.5 7.5-7.5 7.5"
													/>
												</svg>
											</>
										)}
									</Disclosure.Button>
									<Disclosure.Panel className="space-y-1">
										{item.children.map(subItem => (
											<NavLink
												key={subItem.name}
												to={subItem.href}
												className={({ isActive }) =>
													clsx(
														'group font-normal flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm text-white hover:bg-active hover:text-white',
														isActive
															? 'bg-primary text-active hover:bg-active'
															: 'text-white hover:bg-active hover:text-white'
													)
												}>
												{subItem.name}
											</NavLink>
										))}
									</Disclosure.Panel>
								</Disclosure>
							)
						)}
					</nav>
				</div>
			)}
			<main>
				<div className="md:ml-72">{children}</div>
			</main>
		</div>
	)
}
