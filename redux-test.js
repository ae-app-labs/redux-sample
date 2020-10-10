const { createStore } = require('redux')

const initialState = {
    age: 42
}

const myReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'ADD'){
        newState.age += action.val
    }
    if(action.type === 'SUBTRACT'){
        newState.age -= action.val
    }

    return newState
} 

const store = createStore(myReducer)

store.subscribe( () => {
    console.log("State changed " + JSON.stringify( store.getState()))
})

console.log( 'Initial State ' + JSON.stringify( store.getState())  )

store.dispatch( {type:'ADD', val:10} )
store.dispatch( {type:'SUBTRACT', val:5} )


console.log( 'Final State ' + JSON.stringify( store.getState()) )