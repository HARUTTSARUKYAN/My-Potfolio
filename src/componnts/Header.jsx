import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <span className="nav__name"><a href="#">HarutTsarukyan</a></span>
                    <ul className="nav__list">
                        <li className="nav__link"><a href="#skill">Skills</a></li>
                        <li className="nav__link"><a href="#proficiency">Proficiancy</a></li>
                        <li className="nav__link"><a href="#open__source">Open Source</a></li>
                        <li className="nav__link"><a href="#footer">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;