import React from 'react'
import '../sidebarItem.css'

const SidebarItem = ({text, Icon}) => {
  return (
    <div className='sidebarItem' >
        <div className="sidebarItem__logo">
            {Icon}
        </div>
        {text}
    </div>
  )
}

export default SidebarItem