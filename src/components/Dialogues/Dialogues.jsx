import React from 'react';
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';
import s from './Dialogues.module.css';

const Dialogues = (props) => {

    
    let state = props.dialoguesPage;

    let newMessageText = state.newMessageText
    let dialoguesElements = state.dialogues.map((d) => ( <DialogueItem id={d.id} name={d.name} image={d.image} /> ));
    let messagesElements = state.messages.map((m) => ( <Message message={m.message} /> ));

    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    };


    return (
        <div className={s.dialogues}>
            <div className={s.dialogue_items}>{dialoguesElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.btn}>
                    <textarea
                        onChange={ onMessageChange }
                        value={ newMessageText }
                    />
                    <button onClick={ onAddMessage }>Write</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogues;
