import { Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import Navbar from './Navbar';
import FiltersBar from './FiltersBar';

import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <FiltersBar />
        </aside>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Tooltip id="icon-button-tooltip" place="top" />
    </div>
  );
}

export default MainLayout;
