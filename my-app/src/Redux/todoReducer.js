const initialState = {
    data : [
        {
        id: 1,
        name: "Complete the todo list application",
        status:false,
        deadline:"25/03/22, 11:59 A.M."
        }
    ]
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "ADD" : 
                    return {
                        ...state,
                        data : [...state.data,action.payload]
                    }

        default: return state
    }
}