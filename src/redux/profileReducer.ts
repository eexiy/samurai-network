import { ProfileType, PhotosType } from './../types/types';
import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type PostDataType = {
    id: number
    post: string
    likes: number
}


const initialState = {
    postsData: [
        { id: 1, post: 'A life is a moment', likes: 15 },
        { id: 2, post: 'Never stop dreaming.', likes: 8 }
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialState = typeof initialState


const profileReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case ADD_POST: {
            let newText = action.newPostText
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, post: newText, likes: 0 }]
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
            }
        }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state
    }
}

// Profile page actions

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({
    type: ADD_POST,
    newPostText
})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SavePhotoSuccess = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({ type: SAVE_PHOTO_SUCCESS, photos })


// Thunk creator
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}

export const savePhoto = (photoFile: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photoFile);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfileInfo = (profileInfo: ProfileType) => async (dispatch: any, getState: any) => {
    console.log(setStatus);
    const userId = getState().auth.id
    const response = await profileAPI.saveProfileInfo(profileInfo);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
}


export default profileReducer;