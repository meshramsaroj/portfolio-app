import React from 'react'
import SidebarNav from '../SidebarNav/SidebarNav'
import { Outlet, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const Layout = () => {
	const location = useLocation()
	const pageTitle = location.pathname !=="/"? location.pathname.split("/")[1] : ""
	
  return (
    <>
			<SidebarNav />
			<Container className='py-3 pageHeight' >
				<h3 className='text-capitalize'>{pageTitle}</h3>
				<Outlet />
			</Container>
    </>
  )
}

export default Layout