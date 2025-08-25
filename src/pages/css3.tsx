import styles from './style.less'

const Css3 = () => {
  return (
    <div className={`${styles.wrap} ${styles.css3}`}>
      <h3>css3</h3>
       <div  style={{marginTop:"16px"}}>
        <p  style={{marginTop:"16px"}}>margin 塌陷</p>
        <p  style={{marginTop:"16px"}}>BFC</p>
      </div>
    </div>
  );
};

export default Css3;
