import React from 'react';
import styled from 'styled-components';

const ImageButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    img {
        display: block;
        width: 32px;
        height: 32px;
    }
`;

function ImageButtons({ src, alt, title, onClick }) {
    return (
        <ImageButton onClick={onClick} title={title}>
            <img src={src} alt={alt} />
        </ImageButton>
    );
}

export default ImageButtons;