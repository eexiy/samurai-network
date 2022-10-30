// @ts-ignore
import { getAuthData } from './authReducer.ts';

const INITIALIZED_SUCCESS = 'appReducer.ts/INITIALIZED_SUCCESS'

export type InitialState = {
    initialized: boolean
}

const initialState: InitialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


export default appReducer;