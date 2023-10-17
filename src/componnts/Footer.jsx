import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="container">
                <footer className="footer" id="footer">
                    <div className="footer__info">
                        <h1>Reach Out to me!</h1>
                        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                        <p>"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 |
                            Speaker🎙 | Tech Writer ✍️</p>
                        <p>📍Gyumri, Armenia</p>
                        <ul className="main__info__link">
                            <li className="main__info__list"><a
                                href="https://www.facebook.com/profile.php?id=100010625021243" target="_blank"><img
                                src="../images/icons/facebook.png" alt=""/></a></li>
                            <li className="main__info__list"><a
                                href="https://www.youtube.com/channel/UChnwWlbgjm_b76PCJPhHH2Q" target="_blank"><img
                                src="../images/icons/youtube.png" alt=""/></a></li>
                            <li className="main__info__list"><a
                                href="https://www.linkedin.com/in/harutyun-tsarukyan-697852245/" target="_blank"><img
                                src="../images/icons/linkedin.png" alt=""/></a></li>
                            <li className="main__info__list"><a href="https://github.com/HARUTTSARUKYAN"
                                                                target="_blank"><img src="../images/icons/github.png"
                                                                                     alt=""/></a></li>
                            <li className="main__info__list"><a href="mailto:tru.g49@gmail.com" target="_blank"><img
                                src="../images/icons/gmail.png" alt=""/></a></li>
                        </ul>
                    </div>
                    <div className="footer__img">
                        <img src="../images/footer.jpg" alt="footerimg"/>
                    </div>
                </footer>

                <div className="made">
                    <p>Made with ❤️ by Harut Tsarukyan</p>
                    <div><p>Theme by</p><a href="https://github.com/HARUTTSARUKYAN" target="_blank">HarutTsaruka-portfolio</a></div>
                </div>
            </div>
        </>
    );
}

export default Footer;