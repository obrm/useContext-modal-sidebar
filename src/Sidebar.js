import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import Links from './Links'
import SocialLinks from './SocialLinks'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen && `show-sidebar`}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='logo' />
        <button className='close-btn' onClick={() => closeSidebar()}>
          <FaTimes />
        </button>
      </div>
      <Links links={links} />
      <SocialLinks social={social} />
    </aside>
  )
}

export default Sidebar
