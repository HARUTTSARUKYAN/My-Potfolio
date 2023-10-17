import React from 'react';

function OpenSource(props) {
    return (
        <>
            <div className="container">
                <h1 className="open__source__name">Open Source Projects</h1>
                <div className="open__source" id="open__source">
                    <div className="open__source__block">
                        <div className="open__source__block__top"><span>tik-tak-toe</span> <span>Public</span></div>
                        <div className="open__source__block__center"><p>tik-tak-toe</p></div>
                        <div className="open__source__block__bottom"><div></div><p>JavaScript</p></div>
                    </div>
                    <div className="open__source__block">
                        <div className="open__source__block__top"><span>haruttsarukyan.github.io</span> <span>Public</span></div>
                        <div className="open__source__block__bottom"><div></div><p>JavaScript</p></div>
                    </div>
                    <div className="open__source__button__block">
                        <a href="https://github.com/HARUTTSARUKYAN" target="_blank">MORE PROJECTS</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OpenSource;