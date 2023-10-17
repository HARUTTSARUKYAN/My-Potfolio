import React from 'react';
import Header from "./componnts/Header";
import Main from "./componnts/Main";
import Footer from "./componnts/Footer";

function App(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
