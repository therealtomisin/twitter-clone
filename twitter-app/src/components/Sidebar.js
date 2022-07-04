import React from 'react'
import SidebarItem from './SidebarItem'
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__twitterLogo">
            <TwitterIcon />
        </div>
        <div className="sidebar__sidebarItems">
            <SidebarItem text = {"Home"} Icon = {<HomeIcon />}/>
            <SidebarItem text = {"Explore"} Icon = {<TagIcon />}/>
            <SidebarItem text = {"Notifications"} Icon = {<NotificationsIcon />}/>
            <SidebarItem text = {"Messages"} Icon = {<EmailIcon />} />
            <SidebarItem text = {"Bookmarks"} Icon = {<BookmarkIcon />} />
            <SidebarItem text = {"List"} Icon = {<ListAltIcon />} />
            <SidebarItem text = {"Profile"} Icon = {<PersonIcon />} />
            <SidebarItem text = {"More"} Icon = {<MoreHorizIcon />} />
        </div>
        <div className="sidebar__tweet">

        </div>
    </div>
  )
}

export default Sidebar