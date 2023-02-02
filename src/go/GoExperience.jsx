import { OrbitControls } from '@react-three/drei'
import Lights from '../Lights.jsx'
import Arena from '../Arena.jsx'
import { Goban } from './Goban.jsx'
import { GoBowl } from './GoBowl.jsx'
import { WhiteStone } from './WhiteStone.jsx'
import { BlackStone } from './BlackStone.jsx'
import { Spaces } from './Spaces.jsx'

// import { createContext } from 'react';
import { goMachine } from './goMachine.js'
import { useMachine } from '@xstate/react';

// export const GoContext = createContext();

export default function Experience()
{
    const [state, send, service] = useMachine(goMachine);
    const board = state.context.board

    return <>
        <OrbitControls makeDefault />
        <Lights />
        <Arena />
        <Goban />
        <GoBowl position={[ 0,0,0.3 ]}/>
        <WhiteStone position={[ 0.3,0,0.3 ]}/>
        <BlackStone position={[ -0.3,0,0.3 ]} onClick={(e) => send('TOGGLE')} />
        <Spaces board={board}/>
    </>
}