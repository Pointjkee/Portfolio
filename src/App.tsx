import React from 'react';
import './App.scss';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {MySkills} from "./MySkills/MySkills";
import {MyWorks} from "./MyWorks/MyWorks";
import { RemoteWork } from './RemoteWork/RemoteWork';
import {Feedback} from "./Feedback/Feedback";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyWorks/>
            <RemoteWork/>
            <Feedback/>
            <Footer/>
        </div>
    );
}

export default App;
