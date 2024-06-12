import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px solid white;
    border-radius: 16px;
    background: white;
    cursor: pointer;
    margin-right: 10px;
    font-family: hanulim;
    background-color: royalblue;
    color: white;

    ${props =>
        props.blue && css`
            background-color: royalblue;
            color: white;
        `}

    ${props =>
        props.red && css`
            background-color: red;
            color: white;
        `}

    img {
        margin-right: 8px;
        width: 24px;
        height: 24px;
    }
`;

function Button(props) {
    const {title, onClick, disabled, blue, red, src, alt} = props;

    return <StyledButton onClick={onClick} disabled={disabled} blue={blue} red={red} title={title}>
        {src && <img src={src} alt={alt} />}
        {title || "button"}
    </StyledButton>
}

export default Button;