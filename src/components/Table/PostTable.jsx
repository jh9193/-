import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue} from 'recoil';
import postState from "../Recoil/PostsAtom";
import { useNavigate } from 'react-router-dom';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
`;

const TableHead = styled.thead`
    background-color: #f1f1f1;
`;

const TableRow = styled.tr`
    background-color: transparent;
    &:hover {
        background-color: lightgrey;
    }
`;

const TableHeader = styled.th`
    padding: 8px;
    border: 1px solid #ddd;

    &:nth-child(1) {
        width: 10%;
    }

    &:nth-child(2) {
        width: 60%;
    }

    &:nth-child(3) {
        width: 15%;
    }

    &:nth-child(4) {
        width: 15%;
    }
`;

const TableCell = styled.td`
    padding: 8px;
    border: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
`;

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PaginationWrapper = styled.div`
    display: flex;
    margin-top: 16px;
`;

const PaginationButton = styled.button`
    margin: 0 4px;
    padding: 4px 8px;
    width: 30px; /* 고정된 버튼 너비 */
    height: 30px; /* 고정된 버튼 높이 */
    background-color: ${props => props.active ? 'lightgrey' : 'white'};
    border: 1px solid grey;
    cursor: pointer;
`;

function PostTable() {
    const posts = useRecoilValue(postState);
    const navigate = useNavigate();
    const itemsPerPage = 10; // 페이지 당 보여줄 게시물 수
    const [currentPage, setCurrentPage] = useState(1);


    const handleClick = (post) => {
        navigate(`/post/${post.id}`);
    };

    const getCurrentPosts = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return posts.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(posts.length / itemsPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <PaginationContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>글 번호</TableHeader>
                        <TableHeader>제목</TableHeader>
                        <TableHeader>작성자</TableHeader>
                        <TableHeader>작성일</TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                    {getCurrentPosts().map((post, index) => (
                        <TableRow key={post.id} onClick={() => handleClick(post)}>
                            <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.author}</TableCell>
                            <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            <PaginationWrapper>
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationButton
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => goToPage(index + 1)}
                    >
                        {index + 1}
                    </PaginationButton>
                ))}
            </PaginationWrapper>
        </PaginationContainer>
    );
}

export default PostTable;
