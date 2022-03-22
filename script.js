let time = '';
setInterval(async function (){
    notif = await fetch('https://meli-notif-back.herokuapp.com/notifications/')
    .then(e => e.json());

    if(time.length != '' & notif.sent != time & notif.user_id != 183055248) {
        console.log('hola')
        let audio = new Audio('./static/that-was-quick-606.mp3');
        audio.play();
    };
    console.log(time)
    console.log(notif.sent)
    console.log(notif.sent != time);
    time = notif.sent.slice();
}, 1000);
