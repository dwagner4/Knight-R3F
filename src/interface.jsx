import { goMachine } from './go/goMachine.js'
import { useMachine } from '@xstate/react';

export default function Interface()
{
  const [state, send, service] = useMachine(goMachine);

  return <div className="interface" >
    <h1>{state.toStrings()}</h1>
    <button onClick={() => send({ type: 'START' })}>START</button>
    <button onClick={() => send({ type: 'SUBMIT' })}>SUBMIT</button>
    <button onClick={() => send({ type: 'UPDATE' })}>UPDATE</button>
    <button onClick={() => send({ type: 'NAV' })}>NAV</button>
    <button onClick={() => send({ type: 'PLAY' })}>PLAY</button>
    <button onClick={() => send({ type: 'END' })}>END</button>
  </div>
}