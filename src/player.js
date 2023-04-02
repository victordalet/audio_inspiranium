class Player_audio  extends Form {
    barHeight;
    constructor(mod) {

        super();

        this.mod = mod;
        this.audio = new Audio('muse.mp3');
        this.audio.crossOrigin = "";
        this.audio_ctx = new AudioContext();
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        document.querySelector('button').style.top = '-100vh';
        document.body.style.cursor = 'none';
        document.documentElement.requestFullscreen();
        this.play();
        if (this.mod === 1) {
            this.animate2();
        }
        else if (this.mod === 2) {
            this.animate();
        }
        let cube = this.cube();
        setInterval(()=> {
            this.animate_form(cube,0.01);
        },1)
    }



    play() {
        this.audio.play();
        this.audio_source = this.audio_ctx.createMediaElementSource(this.audio);
        this.analyser = this.audio_ctx.createAnalyser();
        this.audio_source.connect(this.analyser);
        this.analyser.connect(this.audio_ctx.destination);
        this.analyser.fftSize = 1024;
        this.buffer_len = this.analyser.frequencyBinCount;
        this.data_array = new Uint8Array(this.buffer_len);
        this.barWidth = this.canvas.width/this.buffer_len;
        this.x = 0;

    }

    animate2() {
        this.x = 0;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.analyser.getByteFrequencyData(this.data_array);
        for (let i = 0 ; i < this.buffer_len ; i++) {
            this.barHeight = this.data_array[i] * 2;
            const red = i* this.barHeight/20;
            const green = i * 4;
            const blue =  this.barHeight/2 ;
            this.ctx.fillStyle = "rgb("+red+","+green+","+blue+")";
            this.ctx.fillRect(this.x , this.canvas.height - this.barHeight, this.barWidth, this.barHeight);
            this.x += this.barWidth;
        }
        requestAnimationFrame(() => this.animate2());
    }

    animate() {
        this.x = 0;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.analyser.getByteFrequencyData(this.data_array);
        for (let i = 0 ; i < this.buffer_len ; i++) {
            this.barHeight = this.data_array[i] *2;
            this.ctx.save();
            this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
            this.ctx.rotate(i + Math.PI * 4 / this.buffer_len);
            const hue = i * 15;
            this.ctx.fillStyle = 'hsl('+hue+',100%, 50%)';
            this.ctx.fillRect(-50, 0, this.barWidth, this.barHeight);
            this.x += this.barWidth;
            this.ctx.restore();
        }
        requestAnimationFrame(() => this.animate());
    }
}

