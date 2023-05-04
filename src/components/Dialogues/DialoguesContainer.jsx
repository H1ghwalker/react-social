import React from 'react';
import {
    updateNewMessageTextActionCreator,
    addMessageActionCreator,
} from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
import { Connect } from 'react-redux';
import StoreContext from '../../StoreContext';

const DialoguesContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialoguesPage;
                let addMessage = () =>
                    store.dispatch(addMessageActionCreator());
                let onMessageChange = (message) => {
                    store.dispatch(updateNewMessageTextActionCreator(message));
                };
                return (
                    <Dialogues
                        updateNewMessageText={onMessageChange}
                        addMessage={addMessage}
                        dialoguesPage={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

// let mapStateToProps = (state) => {
//     return {
//         dialoguesPage : state.dialoguesPage
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator());

//         },
//         updateNewMessageText: (message) => {
//             dispatch(updateNewMessageTextActionCreator(message))
//         }
//     }
// }

// const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;
