import yayJpg from '@/assets/yay.jpg';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [time, setTime] = useState("");


  useEffect(() => {
    const worker = new Worker(new URL("./work.js", import.meta.url))
    // worker();
     // 监听 worker 发送的消息
    worker.onmessage = (e) => {
      setTime(e.data); // 更新 state
    };

    return () => {
      worker.terminate();
    }
  }, []);


  return (
    <div>
      <time>{time}</time>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>

    </div>
  );
}
