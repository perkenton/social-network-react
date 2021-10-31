import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


const App = () => {
  return (
    <BrowserRouter>
      <div className={ styles.appWrapper }>
        <Header />
        <Sidebar />
        <main className={ styles.main }>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
