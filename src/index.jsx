import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import GoExperience from './go/GoExperience.jsx'
import Interface from './interface.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0, 0.5, 1 ]
            } }
        >
            <GoExperience />
            
        </Canvas>
        <Interface />
    </>
)