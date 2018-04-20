import React, { Component } from 'react';

import _ from 'lodash';
import WidgetList from './components/widgetList'
import API from './utils/api'
import './App.css';
import NavBar from './components/navbar'


//const url1 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard'
//console.log(url1)
const url1 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/orders'
console.log(url1)
const url2 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/revenue'
console.log(url2)
const url3 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/conversion'
console.log(url3)
const url4 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/appVersion'
console.log(url4)
const url5 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/abandon'
console.log(url5)
const url6 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/download'
console.log(url6)
const url7 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/reviews'
console.log(url7)
const url8 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/visits'
console.log(url8)
const url9 = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard/pushPerformance'
console.log(url9)
//const ROOT_URL = `https://private-eeee5-nn4mjstest.apiary-mock.com/${DATA_KEY}`;

// --- use the root for every call
// --- add the data key to the root for each call.
// --- only call the data conditionally on the dashboard data
// ---
// --- separate out the topline from the databox ie. if type === databox or type === topline

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     topUrlEnd: [],
     boxUrlEnd: [],
     topline: [],
     databox: [],
     isLoading: false
    };

  }
  componentDidMount() {
    this.setState({ isLoading: true})

    if(this.state.topline.length < 1){

    // Make a request for vehicle data
      API.get(`dashboard`)
        .then(res => {
          let top = [];
          let box = [];
          let topUrlEnd = [];
          let boxUrlEnd = [];
          res.data.items.map(function(item){
            if(item.type === 'topline'){
              top.push(item.title),
              topUrlEnd.push(item.data)
            } else if (item.type === 'databox'){
              box.push(item.title),
              boxUrlEnd.push(item.data)
            }
          })

          console.log(top)
          console.log(box)
          console.log(topUrlEnd)
            console.log(boxUrlEnd)
          console.log(res)
          this.setState({ topline: top, databox: box, topUrlEnd: topUrlEnd, boxUrlEnd: boxUrlEnd, isLoading: false })
        })
    }
  }
  /*inputChangeHandler : function (event) {
      this.setState({ [event.target.id]: event.target.value });
      // alternatively using template strings for strings
      // this.setState({ [`key${event.target.id}`]: event.target.value });
  }*/
  componentWillUpdate(nextProps, nextState){
//    nextState.dashboard
//    API.get(nextState.dashboard)
  }
  /*        .then(axios.all([
          API.get('/api/seat/models'),
          API.get('/api/volkswagen/models')
          API.get('/api/seat/models'),
          API.get('/api/volkswagen/models')
          API.get('/api/seat/models'),
          API.get('/api/volkswagen/models')
          ])
      .then(axios.spread(function (seat, volkswagen) {
        this.setState({ vehicles: seat.data + volkswagen.data })
      }))
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));
  }
    API.get(`dashboard`)
      .then(res => {
        const data = res.data;

        this.setState({ dashboard: data.items, isLoading: false });

      })
    }
  }
*/
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
        return <p>Loading ...</p>;
    }
    const { topUrlEnd, boxUrlEnd, topline, databox } = this.state
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to the NN4M test for Mark Hayden</h1>
        </header>
        <NavBar/>
        <div className='container'>
          <WidgetList tileUrl={topUrlEnd} title={topline} />
          <WidgetList tileUrl={boxUrlEnd} title={databox}/>
        </div>

      </div>
    )
  }
}

export default App;
