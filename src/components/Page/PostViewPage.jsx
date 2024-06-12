import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button';
import ImageButtons from '../UI/ImageButton';
import { useRecoilState } from 'recoil';
import postState from "../Recoil/PostsAtom";
import edit from "../../img/edit.png";
import delete_img from "../../img/delete.png";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    // display: flex;
    // justify-content:space-between;
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
    font-family: DDung;
`;

const TitleText = styled.p`
    margin-top: 16px;
    padding-left: 16px;
    font-size: 32px;
    font-weight: 500;
`;

const ContentText = styled.p`
    padding-left: 28px;
    margin-top: 48px;
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const ButttonContainer = styled.div`
    margin-top: 32px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: end;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [posts, setPosts] = useRecoilState(postState);

    const post = posts.find((item) => item.id === parseInt(postId));

    const handleDelete = () => {
        const updatedPosts = posts.filter((item) => item.id !== post.id);
        setPosts(updatedPosts);
        navigate('/');
    };

    if (!post) {
        return (
            <Wrapper>
                <Container>
                    <p>해당 포스트를 찾을 수 없습니다.</p>
                    <Button title="뒤로 가기" onClick={() => navigate('/')} />
                </Container>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Container>
                <Button
                    title='뒤로 가기'
                    onClick={() => {
                        navigate('/');
                    }}
                />

                <PostContainer>
                    <TitleText>{post.title}</TitleText>

                    <ContentText>{post.content}</ContentText>
                    {/* <Divider /> */}
                    <ButttonContainer>
                        <ImageButtons
                            src={edit}
                            alt='수정'
                            title='수정하기'
                            onClick={() => {
                                navigate(`/post-edit/${post.id}`);
                            }}
                        />
                        <ImageButtons
                            src={delete_img}
                            title='삭제하기'
                            onClick={handleDelete}
                        />
                    </ButttonContainer>
                </PostContainer>
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;