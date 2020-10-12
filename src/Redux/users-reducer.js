const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
       ]
}

const userReducer = (state = initialState, action) => {

    switch(action.type ){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>{
                    if (u.id === action.userId){
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS: {
                return { ...state, users: [...state.users, ...action.users] }
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId }) //Актион для подписки
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId }) //Актион для отписки
export const setUsersAC = (users) => ({ type: SET_USERS, users })  //Актион для получения пользователей

export default userReducer;