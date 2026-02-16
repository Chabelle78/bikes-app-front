import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import Navbar from './Navbar';
import FiltersBar from './FiltersBar';

import styles from './MainLayout.module.scss';

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
          <FiltersBar />
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
