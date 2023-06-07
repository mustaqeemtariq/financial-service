import React from 'react'
import { Sidebar } from './sidebar'
import { AppHeader } from './header'

interface AppLayoutProps {
	children: React.ReactNode
	title?: string
	renderHeader?: boolean
	renderSidebar?: boolean
}

export const AppLayout: React.FC<AppLayoutProps> = ({
	children,
	title,
	renderHeader = false,
	renderSidebar = true
}) => {
	return (
		<>
			{renderHeader ? <AppHeader /> : null}
			{renderSidebar ? <Sidebar>{children}</Sidebar> : <>{children}</>}
		</>
	)
}
