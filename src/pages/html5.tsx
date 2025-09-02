import styles from './html5.less'
import React, { useEffect } from 'react';
import { useOutletContext, Outlet } from 'umi';



const Html5:React.FC = () => {
  const layoutContext = useOutletContext<LayoutContext | undefined>();
  useEffect(() => {
     console.log(layoutContext, 'layoutContext')
  },[layoutContext])

const markdown = `<!doctype html>
<html lang="en">
<head>
  <!-- [1]设置当前html文件的字符编码 -->
  <meta charset="UTF-8"/>
  <!-- [2]设置浏览器的兼容版本模式(让ie使用最新的渲染引擎工作) -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <!-- [3]设置网页在移动端浏览器的中展示设置 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
  <!-- SEO -->
  <meta name="keywords" content="HTML, meta 标签, SEO, 无障碍">
  <meta name="description" content="这是一个关于 HTML meta 标签的详细指南。">
  <title>标准 HTML5 页面</title>
  <!-- SEO -->
  <!-- 可能用到的常用资源 -->
  <link rel="stylesheet" href="styles.css" />
  <!-- 你也可以在这里内联或链接字体、图标库等 -->
  <!-- favicon 示例 -->
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
    </nav>
  </header>
  <main id="home" role="main">
    <section aria-labelledby="section-title">
      <h1 id="section-title">欢迎来到标准 HTML5 页面</h1>
      <p>这是一个简单的示例，展示了 HTML5 的语义标签和最佳实践。</p>
      <article aria-labelledby="article-title">
        <h2 id="article-title">示例文章</h2>
        <p>这是一个具备 <strong>语义化</strong> 的段落，
        使用了 <code>&lt;section&gt;</code>
        <code>&lt;article&gt;</code> 等标签。</p>
      </article>
      <figure>
        <img src="https://via.placeholder.com/800x400" alt="示意图片" />
        <figcaption>示意图片的说明文本</figcaption>
      </figure>
    </section>
  </main>
  <aside aria-label="侧边信息">
    <h3>侧边栏</h3>
    <p>一些辅助信息或导航链接。</p>
  </aside>
  <footer>
    <p>&copy; 2025 你的名字. 保留所有权利。</p>
  </footer>
  <!-- 脚本放在文档末尾，提升页面加载性能 -->
  <script>
    // 示例：简单的交互
    document.addEventListener('DOMContentLoaded', () => {
      console.log('页面已加载');
    });
  </script>
</body>
</html>`
  return (
    <div className={`${styles.wrap} ${styles.html}`}>
      <h3>html5</h3>
      <div className={styles.html5}>
        <pre>{markdown}</pre>
        <div className={styles.comments}>
          <p><span>DOCTYPE</span> 是一个指令，唯一的作用是启用标准模式，避免怪异模式。</p>
          <p><span>lang="en"</span> 指定了该元素及其子孙元素的语言是英语[屏幕阅读器|搜索引擎]</p>
          <p><span>@import/link标签的区别</span> 都是用于在 HTML/CSS 中引入外部资源的方式;@import css语法 引入css 下载解析后再加载有延迟;link是HTML标签 同步加载资源[css,icon,font,js...] 支持并行下载</p>
          <p><span>link标签的rel属性</span>stylesheet,icon, preload：提前加载关键资源（CSS、JS、字体、图片）。preconnect：提早建立网络连接，降低延迟。dns-prefetch：提前解析域名，加快请求速度。</p>
          <p><span>src和href的区别</span></p>
        </div>
      </div>
    </div>
  );
};

export default Html5;
