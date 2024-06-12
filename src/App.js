import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import MainPage from './components/Page/MainPage';
import PostWritePage from './components/Page/PostWritePage';
import PostViewPage from './components/Page/PostViewPage';
import PostEditPage from './components/Page/PostEditPage';

import {RecoilRoot} from 'recoil';

const MainTitleText = styled.p`
  margin-top: 16px;
  font-size: 32px;
  text-align: center;
  font-family: WavvePADO;
`;

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MainTitleText>미니 게시판</MainTitleText>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
          <Route path="post-edit/:postId" element={<PostEditPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
