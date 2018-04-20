import React, { Component } from 'react';
import TopLine from './topLine';
import DataBox from './dataBox';
import { Row } from 'react-bootstrap';
import API from '../utils/api';
import debounce from 'lodash/debounce'
import _ from 'lodash';
import merge from 'lodash.merge';

class WidgetList extends Component {
  constructor(props) {

    super(props);
    this.state = {
      dataType: [],
      widgetData: [],
      isLoading: false,
      titles: []
    }
  }

  componentDidMount(props) {
    this.setState({ isLoading: true });
    if(this.state.widgetData.length < 1){
      let widget = [];
      this.props.tileUrl.map((urlEnd) => {
        API.get(`${urlEnd}`)
          .then(res => {
            const widgetData = res.data;
            widget.push(widgetData)
          }).then(this.setState({ widgetData: widget, isLoading: false, }))

      });
    }
  }


  render(state) {
  const { widgetData } = this.state
  const { title } = this.props
  console.log(widgetData)

  const widgetArr = title.map(function(widgetData, i){
    return widgetFunc(title[i], widgetData)
  })
  function widgetFunc(title, widgetData) {
  //  console.log(title)
    console.log(widgetData)

      return (
        <React.Fragment>
          { title.length < 4 &&
            (
              <TopLine
                title={title ? title: null}
                totals={widgetData.totals ? widgetData.totals: null }
                avgItems={widgetData.avgItems ? widgetData.avgItems: null }
                data={widgetData.data ? widgetData.data: null }
              />
            )
          }
          { title.length > 3 &&
            (
              <DataBox
                title={title ? title: null}
                top={widgetData.top ? widgetData.top: null }
                bottom={widgetData.bottom ? widgetData.bottom: null }
                data={widgetData.data ? widgetData.data: null }
              />
            )
          }
        </React.Fragment>
      );

  };


    //  }








    return (
      <Row className="show-grid">
        {widgetArr}
      </Row>
    );
  }
}

export default WidgetList;
