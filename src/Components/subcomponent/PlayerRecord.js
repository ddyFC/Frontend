import React from "react";
import ScoringChart from "./ScoringChart";
import {Container, Row, Col, Table} from "react-bootstrap"


function PlayerRecord() {


    return(
        <>
        <div>
            <Container>
                <Row>
                    <Col>
                        <ScoringChart></ScoringChart>
                    </Col>
                    <Col>
                        <ScoringChart></ScoringChart>
                    </Col>
                </Row>
                <Row>
                    <Table></Table>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default PlayerRecord;