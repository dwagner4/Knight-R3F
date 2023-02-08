import { createMachine, interpret, assign } from 'xstate';

const initalBoard = [ 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                      'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 
                    ]



const turnlogic = {
  predictableActionArguments: true,
  id: 'turnmachine',
  initial: 'turn',
  states: {
    turn: {
      on: {
        SUBMIT: {
          target: 'updateserver',
          actions: [ 'submitSpace', 'updateBoard' ]
        }
      }
    },
    updateserver: {
      on: {
        UPDATE: {
          target: 'turn'
        }
      }
    }
  }
}

const logic = {
  predictableActionArguments: true,
  id: 'gogame',
  initial: 'gameform',
  context: {
    board: initalBoard,
    turn: 'b',
    you: 'frances'
  },
  states: {
    gameform: {
      on: {
        START: {
          target: 'gameplay'
        }
      }
    },
    gameplay: {
      on: {
        NAV: {
          target: 'playback'
        },
        END: {
          target: 'endgame'
        }
      },
      ...turnlogic
    },
    playback: {
      on: {
        PLAY: {
          target: 'gameplay'
        }
      }
    },
    endgame: {
    },
  }
};

const functions = {
  actions: 
  {
    submitSpace: ( context, event ) => { 
      console.log( 'fuck you', event ) 
      console.log(context.board)
    },
    // updateBoard: assign( { you: 'dean' } )
    // updateBoard: assign( () => {return { you: 'dean' } })
    updateBoard: assign( (context, event) => {
      console.log(context.board, event.spaceIndex)
      const b = context.board
      b[event.spaceIndex] = 'w'
      console.log(b)
      return { you: 'dean', board: b} 
    })
  }
}

const goMachine = createMachine( logic, functions )

const goMachineService = interpret(goMachine)
goMachineService.onTransition(state => console.log(state.value, state.context ) )


// goMachineService.start()
// goMachineService.send('START')


export { goMachine, goMachineService }
// export { goMachine } submitSpace submitSpace