import React, { useState } from "react";
import { HamburgerBtn } from "./hamburger-menu-btn.styles";

export default function HamburgerMenuBtn(props) {
    const focus = props.focus
    const [ hamburger, setHamburger ] = useState("hamburger" + " " + focus)

    /**
 * This function adds and removes active class when hamburger menu is clicked for displaying transition.
 * @param {String} hamburger This is a string that is plassed in the class of a span element.
 */

    const handleChange = (e) => {
    if(hamburger === "hamburger") {
        setHamburger("hamburger active")
      } else {
        setHamburger("hamburger")
      }

    return hamburger
    }

    return <HamburgerBtn
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick= {handleChange}
				>
                <span className={hamburger}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
			</HamburgerBtn>
} 
