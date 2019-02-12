export default (state = {
    count: 0
}, action) => {

    const { type } = action

    switch(type){
        case 'ADD':
            return { count: state.count + 1 }
        case 'SUBTRACT':
            return { count: state.count - 1 }
        default:
            return state
    }
}