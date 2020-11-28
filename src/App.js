import React from 'react';
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.scss';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="main">
        <Profile />
        {/*<Dialogs />*/}
      </main>
    </div>
  );
}

export default App;
