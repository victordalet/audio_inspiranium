class Form {

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.speed = 0.01;

    }


    cube() {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('http://localhost:8888/1.jpg');
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x -= Math.random() * 2;
        this.scene.add(cube);
        this.renderer.render(this.scene, this.camera);
        console.log(2);
        return cube;
    }

    sphere() {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('http://localhost:8888/1.jpg');
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        this.scene.add(sphere);
        this.renderer.render(this.scene, this.camera);
        return sphere;
    }

    pyramid() {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('http://localhost:8888/1.jpg');
        const geometry = new THREE.ConeGeometry(1, 2, 4);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const pyramid = new THREE.Mesh(geometry, material);
        this.scene.add(pyramid);
        this.renderer.render(this.scene, this.camera);
        return pyramid;
    }

    prism() {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('http://localhost:8888/1.jpg');
        const baseShape = new THREE.Shape();
        baseShape.moveTo(0, 0);
        baseShape.lineTo(1, 0);
        baseShape.lineTo(1, 1);
        baseShape.lineTo(0.5, 1.5);
        baseShape.lineTo(0, 1);
        baseShape.lineTo(0, 0);
        const extrudeSettings = { depth: 2, bevelEnabled: false };
        const geometry = new THREE.ExtrudeGeometry(baseShape, extrudeSettings);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const prism = new THREE.Mesh(geometry, material);
        this.scene.add(prism);
        this.renderer.render(this.scene, this.camera);
        return prism;
    }

    animate_form(element,speed) {
        element.rotation.x -= speed;
        element.rotation.y -= speed;
        element.position.z += speed;
        if (element.position.z > 10) {
            element.position.z = this.speed;
            element.position.x -= Math.random() * 2;
            element.position.x += Math.random() * 2;
        }


        this.renderer.render(this.scene, this.camera);
    }

}