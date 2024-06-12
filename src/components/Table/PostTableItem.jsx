import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 90px);
    height: 40px;
    padding: 16px;
    margin: 20px 26px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    font-family: DDung;
    :hover {
        color: royalblue;
    }
`;

const TitleText = styled.p`
    font-size: 24px;
    font-weight: 500;
`;

function PostTableItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostTableItem;