import React from 'react';

function MainSkill(props) {
    return (
        <div className="main__skill" id="skill">
            <div className="main__skill__image">
                <img src="../images/picTwo.jpg" alt=""/>
            </div>
            <div className="main__skill__info main__skill__info__df">
                <div className="main__skill__info__head">
                    <h1>What I do</h1>
                    <p>CRAZY FRONTEND DEVELOPER WHO WANTS TO MASTER IN ENGINEERING</p>
                </div>
                <div className="main__skill__info__logos">
                    <ul className="main__skill__info__list">
                        <li className="main__skill__info__link"><img src="../images/ic/html.png" alt=""/>&nbsp;&nbsp;HTML</li>
                        <li className="main__skill__info__link"><img src="../images/ic/css.png" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;CSS</li>
                        <li className="main__skill__info__link"><img src="../images/ic/javascript.png" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;JS</li>
                        <li className="main__skill__info__link"><img src="../images/ic/react.png" alt=""/>&nbsp;&nbsp;React</li>
                        <li className="main__skill__info__link"><img src="../images/ic/redux.png" alt=""/>&nbsp;Redux</li>
                        <li className="main__skill__info__link"><img src="../images/ic/git.png" alt=""/>&nbsp;&nbsp;&nbsp;GIT</li>
                        <li className="main__skill__info__link"><img src="../images/ic/github.png" alt=""/>&nbsp;Github</li>
                        <li className="main__skill__info__link"><img src="../images/ic/google.png" alt=""/>Googling</li>
                        <li className="main__skill__info__link"><img src="../images/ic/armenian.png" alt=""/>Armenian</li>
                        <li className="main__skill__info__link"><img src="../images/ic/russian.png" alt=""/>Russian</li>
                    </ul>
                </div>
                <div className="main__skill__info__bottom">
                    <p>⚡Developing frontend for websites.</p>
                </div>
            </div>
        </div>
    );
}

export default MainSkill;