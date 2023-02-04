import { BlackStone } from './BlackStone.jsx'
import { WhiteStone } from './WhiteStone.jsx'

import { goMachine } from './goMachine.js'
import { useMachine } from '@xstate/react';

function Space( props )
{
  const [state, send, service] = useMachine(goMachine);
  return <mesh { ...props }
      rotation-x={ - Math.PI * 0.5 } 
      scale={ 0.015 }
      onClick={() => send({ type: 'SUBMIT' })}
  >
    <planeGeometry />
    <meshBasicMaterial color={ 'red' } transparent={ true } opacity={ 0.2 } />
  </mesh>
}

export function Spaces({ board })
{  
  board[200] = 'w'
  board[202] = 'b'
  const [state, send, service] = useMachine(goMachine);
  console.log(send)
  send('SUBMIT')
  // const clickFunc = () => send({ type: 'SUBMIT' })
  const clickFunc = () => console.log('Fuck You')
  return <group>
    {board.map((type, index) => {
        const xSpaceSize = 0.17 / 9
        const xpos = xSpaceSize * ( index % 19 - 9 )
        const ypos = xSpaceSize * ( Math.floor( index / 19 ) - 9 ) 
        if( type === 'e' ) { return <Space key={index} 
            userData={{index: index, type: 'e'}} 
            position={[ xpos, 0.19, ypos ]} 
            onClick={() => send({ type: 'SUBMIT' })}
            // onClick={(e) => console.log('fuck you', e.eventObject.userData.index)}
        /> }
        if( type === 'b' ) { return <BlackStone key={index} 
          userData={{index: index, type: 'b'}} 
          position={[ xpos, 0.19, ypos ]} 
          onClick={ (e) => send( {type: 'SUBMIT', spaceIndex: e.eventObject.userData.index, spaceType:  e.eventObject.userData.type}  ) }
        /> }
        if( type === 'w' ) { return <WhiteStone key={index} 
          userData={{index: index, type: 'w'}} 
          position={[ xpos, 0.19, ypos ]} 
          onClick={ (e) => send({ type: 'SUBMIT', spaceIndex: e.eventObject.userData.index, spaceType:  e.eventObject.userData.type} ) }
        /> }
      }
    )}
  </group>
}