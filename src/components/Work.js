import React from 'react';
import clsx from 'clsx';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Row, Col } from 'react-bootstrap';
//import 'react-tabs/style/react-tabs.css';

import '../css/Work.css';

import { work } from '../EditMe';



function Work() {
    return (
 <Row className="work-container">
              <Col xs={12} className="work-section">
                  {work.works.map((company) =>
                      <Row className="company">
                          <Col xs={12} md={3} style={{textAlign: "right"}}>
                              <img className="companyLogo" src={clsx({
                                  'https://quarkerp.com.br/images/logo-placeholder.png' : company.companyLogo == "",
                                  [company.companyLogo] : company.companyLogo != "",
                              })} />
                          </Col>
                          <Col xs={12} md={9} className="companyDetails">
                              <p className="companyName">{company.companyName}</p>
                              <p className="companyLocation">{company.companyLocation}</p>
                                {company.roles.map((role) =>
                                  <>
                                      <p className={ "card-subtitle" }>
                                        {work.description}
                                      </p>
                                      <p className="role">• {role.role}</p>
                                      <p className="role-time">{role.startPeriod} - {role.endPeriod} • {role.type}</p>
                                      <p className="role-desc">{role.description}</p>
                                  </>
                                )}
                          </Col>
                      </Row>
                  )}

          </Col>
      </Row>
    );
}

export default Work;
