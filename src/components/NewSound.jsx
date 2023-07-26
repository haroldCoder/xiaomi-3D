import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("../assets/animations/scene1/scene.gltf");
    return <primitive object={scene} {...props} />
}

function NewSound() {
    
    return (
        <div className='sound'>
            <section>
                <p className='title'>New Sound System</p>
                <h2 className='subtitle2'>Feel the base.</h2>
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
            </section>
            <section>
            <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{width: "30vw", height: "50vh"}}>
            <color attach="background" args={["transparent"]} />
                <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={"sunset"}>
                    <Model scale={0.01} rotation-y={2} />
                    </Stage>
                </PresentationControls>
            </Canvas>
            </section>
        </div>
    )
}

export default NewSound
