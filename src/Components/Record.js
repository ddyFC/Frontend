import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {Navbar, Nav, Row, Col} from 'react-bootstrap';
import Overall from 'Components/Overall';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ScoringChart from './subcomponent/ScoringChart';
import TeamRecordChart from './subcomponent/TeamRecordChart';


function Record() {
  return(
    <>
      <div>
         <h1>기록실</h1>

         <Row>
            <Col>
              <ScoringChart></ScoringChart>
            </Col>
            <Col>
              <ScoringChart></ScoringChart>
            </Col>
          </Row>
          <Row>
            <Col>
              <TeamRecordChart></TeamRecordChart>
            </Col>
          </Row>

         <Navbar>
             <Nav.Link href="/record/player">선수 기록</Nav.Link>
             <Nav.Link href="/record/team">팀 기록</Nav.Link>
         </Navbar>
       </div>
    </>
  );
}

export default Record;
