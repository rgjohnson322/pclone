import React from "react";
import "../Nav/Nav.css"

class NavClass extends React.Component {
    constructor() {
        super();
        this.state = {
            menuOpenStatus: "top-menu"
        }
    }

    toggle = () => {
        if (this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu") {
            this.setState({ menuOpenStatus: "top-menu-open" });
        } else if (this.state.menuOpenStatus === "top-menu-open") {
            this.setState({ menuOpenStatus: "top-menu-close" });
        }
    }

    render() {
        return (
            <>
                <nav className="tiptop">
                    <div className="top">
                        <h1>Start Bootstrap</h1>
                    </div>
                    <div>
                        <ul>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                            <li className="MB" onClick={this.toggle}> <button
                                className="TMB"

                            >MENU <img
                                    className="hamburgerB"
                                    alt="hamburger"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"

                                /></button></li>
                        </ul>
                    </div>
                </nav>
                <div className={`${this.state.menuOpenStatus}`}>
                    <div className="openlist">
                        <h3>SERVICES</h3>
                        <h3>PORTFOLIO</h3>
                        <h3>ABOUT</h3>
                        <h3>TEAM</h3>
                        <h3>CONTACT</h3>

                    </div>
                </div>
            </>
        )
    }
}

export default NavClass;