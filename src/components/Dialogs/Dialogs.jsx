import React from 'react';
import './Dialogs.scss';
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
    <div className="dialogs">
      <h1 className="dialogs__title">Dialogs</h1>

      <ul className="dialogs__list">
        <DialogItem name='Julia' id='1' />
        <DialogItem name='Egor' id='2' />
      </ul>

      <div className="dialogs__messages">
        <Message id="1" name='Julia' text='Hi!' />
        <Message id="2" name='Julia' text='Yo' />
        <Message id="3" name='Julia' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam odit qui ratione, voluptas voluptatibus!' />
      </div>
    </div>
  );
}

export default Dialogs;