class Form {

    constructor(nb) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.speed = 0.01;
        this.nb = nb;
        this.dist = 20;
    }

    set_speed(new_speed) {
        this.speed = new_speed;
    }


    cube(i) {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('../cdn/'+parseInt(Math.random() * this.nb).toString()+'.png');
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x -= Math.random() * 2;
        cube.position.z -= this.dist * (i+1);
        this.scene.add(cube);
        this.renderer.render(this.scene, this.camera);
        console.log(2);
        return cube;
    }

    sphere(i) {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('../cdn/'+parseInt(Math.random() * this.nb).toString()+'.png');
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.z -= this.dist * (i+1);
        this.scene.add(sphere);
        this.renderer.render(this.scene, this.camera);
        return sphere;
    }

    pyramid(i) {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('../cdn/'+parseInt(Math.random() * this.nb).toString()+'.png');
        const geometry = new THREE.ConeGeometry(1, 2, 4);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const pyramid = new THREE.Mesh(geometry, material);
        pyramid.position.z -= this.dist * (i+1);
        this.scene.add(pyramid);
        this.renderer.render(this.scene, this.camera);
        return pyramid;
    }

    cone(i) {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('../cdn/'+parseInt(Math.random() * this.nb).toString()+'.png');
        const geometry = new THREE.ConeGeometry(1, 2, 16);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cone = new THREE.Mesh(geometry, material);
        cone.position.x -= Math.random() * 2;
        cone.position.z -= this.dist * (i+1);
        this.scene.add(cone);
        this.renderer.render(this.scene, this.camera);
        console.log(2);
        return cone;
    }

    animate_form(element) {
        element.rotation.x -= this.speed;
        element.rotation.y -= this.speed;
        element.position.z  += this.speed;
        if (element.position.z > 10) {
            element.position.z -= this.dist * 10;
            element.map = textureLoader.load('../cdn/'+parseInt(Math.random() * this.nb).toString()+'.png');
        }


        this.renderer.render(this.scene, this.camera);
    }

}