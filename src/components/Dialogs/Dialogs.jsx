import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: 'Julia' },
    { id: 2, name: 'Egor' },
    { id: 3, name: 'Dimych' },
    { id: 4, name: 'Max' },
  ];

  const messagesData = [
    { id: 1, name: 'Julia', text: 'Hi!' },
    { id: 2, name: 'Julia', text: 'Yo' },
    { id: 3, name: 'Julia', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam odit qui ratione, voluptas voluptatibus!' },
    { id: 4, name: 'Julia', text: 'Lorem ipsum dolor.' },
  ];

  return (
    <div className={ styles.dialogs }>
      <h1 className={ styles.title }>Dialogs</h1>

      <ul className={ styles.list }>
        { dialogsData.map( dialog => <DialogItem id={ dialog.id } name={ dialog.name } /> ) }
      </ul>

      <div className={ styles.messages }>
        { messagesData.map( message => <Message id={ message.id } name={ message.name } text={ message.text } /> ) }
      </div>
    </div>
  );
}

export default Dialogs;