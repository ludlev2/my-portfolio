import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container, Col,
    Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Profile.css';

import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Value Import
import { information, socials } from '../EditMe';



function Profile() {
    return (
        <Container fluid className="profile-row">
            <Row>
                <Col className="column-greeting" xs={12} lg={4}>
                    <p className="greeting-sub">{information.welcomeMsg}</p>
                    <p className="greeting-name">
                      <Typewriter
  options={{
    strings: ['Levente Ludányi', 'Levi'],
    autoStart: true,
    loop: true,
  }}
/></p>
                </Col>
                <Col className="column-profile" xs={12} lg={4}>
                    <div className="profile">
                        <img className="profile-img" src={process.env.PUBLIC_URL + "/profpic.jpg"} alt={information.fullName + "'s profile"}></img>
                    </div>
                    <div className="profile-socials">
                        <a target="_blank" rel="noreferrer" href={socials.facebookURL} className="profile-facebook">
                            <FontAwesomeIcon icon = { faFacebook } />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socials.githubURL} className="profile-github">
                            <FontAwesomeIcon icon = { faGithub } />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socials.linkedinURL} className="profile-linkedin">
                            <FontAwesomeIcon icon = { faLinkedin } />
                        </a>
                    </div>
                </Col>
                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text">{information.aboutMe}</p>
                    <p className="lower-profile-text-sub">{information.companyName}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
