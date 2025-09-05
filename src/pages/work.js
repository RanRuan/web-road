let time;
const start = () =>{
    time = new Date().toLocaleString();
    postMessage(time);    
    setTimeout(() => {
        start()
    }, 1000);
}

start();