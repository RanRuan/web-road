import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html5">html5</Link>
        </li>
         <li>
          <Link to="/css3">css3</Link>
        </li>
          <li>
          <Link to="/es6">es6</Link>
        </li>
          <li>
          <Link to="/docs">Docs</Link>
        </li>
          <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
