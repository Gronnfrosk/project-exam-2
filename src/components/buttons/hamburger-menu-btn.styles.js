import styled from "styled-components";

export const HamburgerBtn = styled.button`
@media only screen and (max-width: 992px) {
    box-shadow: none !important;

    & .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color:  ${(props) => props.theme.color.menu};
    }

    & .hamburger {
    cursor: pointer;
    display: block;
    float: right;
    padding: 4.5px 10px;
    box-shadow: none !important;
    }

    & .hamburger.active .bar:nth-child(2) {
    opacity: 0;
    }

    & .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    }

    & .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    }
}`
