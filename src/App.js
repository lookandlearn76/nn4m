import React, { Component } from 'react';
import { Panel, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

const url1 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard'
console.log(url1)
const url2 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/orders'
console.log(url2)
const url3 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/revenue'
console.log(url3)
const url4 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/conversion'
console.log(url4)
const url5 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/appVersion'
console.log(url5)
const url6 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/abandon'
console.log(url6)
const url7 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/download'
console.log(url7)
const url8 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/reviews'
console.log(url8)
const url9 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/visits'
console.log(url9)
const url10 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/pushPerformance'
console.log(url10)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the NN4M test for Mark Hayden</h1>
        </header>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Select App
              </NavItem>
              <NavItem eventKey={2} href="#">
                Compare
              </NavItem>
              <NavItem eventKey={3} href="#">
                This Week
              </NavItem>
              <NavItem eventKey={4} href="#">
                Against
              </NavItem>
              <NavItem eventKey={5} href="#">
                Last Week
              </NavItem>
              <NavItem eventKey={6} href="#">
                Within
              </NavItem>
              <NavItem eventKey={7} href="#">
                Filter
              </NavItem>
              <NavItem eventKey={8} href="#">
                RESET
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div class="container">
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Dashboard
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The dashboard data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" title={url1} src={url1}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Orders
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The orders data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" title={url2} src={url2}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Revenue
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The Revenue data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url3}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Conversion
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The Conversion data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url4}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  App Version
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The App Version data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url5}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Basket Abandonment
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The Basket Abandonment data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url6}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Downloads
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The download data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url7}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Reviews
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The Reviews data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url8}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Visits
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The Visits data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url9}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={4}>
              <Panel>
                <Panel.Heading>
                  Push Performance
                </Panel.Heading>
                <Panel.Body>
                  <div className="video-detail col-md-8">
                    <p>The Push Performance data is</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url10}></iframe>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default App;
