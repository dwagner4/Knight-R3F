import { goMachineService } from './go/goMachine.js'
// import { useMachine } from '@xstate/react';

// import { GoContext } from './go/GoExperience.jsx'
// import { useContext } from 'react'
// import { useActor } from '@xstate/react'

export default function Interface()
{

  // const goService = useContext( GoContext )
  // const [xstate, send ] = useActor(goService.goService);

  // const [ xstate, send ] = useMachine(goMachine)

  let stateStr = 'yoho'
  goMachineService.subscribe( state =>  stateStr = state.toStrings())

  return <div className="interface" >
    {/* <h1>{xstate.toStrings()}</h1> */}
    <h1>{stateStr}</h1>
    <button onClick={() => goMachineService.send({ type: 'START' })}>START</button>
    <button onClick={() => goMachineService.send({ type: 'SUBMIT' })}>SUBMIT</button>
    <button onClick={() => goMachineService.send({ type: 'UPDATE' })}>UPDATE</button>
    <button onClick={() => goMachineService.send({ type: 'NAV' })}>NAV</button>
    <button onClick={() => goMachineService.send({ type: 'PLAY' })}>PLAY</button>
    <button onClick={() => goMachineService.send({ type: 'END' })}>END</button>
  </div>
}