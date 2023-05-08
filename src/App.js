import './App.scss'
import React, { useEffect, useState } from 'react'
import News from './components/News/News'
import Topicality from './components/Topicality/Topicality';
import Careers from './components/Careers/Careers';

function App(){

    return (
        <div className="App">
            <News/>
            <Topicality/>
            <Careers/>
        </div>
    );
}

export default App