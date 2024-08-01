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
			<Container className='pt-4 pb-3 pageHeight' >
				{pageTitle && <h3 className='text-capitalize border-bottom border-info pb-2'>{pageTitle.split("-").join(" ")}</h3>}
				<Outlet />
			</Container>
    </>
  )
}

export default Layout