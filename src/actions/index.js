export const IncrementNumber = () =>{
    return {
        type: 'INCREMENT'
    }
}

export const DecrementNumber = () =>{
    return {
        type: 'DECREMENT'
    }
}

export const ClearNumber = () =>{
    return {
        type: 'CLEAR'
    }
}

export const AddData = (data) =>{
    debugger
    return {
        type: 'ADD_DATA',
        payload: data
    }
}