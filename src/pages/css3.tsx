import styles from './css3.less'
import yayJpg from '../assets/yay.jpg';
import React, { useState } from 'react';

const Css3 = () => {
  // const [showIndex, setShowIndex]=useState(1);
  return (
    <div className={`${styles.wrap} ${styles.css3}`}>
      <h3>CSS3</h3>
      <div  className={styles.collapse}>
        <h4 style={{marginTop:"16px"}}>1.margin 塌陷</h4>
        <pre>
{`
定义：在普通文档流中,当两个垂直外边距[父子][兄弟]相遇时，它们将形成一个视觉上外边距[高度]等于两个发生合并的外边距的高度中的较大者
解决方法: 父容器:padding,设置border,父元素触发BFC[BFC]overflow:visible,[BFC]display:flow-root(推荐:显式创建新的 BFC)
衍生内容:BFC 块级格式化上下文
  常用方法: overflow: 非visible| 父元素float: |display: inline-block、table-cell、table、flex、grid |display: flow-root
`}
        </pre>
        <div className={styles.collapseBox}>
          <div className={styles.collapseBoxIn}></div>
        </div>
        <div className={styles.float}>
          <h4 style={{marginTop:"16px"}}>2. 浮动</h4>
          <pre>
            {`
浮动（float): 会让元素脱离标准文档流，导致父元素高度塌陷、后续元素错位等问题。
清除浮动（clear） 的作用是：阻止元素与前面的浮动元素在同一行显示，恢复正常的文档流排版。            
  方法:使用父元素加上伪元素清除浮动|父元素触发BFC 使父元素包含子元素
  兄弟之间的影响就是设置被影响的子元素{clear:both|left|right}             
            `}
          </pre>
          <div className={styles.floatBox}>
            这里展示浮动的作用
            <div>
             在本例中，图像会在段落中向右浮动，而段落中的文本会包围这幅图像。在本例中，图像会在段落中向右浮动，而段落中的文本会包围这幅图像。
              <img src={yayJpg} />
              <p className={styles.right}>领先的 Web 技术教程 - 全部免费。在 W3School，你可以找到你所需要的所有的网站建设教程。从基础的 HTML 到 CSS，乃至进阶的 XML、SQL、JS、PHP。
              我们的参考手册涵盖了网站技术的方方面面。其中包括W3C标准技术：HTML、CSS、XML 。以及其他技术，诸如 JavaScript、PHP、SQL 等。
              在 W3School，我们提供上千个实例。通过使用我们的在线编辑器，你可以编辑这些例子，并对代码进行实验。
              </p>
            </div>
            
          </div>
          <ul className={styles.clearBox}>
            <li>清除浮动</li>
            <li></li> 
            <li>浮动</li>
            <li></li>
            <li></li>
          </ul>
        
          
        </div>
      </div>
      <div  style={{marginTop:"16px"}} className={styles.selector}>
        <h4  style={{marginTop:"16px"}}>3.选择器</h4>
        <ul>
          <li>
            <a href="https://example.com" target="_blank">属性选择器</a>
            <input disabled={true}/>

          </li>
          <li className={styles.pseudo}>
            <h5>伪类选择器:它不会真正创造一个新元素，而是描述已有元素的某个特征</h5>
            <pre>
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
      <div  style={{marginTop:"16px"}} className={styles.flex}>
        <h4  style={{marginTop:"16px"}}>4.弹性盒模型flex</h4>
         <pre style={{ display:'block',whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
          {`
容器container属性:
    display:flex;
    flex-direction:row|column|...; 定义容器要在哪个方向上堆叠 flex 项目
    flex-wrap:nowrap | wrap; 是否换行
    flex-flow: row wrap; // 方向 换行的组合写法
    justify-content:flex-start|flex-end|center|space-between|space-around|space-evenly(均匀) 主轴方向上对齐;
    align-items:stretch|flex-start|flex-end|center|baseline 控制每行内项目在交叉轴上的对齐（例如，底部对齐）;
    align-content:flex-start|flex-end|center|space-between|space-around|space-evenly 作用于 多行整体 在容器交叉轴上的分布;
项目item属性:
    order:0|1;越小越靠前;
    flex-grow:0|1....;是否可以变大,默认不可以;
    flex-shrink:1|0; 默认宽度之和大于容器的时候才会发生收缩;
    flex-basis:auto|百分比|50px指定了 flex 元素在主轴方向上的 flex 项目的初始长度;
    flex: 以上三个属性的组合;
    align-self:stretch|flex-start|flex-end|center|baseline 默认继承容器的
          `}
         </pre>
        <ul className={styles.flexBox}>
          {Array.from({length:10}).map((it, index)=><li key={index}>{index+1}</li>)}
        </ul>
        <ul className={styles.flexBoxItems}>
          {Array.from({length:10}).map((it, index)=><li key={index}>{index%2===0?'item':'basisitem'}{index+1}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Css3;
