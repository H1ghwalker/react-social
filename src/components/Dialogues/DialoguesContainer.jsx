import React from 'react';
import {
    updateNewMessageTextActionCreator,
    addMessageActionCreator,
} from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
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

export default DialoguesContainer;
