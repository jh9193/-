import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, {css} from 'styled-components';
import InputBox from '../UI/InputBox';
import TextInput from '../UI/Textarea';
import Button from '../UI/Button';
import { useRecoilState } from 'recoil';
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

const RedButton = styled(Button)`
    ${props => props.red && css`
        // Cancel 버튼에 적용할 스타일
        background-color: red;
        color: white;
    `}
`;

function PostEditPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [posts, setPosts] = useRecoilState(postState);
    const post = posts.find((item) => item.id === parseInt(postId));

    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const isTitleEmpty = title.trim() === '';
        const isContentEmpty = content.trim() === '';
        setIsButtonDisabled(isTitleEmpty || isContentEmpty);
    }, [title, content]);

    const handleSubmit = () => {
        const updatedPosts = posts.map((item) =>
            item.id === post.id ? { ...item, title, content } : item
        );
        setPosts(updatedPosts);
        navigate(`/post/${post.id}`);
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

                <Button
                    title='글 수정하기'
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                />
                <RedButton
                    title='취 소'
                    onClick={() => {
                        navigate(`/post/${post.id}`);
                    }}
                    red
                />
            </Container>
        </Wrapper>
    );
}

export default PostEditPage;
