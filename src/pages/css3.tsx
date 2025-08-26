import styles from './css3.less'
import yayJpg from '../assets/yay.jpg';


const Css3 = () => {
  return (
    <div className={`${styles.wrap} ${styles.css3}`}>
      <h3>css3</h3>
       <div  style={{marginTop:"16px"}}>
        <p  style={{marginTop:"16px"}}>margin 塌陷</p>
      </div>
       <div  style={{marginTop:"16px"}} className={styles.selector}>
        <h4  style={{marginTop:"16px"}}>选择器</h4>
        <ul>
          <li>
            <a href="https://example.com" target="_blank">属性选择器</a>
            <input disabled={true}/>

          </li>
          <li className={styles.pseudo}>
            <h5>伪类选择器:它不会真正创造一个新元素，而是描述已有元素的某个特征</h5>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
            {`
作用：选中元素的某种「状态」或「特殊位置」。
状态类:(交互/表单状态):hover :active | :checked :disabled :focus :enabled ->表单 | :visited、:link → a 标签状态
结构类:(基于文档结构位置):first-child :last-child :nth-child(n) :nth-last-child(n) :first-of-type / :last-of-type :nth-type-of(even/odd/2)
逻辑类:(组合逻辑)::has()强大的“父选择器”  not(:状态/className)排除、:is(selector)多选择器 :where(selector)=is 权重为0
              `}
            </pre>
            <ul className={styles.staticPseudo}>
              {Array.from({length:10}).map((it,index) => <li key={index}>{index+1}
              {index%2===0&&<input disabled={index>5?true:false} placeholder='排除伪类选择器|'/>}
              </li>)}
            
            </ul>
            <div className={styles.dynamicPseudo}>
             <label htmlFor="in">状态类伪类选择器</label>
             <input disabled={true} id='in'/>
             <a href="333">hover</a>
            </div>
            <div className={styles.logicPseudo}>
              <label htmlFor="in">逻辑伪类选择器is not where</label>
              <p>我在展示is() p:not(:first-child)</p>
              <input disabled={true} id='in'/>
              <input id='in' placeholder='not()'/>
              <p>这里展示has选择器<img src={yayJpg}></img></p>
            </div>
          </li>
          <li className={styles.pseudoElement}>
            <h5>伪元素选择器:伪元素会创建一个虚拟元素，用于样式化 DOM 中不存在的部分内容</h5>
              <pre>
{`
标准:用 :: 开头（旧标准也支持 :，但推荐 ::）
作用: 创建一个「虚拟元素」，它并不存在于 DOM 结构中，但可以被当成元素来设置样式。
::before 与 ::after 前后插入内容
::first-letter 首字母
::first-line → 选中第一行。
::selection → 选中时的高亮部分。
::placeholder → 输入框的 placeholder 样式。
`}
              </pre>
              <p>
                这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌这是一首简单的歌
              </p>
              <input placeholder='我是::placeholder'/>
              <ul><li>::marker</li></ul>
          </li>
        </ul>
      
       
      </div>
    </div>
  );
};

export default Css3;
