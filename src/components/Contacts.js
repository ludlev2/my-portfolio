import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Contracts.css';

import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

import { contractsCards } from '../EditMe';

function Contracts() {
    return (
        <Container className="contracts-container">
            <Row style={{justifyContent:"center"}}>
                {contractsCards.map((card) =>
                    <Col xs={12} md={6} lg={4} className="contracts-card">
                        {/*<div className="card-info_c">
                            <Row>
                                <Col xs={10} className="card-title">{card.projectTitle}</Col>
                                <Col xs={2} className="card-external-url">
                                <a href={card.projectURL} className="url-icon"><FontAwesomeIcon icon = { faExternalLinkAlt } /></a></Col>
                            </Row>
                            <Row>
                                <Col className="card-desc">{card.projectDesc}</Col>
                                <Col className="myemail"></Col>
                                <Col onload="putEmail()"></Col>
                            </Row>
                        </div>*/}
                        <div className="card-info_c">
                        <a href={card.projectURL} className="url-icon" style={{marginLeft:"auto", marginRight:"auto"}}>levente.ludanyi@polytechnique.edu <FontAwesomeIcon icon = { faExternalLinkAlt } /></a>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

//
// Email address link javascript     (by Grauw)
// =============================
// Using standard DOM methods working in an XHTML environment.
//
// License: Public Domain (but feel free to mention my name ;))
//
// Usage:
// * Fill in your email address in the variable ‘eml’ below,
// * Put a tag with class="myemail" where you want the link,
// * Add onload="putEmail();" to your <body> tag.
//
function putEmail() {
    var eml  = 'email'              // The email address...
    eml += '@'
    eml += 'domain.com'

    var link = document.createElement("a");
    link.setAttribute("href", "mailto:" + eml);
    link.appendChild(document.createTextNode(eml));
    var spans = getElementsByClass("span", "myemail");
    for (var i = 0; i < spans.length; i++)
        spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}

//
// Returns an array of elements with the given class
//
function getElementsByClass(elem, classname) {
    var classes = new Array();
    var alltags = document.getElementsByTagName(elem);
    for (var i = 0; i < alltags.length; i++)
        if (alltags[i].className == classname)
            classes[classes.length] = alltags[i];
    return classes;
}

export default Contracts;
