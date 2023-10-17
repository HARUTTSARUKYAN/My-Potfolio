import React from 'react';

function MainInfo(props) {
    return (
        <>
            <div className="container">
                <div className="main__info">
                    <div className="main__info__block main__info__block__df">
                        <h1>
                            Hi all, I'm Harut Tsarukyan 👋
                        </h1>
                        <p>Frontend developer 🚀 having an experience of creating web appliactions using JS, React Redux
                            and
                            some other cool libraries.</p>
                        <ul className="main__info__link">
                            <li className="main__info__list"><a href="https://www.facebook.com/profile.php?id=100010625021243" target="_blank"><img src="../images/icons/facebook.png" alt=""/></a></li>
                            <li className="main__info__list"><a href="https://www.youtube.com/channel/UChnwWlbgjm_b76PCJPhHH2Q" target="_blank"><img src="../images/icons/youtube.png" alt=""/></a></li>
                            <li className="main__info__list"><a href="https://www.linkedin.com/in/harutyun-tsarukyan-697852245/" target="_blank"><img src="../images/icons/linkedin.png" alt=""/></a></li>
                            <li className="main__info__list"><a href="https://github.com/HARUTTSARUKYAN" target="_blank"><img src="../images/icons/github.png" alt=""/></a></li>
                            <li className="main__info__list"><a href="mailto:tru.g49@gmail.com" target="_blank"><img src="../images/icons/gmail.png" alt=""/></a></li>
                        </ul>
                        <div className="button__block">
                            <a className="main__info__btn" href="#">CONTACT ME</a>
                            <a className="main__info__btn"  href="https://staff.am/profile/harutyun-tsarukyan-b0f07eef5d55e52b" target="_blank">SEE MY RESUME</a>
                        </div>
                    </div>
                    <div className="main__info__block">
                        <img className="main__info__block__img" src="../images/PicOne.jpg" alt="#"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainInfo;