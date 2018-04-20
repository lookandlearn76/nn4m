import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import API from '../utils/api'

class DataBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetData: [],
      isLoading: false
    }
  }




  render(props) {
    const tileType = this.props.data
  //  console.log(tileType)
  //  console.log(this.state.data)
    const title = this.props.title
    const { isLoading } = this.state;
    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
      <Col xs={12} md={4}>
        <Panel>
          <Panel.Heading style={{backgroundColor: "white", textAlign: "left" }}>
            {title ? title: null}
          </Panel.Heading>
          <Panel.Body>
            <div className="video-detail col-md-8">
              <p>{ }</p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={title ? title: null} ></iframe>
              </div>
            </div>
          </Panel.Body>
          <Panel.Footer>

          </Panel.Footer>
        </Panel>
      </Col>
    )
  }
}

export default DataBox;
