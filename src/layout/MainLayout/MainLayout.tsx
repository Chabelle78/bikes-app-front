import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import Navbar from '../NavBar/Navbar';

import styles from './MainLayout.module.scss';
import SidesBar from '../SideBar/SideBar';

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.mainLayout}>
      <div className={styles.navbar}>
        <Navbar onMenuToggle={toggleSidebar} />
      </div>
      <div className={styles.content}>
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
          <SidesBar />
        </div>
        {isSidebarOpen && (
          <div className={styles.overlay} onClick={closeSidebar} />
        )}
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
      <Tooltip id="icon-button-tooltip" place="top" />
    </div>
  );
}

export default MainLayout;
