import styles from './style.less'
import React from 'react';
import {markdown} from './htmltempalte';

const Html:React.FC = () => {
  return (
      <div className={styles.html5}>
        <pre>{markdown}</pre>
        <div className={styles.comments}>
          <p><span>DOCTYPE</span>是一个指令，唯一的作用是启用标准模式，避免怪异模式。</p>
          <p><span>lang="en"</span>指定了该元素及其子孙元素的语言是英语[屏幕阅读器|搜索引擎]</p>
          <p><span>@import/link标签的区别</span>都是用于在 HTML/CSS 中引入外部资源的方式;@import css语法 引入css 下载解析后再加载有延迟;link是HTML标签 同步加载资源[css,icon,font,js...] 支持并行下载</p>
          <p><span>link标签的rel属性</span>stylesheet,icon, preload：提前加载关键资源（CSS、JS、字体、图片）。preconnect：提早建立网络连接，降低延迟。dns-prefetch：提前解析域名，加快请求速度。</p>
          <p><span>src和href的区别</span></p>
        </div>
      </div>
  );
};

export default Html;
