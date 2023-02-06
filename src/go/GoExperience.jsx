import { OrbitControls, Html } from '@react-three/drei'
import Lights from '../Lights.jsx'
import Arena from '../Arena.jsx'
import { Goban } from './Goban.jsx'
import { GoBowl } from './GoBowl.jsx'
// import { WhiteStone } from './WhiteStone.jsx'
// import { BlackStone } from './BlackStone.jsx'
import { Spaces } from './Spaces.jsx'
import  Interface  from '../interface.jsx'

// import { createContext } from 'react';
// import { goMachine } from './goMachine.js'
// import { useMachine } from '@xstate/react';
// import React, { createContext } from 'react';
// import { useInterpret } from '@xstate/react';


// export const GoContext = createContext({});

export default function Experience()
{
    // const [state, send, service] = useMachine(goMachine);
    // const board = state.context.board

    // const goService = useInterpret(goMachine)

    return (<>

            <OrbitControls makeDefault />
            <Lights />
            <Arena />
            <Goban />
            <GoBowl position={[ 0,0,0.3 ]}/>
            <Spaces />
            <Html>
                <Interface />
            </Html>
        </>
    )
}