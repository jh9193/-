import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import InputBox from '../UI/InputBox';
import TextInput from '../UI/Textarea';
import Button from '../UI/Button';
import { useSetRecoilState } from "recoil";
import postState from "../Recoil/PostsAtom";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const BlueButton = styled(Button)`
    ${props => props.blue && css`
        // Submit 버튼에 적용할 스타일
        background-color: royalblue;
        color: white;
    `}
`;

const RedButton = styled(Button)`
    ${props => props.red && css`
        // Cancel 버튼에 적용할 스타일
        background-color: red;
        color: white;
    `}
`;

function PostWritePage(props) {
    const navigate = useNavigate();
    const setPosts = useSetRecoilState(postState);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const isTitleEmpty = title.trim() === '';
        const isContentEmpty = content.trim() === '';
        setIsButtonDisabled(isTitleEmpty || isContentEmpty);
    }, [title, content]);

    const handleSubmit = () => {
        const newPost = {
            id: Date.now(),
            title: title.trim(),
            content: content.trim(),
            author: "User", // 실제 작성자 이름을 넣어야 합니다.
            date: new Date().toISOString(),
        };

        setPosts((oldPosts) => [...oldPosts, newPost]);

        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <InputBox
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <BlueButton
                    title='글 작성하기'
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                    blue
                />
                <RedButton
                    title='취 소'
                    onClick={() => {
                        navigate('/');
                    }}
                    red
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
