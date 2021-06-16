import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';

import '../css/Awards.css';

import { } from '@fortawesome/free-solid-svg-icons'

import { awards } from '../EditMe';

function Awards() {

    return (
        <Container className="awards-section">
            <Row>
                <Col xs={12} sm={6} className="awards-panel">
                    {awards.awardsData_1.map((skill) =>
                        <>
                            <p><span className="awards-highlight">{skill.title}</span><br />- {skill.description}<br /> <span className="awards-highlight">{skill.experience}</span></p>
                        </>
                    )}
                </Col>
                <Col xs={12} sm={6} className="awards-panel">
                    {awards.awardsData.map((skill) =>
                        <>
                            <p><span className="awards-highlight">{skill.title}</span><br />- {skill.description}<br /> <span className="awards-highlight">{skill.experience}</span></p>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Awards;
