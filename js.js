
        const currenttime=()=>{
            let now=new Date().toLocaleTimeString();
            
            document.getElementById('clock').innerText=now;
        };
        currenttime();


        // automatio update ho jye ga
      let running= setInterval(()=>{
            currenttime();
        },1000);


        // stop funtion
        setTimeout(()=>{clearInterval(running)},10000);
