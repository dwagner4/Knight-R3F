import { BlackStone } from './BlackStone.jsx'
import { WhiteStone } from './WhiteStone.jsx'

import { goMachine } from './goMachine.js'
import { useMachine } from '@xstate/react';

function Space( props )
{

  

  const turnClick = (e) => {
    console.log('turn', e)
  }

  return <mesh { ...props }
      rotation-x={ - Math.PI * 0.5 } 
      scale={ 0.015 }
  >
    <planeGeometry />
    <meshBasicMaterial color={ 'red' } transparent={ true } opacity={ 0.2 } />
  </mesh>
}

export function Spaces({ board })
{  
  board[200] = 'w'
  board[202] = 'b'
  const [state, send] = useMachine(goMachine);
  return <group>
    {board.map((type, index) => {
        const xSpaceSize = 0.17 / 9
        const xpos = xSpaceSize * ( index % 19 - 9 )
        const ypos = xSpaceSize * ( Math.floor( index / 19 ) - 9 )
        if( type === 'e' ) { return <Space key={index} 
            userData={{index: index}} 
            position={[ xpos, 0.19, ypos ]} 
            onClick={ () => send( {type: 'TOGGLE', a: 1} ) }
        /> }
        if( type === 'b' ) { return <BlackStone key={index} 
          userData={{index: index}} 
          position={[ xpos, 0.19, ypos ]} 
          onClick={ () => send('TOGGLE') }
        /> }
        if( type === 'w' ) { return <WhiteStone key={index} 
          userData={{index: index}} 
          position={[ xpos, 0.19, ypos ]} 
          onClick={ () => send('TOGGLE') }
        /> }
      }
    )}
  </group>
}