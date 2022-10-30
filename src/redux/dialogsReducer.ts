const ADD_MESSAGE = 'ADD-MESSAGE'

type UserDataType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
    usersData: [
        { id: 1, name: 'Lily' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Sue' }
    ] as Array<UserDataType>,
    messagesData: [
        { id: 1, message: 'Hi! How are you?' },
        { id: 2, message: 'I`m fine, and you?' },
        { id: 3, message: 'Good' },
        { id: 4, message: 'Yo' }
    ] as Array<MessageType>
}

export type InitialState = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialState => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let text = action.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: text }]
            }
        }
        default:
            return state
    }
}

// Dialogs page

type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessageActionCreator = (newMessageText: string): AddMessageActionCreatorType => ({
    type: ADD_MESSAGE,
    newMessageText
})

export default dialogsReducer;