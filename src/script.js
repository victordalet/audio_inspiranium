class Player_audio {
    barHeight;
    constructor() {
        this.audio = new Audio('muse.mp3');
        this.audio.crossOrigin = "anonymous";
        this.audio_ctx = new AudioContext();
        this.container = document.querySelector('.container');
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.play();
        this.animate();
    }

    play() {
        this.audio.play();
        this.audio_source = this.audio_ctx.createMediaElementSource(this.audio);
        this.analyser = this.audio_ctx.createAnalyser();
        this.audio_source.connect(this.analyser);
        this.analyser.connect(this.audio_ctx.destination);
        this.analyser.fftSize = 64;
        this.buffer_len = this.analyser.frequencyBinCount;
        this.data_array = new Uint8Array(this.buffer_len);

        this.barWidth = this.canvas.width/this.buffer_len;
        this.x = 0;

    }

    animate() {
        this.x = 0;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.analyser.getByteFrequencyData(this.data_array);
        for (let i = 0 ; i < this.buffer_len ; i++) {
            this.barHeight = this.data_array[i] *2;
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(this.x , this.canvas.height - this.barHeight, this.barWidth, this.barHeight);
            this.x += this.barWidth;
        }
        requestAnimationFrame(() => this.animate());
    }
}