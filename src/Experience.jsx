import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Arena from './Arena.jsx'
import { Goban } from './go/Goban.jsx'
import { GoBowl } from '/go/GoBowl.jsx'
import { WhiteStone } from '/go/WhiteStone.jsx'
import { BlackStone } from '/go/BlackStone.jsx'
import { Spaces } from '/go/Spaces.jsx'

export default function Experience()
{
    const board = []
    for( let i = 0; i < 361; i++ )
    {
        board.push('e')
    } 

    return <>
        <OrbitControls makeDefault />
        <Lights />
        <Arena />
        <Goban />
        <GoBowl position={[ 0,0,0.3 ]}/>
        <WhiteStone position={[ 0.3,0,0.3 ]}/>
        <BlackStone position={[ -0.3,0,0.3 ]}/>
        <Spaces board={board}/>
    </>
}