import { UserDetail } from '../../types/users';
import { SET_USER, SetUserAction } from './actions';

export interface UserState {
    user?: UserDetail;
};

const initialState: UserState = {
    user: undefined,
};

export const UsersReducer = (state: UserState = initialState, action: SetUserAction): UserState => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.user,
            };
        default:
            return state;
    }
};
