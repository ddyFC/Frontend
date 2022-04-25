import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {Navbar, Nav} from 'react-bootstrap';
import Overall from 'Components/Overall';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function Record() {
  return(
    <>
      <div>
         <h1>기록실 입니다.</h1>
         <h3>전체 기록, 연도별 기록, 혹은 경기 결과을 선택하세요.</h3>
         <Navbar>
             <Nav.Link href="/record/overall">전체 기록</Nav.Link>
             <Nav.Link href="/record/yearrecord">연도별 기록</Nav.Link>
             <Nav.Link href="/record/matchresult">경기 결과</Nav.Link>
         </Navbar>
       </div>
    </>
  );
}

export default Record;
