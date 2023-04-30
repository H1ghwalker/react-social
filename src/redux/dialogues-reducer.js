const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogues: [
        {
            id: 1,
            name: 'Viktor',
            image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
        },
        {
            id: 2,
            name: 'Sasha',
            image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
        },
        {
            id: 3,
            name: 'Orest',
            image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
        },
        {
            id: 4,
            name: 'Olga',
            image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
        },
        {
            id: 5,
            name: 'Rex',
            image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
        },
    ],
    messages: [
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Wassup' },
        { id: 4, message: 'So awesome' },
        { id: 5, message: 'U feel it?' },
    ],
    newMessageText: '1111',
}
const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessage: message
    }
}

export default dialoguesReducer;