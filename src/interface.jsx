import { goMachine } from './go/goMachine.js'
import { useMachine } from '@xstate/react';

import { GoContext } from './go/GoExperience.jsx'
import { useContext } from 'react'
import { useActor } from '@xstate/react'

export default function Interface()
{

  // const goService = useContext( GoContext )
  // const [xstate, send ] = useActor(goService.goService);

  const [ xstate, send ] = useMachine(goMachine)

  return <div className="interface" >
    <h1>{xstate.toStrings()}</h1>
    <button onClick={() => send({ type: 'START' })}>START</button>
    <button onClick={() => send({ type: 'SUBMIT' })}>SUBMIT</button>
    <button onClick={() => send({ type: 'UPDATE' })}>UPDATE</button>
    <button onClick={() => send({ type: 'NAV' })}>NAV</button>
    <button onClick={() => send({ type: 'PLAY' })}>PLAY</button>
    <button onClick={() => send({ type: 'END' })}>END</button>
  </div>
}