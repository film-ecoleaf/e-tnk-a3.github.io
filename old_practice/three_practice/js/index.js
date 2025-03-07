// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {

    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成 (画角、アスペクト比)
    const camera = new THREE.PerspectiveCamera(65, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);
    scene.add(box);
    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
        box.rotation.y += 0.01;
        box.rotation.x += 0.01;
        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }
}