const initialState = [
    {id:0, name:"rakesh", number:12345, email:"rakkeer1994@gmail.com"},
    {id:1, name:"rakesh keer",email:"keer@gmail.com", number:453345}
]



const contactReducer = (state= initialState, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state, action.payload]
            return state
        case "UPDATE_CONTACT":
            const UpdateState = state.map((contact)=> contact.id === action.payload.id ? action.payload : contact )
            state = UpdateState
            return state
     default:
         return state
    }
}

export default contactReducer