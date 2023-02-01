export function Space( {index, color = 'red'})
{
  const xSpaceSize = 0.17 / 9
  const xpos = xSpaceSize * ( index % 19 - 9 )
  const ypos = xSpaceSize * ( Math.floor( index / 19 ) - 9 )

  const turn = 'black'

  const turnClick = (e) => {
    console.log('turn', e)
  }

  return <mesh 
      position={[ xpos, 0.191, ypos]} 
      rotation-x={ - Math.PI * 0.5 } 
      scale={ 0.015 }
      onClick={ turnClick }
      userData={{index: index}}
    >
    <planeGeometry />
    <meshBasicMaterial color={ color } transparent={ true } opacity={ 0.2 } />
  </mesh>
}

export function Spaces({ board })
{  
  return <group>
    {board.map((params, index) => <Space key={index} index={ index } color={params.color} />)}
  </group>
}