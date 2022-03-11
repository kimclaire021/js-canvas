function rand(min, max) {
    return Math.random() * (max - min +1) + min;
}

function draw() {
    //canvas 설정하기
    let canvas = document.getElementById('cvs');
    let ctx = canvas.getContext('2d');
    let x = Math.min(window.innerWidth, window.innerHeight);
    ctx.canvas.width = x;
    ctx.canvas.height = x;

    //초록색선
ctx.strokeStyle = 'green';
    //가로선 긋기
    ctx.beginPath();
    ctx.moveTo(0.0*ctx.canvas.width, 0.5 * ctx.canvas.height);
    ctx.lineTo(1.0 * ctx.canvas.width, 0.5 * ctx.canvas.height);
    ctx.stroke();
    
    //세로선 긋기
    ctx.strokeStyle = 'red';
    //점 그리기
    ctx.beginPath();
    ctx.moveTo(0.5*ctx.canvas.width, 0.0 * ctx.canvas.height);
    ctx.lineTo(0.5* ctx.canvas.width, 1.0 * ctx.canvas.height);
    ctx.stroke();


    ctx.strokeStyle = 'black';
    for(let i = 1; i<10; i++){
        let x = rand(0,300);
        let y = rand(0,300);

        ctx.beginPath();

        //x,y,radius, start angle, and angle
        ctx.arc((x/300)*ctx.canvas.width, (y/300)*ctx.canvas.height, 6, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();

    }
}