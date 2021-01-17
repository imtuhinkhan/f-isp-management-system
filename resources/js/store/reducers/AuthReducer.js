
const AuthReducer = (state={},action) =>{
    switch (action.type) {
        case 'SET_LOGIN':
            
            return {...state,loggedIn:true,user:action.payload};
    
        default:
            return state;

    }
}

export default AuthReducer;