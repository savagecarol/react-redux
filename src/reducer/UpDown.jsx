const initialState = 10

export const changeNumber = (state =  initialState , action) => 
{
    alert(action.type)
    switch(action.type)
    {
        case "INCREMENT" : return state + 5
        case "DECREMENT" : return state - 1
        default : return state
    }
}