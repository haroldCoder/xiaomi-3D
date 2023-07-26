import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// function Model(props) {
//     const { scene } = useGLTF("src/assets/animations/scene0/scene.gltf");
//     return <primitive object={scene} {...props} />
// }

export default function Jumbotron() {
  return (
    <div className="jumbotron-section">
        <h2 className='title'>New</h2>
        <h2 className='subtitle'>Xiaomi redmi 10</h2>
        <p className='text'>Big and Bigger.</p>
        <span className='description'>
            From $20/mo. for 24 mo. or 600 before trade-in
        </span>
        <ul className="links">
            <li>
                <button className='button'>Buy</button>
            </li>
            <li style={{background: "transparent"}}>
                <a className='link'>Learn more</a>
            </li>
        </ul>
        {/* <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{width: "30vw", height: "50vh"}}>
            <color attach="background" args={["#000"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"sunset"}>
                <Model scale={0.01} rotation-y={2} />
                </Stage>
            </PresentationControls>
        </Canvas> */}
    </div>
  )
}
