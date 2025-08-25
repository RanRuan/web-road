import styles from './style.less'
const Html5 = () => {
  return (
    <div className={`${styles.wrap} ${styles.html}`}>
      <h3>html5的学习</h3>
      <p>flex 弹性盒模型</p>
      <ul className={styles.flexBox}>
        {
         Array.from({length:10}).map((it,index) => {
          return (
            <li>{index}</li>
          )
            }
          )
      }
      </ul>
    </div>
  );
};

export default Html5;
