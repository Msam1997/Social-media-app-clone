
import { Avatar } from '@mui/material';
import { topic } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  
  const recentItem = (topic)=> (
      <div className="sidebar__recentItem">
          <span className='sidebar__hash'>#</span>
          <p>{topic} </p>
      </div>

  );

  return (
    <div className="sidebar">
        <div className="sidebar__top">
             <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixi-MXwxMjA3fDB8MHX" alt=""/>
             <Avatar className="sidebar__avatar"/>
             <h2>Madhurupa Samaddar</h2>
             <h4>madhurupa1997@gmail.com</h4>
        </div>
         <div className="sidebar__stats">
              <div className="sidebar__stat">
                 <p>Who viewed you </p>
                 <p className="sidebar__statNumber">278</p>
              </div>
              <div className="sidebar__stat">
                 <p>Views on post</p>
                 <p className="sidebar__statNumber">28</p>
              </div>

              <div className="sidebar__bottom">
                 <p>Recent </p>
                 {recentItem('reactjs')}
                 {recentItem('Programming')}
                 {recentItem('Softwareengineering')}
                 {recentItem('Developer')}
                 {recentItem('Design')}

              </div>
        </div>
    </div>
  );
}

export default Sidebar;