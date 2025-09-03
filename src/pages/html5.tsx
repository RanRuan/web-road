import styles from './html5.less'
import React, { useEffect, useState } from 'react';
import { useOutletContext, Outlet } from 'umi';
import { Html,  Html5New} from './components/html/index';

const Html5:React.FC = () => {
  const [comkey, setComkey] = useState([]);
  const layoutContext = useOutletContext<LayoutContext | undefined>();
  useEffect(() => {
     console.log(layoutContext, 'layoutContext')
     setComkey(layoutContext.comKey)
  },[layoutContext])


  return (
    <div className={`${styles.wrap} ${styles.html}`}>
      <h3>html5</h3>
      {comkey.includes('html') && <Html/>}
      <Html5New/>
    </div>
  );
};

export default Html5;
