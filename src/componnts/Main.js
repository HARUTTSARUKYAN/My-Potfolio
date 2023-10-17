import React from 'react';
import MainInfo from "./Main-Info";
import MainSkill from "./Main-skill";
import Proficiency from "./Proficiency";
import OpenSource from "./Open-source";

function Main(props) {
    return (
        <main className="main">
            <MainInfo/>
            <MainSkill/>
            <Proficiency/>
            <OpenSource/>
        </main>
    );
}

export default Main;