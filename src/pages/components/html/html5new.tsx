import styles from './style.less'
import React, { useEffect, useState, useRef } from 'react';

const Html5New:React.FC = () => {
  // 使用 ref 保存 timerId，避免重新渲染时丢失
  const timerIdRef = useRef<number | undefined>(undefined);
  const progressRef = useRef<number>(0);

  // 进度更新逻辑
  const startProgress = () => {
    const step = 10;
    progressRef.current += step;

    const el = document.getElementById('progressTag') as HTMLProgressElement | null;

    if (el) {
      // 使用 value 更新进度条
      el.value = Math.min(progressRef.current, 100);
    }

    // 当达到或超过 100% 时，停止计时
    if (progressRef.current >= 100) {
      if (timerIdRef.current !== undefined) {
        window.clearInterval(timerIdRef.current);
        timerIdRef.current = undefined;
      }
    }
  };

 useEffect(() => {
//   function step(timestamp) {
//   // 动画逻辑
//   console.log("下一帧时间戳:", timestamp);
//   requestAnimationFrame(step); // 继续下一帧
// }
// requestAnimationFrame(step);
    // 初始化进度
    progressRef.current = 0;
    const id = window.setInterval(startProgress, 1000);
    timerIdRef.current = id;

    // 组件卸载时清理定时器
    return () => {
      if (timerIdRef.current !== undefined) {
        window.clearInterval(timerIdRef.current);
      }
    };
  }, []); 
  return (
      <div className={styles.html5new}>
        <header>这是头标签,用在页眉</header>
        <main>这是main标签, 用于主要内容</main>
        <article>article标签,文章</article>
        <figure>
          <figcaption>figcaption标签,元素标签</figcaption>
          figure标签,规定独立的流内容
        </figure>
        <progress id='progressTag' max="100">progress 进度条</progress>
        <cite>cite标签, 包含文本引用,书籍标题</cite>
        <mark>mark标签</mark>
        <small>small标签,显示小号字体 用于版权申明</small>
        <del>del标签. 删除的内容</del>
        <code>code标签,标记代码</code>
        <abbr title="china">abbr标签 标识缩写CN</abbr>
      </div>
  );
};

export default Html5New;
