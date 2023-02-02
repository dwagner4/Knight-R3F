import { BlackStone } from './BlackStone.jsx'
import { WhiteStone } from './WhiteStone.jsx'

function Space( props )
{
  const turnClick = (e) => {
    console.log('turn', e)
  }

  return <mesh { ...props }
      rotation-x={ - Math.PI * 0.5 } 
      scale={ 0.015 }
      onClick={ turnClick }
    >
    <planeGeometry />
    <meshBasicMaterial color={ 'red' } transparent={ true } opacity={ 0.2 } />
  </mesh>
}

export function Spaces({ board })
{  
  board[200] = 'w'
  return <group>
    {board.map((type, index) => {
        const xSpaceSize = 0.17 / 9
        const xpos = xSpaceSize * ( index % 19 - 9 )
        const ypos = xSpaceSize * ( Math.floor( index / 19 ) - 9 )
        // console.log(index, ypos, xpos)
        if( type === 'e' ) { return <Space key={index} userData={{index: index}} position={[ xpos, 0.19, ypos ]} /> }
        if( type === 'b' ) { return <BlackStone key={index} userData={{index: index}} position={[ xpos, 0.19, ypos ]} /> }
        if( type === 'w' ) { return <WhiteStone key={index} userData={{index: index}} position={[ xpos, 0.19, ypos ]} /> }
      }
    )}
  </group>
}