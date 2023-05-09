import './App.scss'
import React from 'react'
import News from './components/News/News'
import Topicality from './components/Topicality/Topicality';
import Careers from './components/Careers/Careers';
import Games from './components/Games/Games';
import Esports from './components/Esports/Esports';
import Entertaiment from './components/Entertaiment/Entertaiment';
import RiotForge from './components/RiotForge/RiotForge';

function App(){

    return (
        <div className="App">
            <News/>
            <Topicality/>
            <Games/>
            <Esports/>
            <Entertaiment/>
            <RiotForge/>
            <Careers/>
        </div>
    );
}

export default App