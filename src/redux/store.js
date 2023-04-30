import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialoguesPage: {
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
        },

        profilePage: {
            posts: [
                { id: 1, message: 'How are you?', likesCount: 15 },
                { id: 2, message: 'Hello', likesCount: 20 },
            ],
            newPostText: 'dasdaadsda',
        },

        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Luke',
                    image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
                },
                {
                    id: 1,
                    name: 'Diana',
                    image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
                },
                {
                    id: 1,
                    name: 'Aaron',
                    image: 'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png',
                },
            ],
        },
    },

    _callSubscriber() {
        console.log('smth changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialoguesPage.newMessageText,
        };

        this._state.dialoguesPage.messages.push(newMessage);
        this._state.dialoguesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateMessageText(newMessage) {
        this._state.dialoguesPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        //musthave {type: 'NAME OF METHOD'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },
};


export default store;
