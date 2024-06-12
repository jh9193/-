import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostTable from '../Table/PostTable'

import Button from '../UI/Button';

const Wrapper = styled.div`
    margin-top: 16px;
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
`;

function MainPage(props) {
    const navigate = useNavigate();

    const handleClickItem = (rowData) => {
        navigate(`/post/${rowData.id}`);
    }

    return (
        <Wrapper>
            <Container>
                <Button
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />

                <PostTable
                    onClickItem={handleClickItem}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;