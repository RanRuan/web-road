import styles from './style.less'
import React, { useEffect, useState, useRef } from 'react';
import yayJpg from '@/assets/yay.jpg';

const Html5New:React.FC = () => {
  // 使用 ref 保存 timerId，避免重新渲染时丢失
  const timerIdRef = useRef<number | undefined>(undefined);
  const progressRef = useRef<number>(0);
  const dragRef = useRef();
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

  // 获取定位

  const getLocation = () => {
    
    if(navigator.geolocation){
    console.log(navigator.geolocation, 'navigator.geolocation', );

     navigator.geolocation.getCurrentPosition((info) => {
        console.log(info, '000000')
      }, (error) => {
        console.log(error, 'error');
        
      });
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  // 拖放的内容 - ondragstart 和 setData()
  const onDragStart = (e) => {
    console.log(e, '在拖拽');
    // console.log(drogref)
    e.dataTransfer.setData('img', e.target.id);
    
  }

    // 拖到何处 - ondragover
  const onDragOver = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }


  // 进行放置 - ondrop
   const onDrop = (e) => {
    let dropId = e.dataTransfer.getData('img');
    e.target.appendChild(document.getElementById(dropId));
  }

  const onSave = () => {
    localStorage.setItem('ruanyuan', "wocunde neitong ");
    sessionStorage.setItem("session", 'dfffd')
  }

  const delStorage = () => {
    localStorage.removeItem('ruanyuan');
    sessionStorage.removeItem('session');
  }

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8888");
   // 连接成功
    socket.onopen = () => {
      console.log("WebSocket 已连接");
      socket.send("Hello Server!");
    };

    // 接收消息
    socket.onmessage = (event) => {
      console.log("收到服务端消息:", event.data);
    };
    return () => {
      socket.close()
    }
  }, [])

const draw = () => {
  var c=document.getElementById("myCanvas");
  var cxt=c.getContext("2d");
  cxt.fillStyle="#FF0000";
  cxt.beginPath();
  cxt.arc(70,18,15,0,Math.PI*2,true);
  cxt.closePath();
  cxt.fill();
}

useEffect(() => {
  draw()
},[])

  return (
      <div className={styles.html5new}>
       <ul className={styles.html5Tag}>
          <li>
            <strong>1.结构类标签</strong>
             <header>这是头标签,用在页眉</header>
             <nav>nav 导航类</nav>
              <main>这是main标签, 用于主要内容</main>
              <section>section 节</section>
              <aside>aside 侧边栏</aside>
              <article>article标签,文章</article>
              <figure>
                <figcaption>figcaption标签,元素标签</figcaption>
                figure标签,规定独立的流内容
              </figure>
              <footer>footer 尾部</footer>
          </li>
          <li>
            <strong>2.进度条</strong>
            <progress id='progressTag' max="100">progress 进度条</progress>
          </li>
          <li>
             <strong>3.字体修饰类</strong>
              <cite>cite标签, 包含文本引用,书籍标题</cite>
              <mark>mark标签</mark>
              <small>small标签,显示小号字体 用于版权申明</small>
              <del>del标签. 删除的内容</del>
              <code>code标签,标记代码</code>
              <abbr title="china">abbr标签 标识缩写CN</abbr>
          </li>
           <li>
             <strong>4.表单类</strong>
             <input id="myCar" list="cars" placeholder='这是一个绑定的选项'/>
              <datalist id="cars">
                <option value="1">option1</option>
                <option value="2">option2</option>
                <option value="3">option3</option>
              </datalist>
              <input type="color" placeholder='color选择器' />
              <input type="url" placeholder='url输入框' />
              <input type="date" placeholder='日期选择器' />
              <input type="time" placeholder='时间选择器' />
              <input type="range" placeholder='范围选择器' min="0"/>
              <input maxLength={3} minLength={1} onInput={() => {
                // alert('正在输入中')
              }}/>
          </li>
           <li>
             <strong>5.定位</strong>
             <div>您的定位是:</div>
          </li>
            <li>
             <strong>6.拖放pai</strong>
             <div className={styles.drag}>
               <p onDrop={onDrop} onDragOver={onDragOver} id='p1'>
                <img src={yayJpg} draggable onDragStart={onDragStart} id='img'/>
               </p> 
               <p onDrop={onDrop} onDragOver={onDragOver} id='p2'></p> 
             </div>
          </li>
           <li>
             <strong>7.web 储存localstorage [5M]</strong>
             <button onClick={onSave}>储存本地</button>
             <button onClick={delStorage}>删除存储</button>
             <p>window.localStorage - 同源保存 存储没有截止日期的数据</p>
             <p>window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）</p>
          </li>
           <li>
             <strong>7.web 储存localstorage [5M]</strong>
             <button onClick={onSave}>储存本地</button>
             <button onClick={delStorage}>删除存储</button>
             <p>window.localStorage - 同源保存 永久</p>
             <p>window.sessionStorage - 针对一个 session会话 来存储数据（当关闭浏览器标签页时数据会丢失, 仅限当前标签页）</p>
          </li>
          <li>
             <strong>8.web worker</strong>
              <p>它是 HTML5 提供的一种在后台运行脚本的机制，可以让 JS 在单独线程中运行，避免阻塞主线程</p>
          </li>
          <li>
             <strong>9.web socket</strong>
              <mark>双向通讯,长连接的通信协议</mark>
              <p>HTTP：请求-响应模式，客户端必须主动发起,WebSocket：建立连接后，客户端和服务端都可以随时主动发送消息。</p>
              <p>客户端发起握手,服务器接受握手 切换到websocket 保持长连接, 关闭时 双方都可以 close()</p>
          </li>

          <li>
            <strong>10.Canvas画图</strong>
            <mark>canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法</mark>
            <canvas id="myCanvas" width="400" height="400"></canvas>

          </li>
       </ul>
       
        
       
      </div>
  );
};

export default Html5New;
