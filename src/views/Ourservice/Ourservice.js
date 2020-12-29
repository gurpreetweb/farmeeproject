import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Ourservice_Content from './Ourservice_Content/Ourservice_Content';
import Student_Overview from './Student_Overview/Student_Overview';
import University_Overview from './University_Overview/University_Overview';
import Partners_Overview from './Partners_Overview/Partners_Overview';

class Ourservice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "overview",
      showHideDemo1: localStorage.getItem("showHideDemo1").toString()==="true"?true:false,
      showHideDemo2: localStorage.getItem("showHideDemo2").toString()==="true"?true:false,
      showHideDemo3: localStorage.getItem("showHideDemo3").toString()==="true"?true:false,
      showHideDemo4: true
    }
    this.hideComponent = this.hideComponent.bind(this);
    
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1, showHideDemo4: false });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2, showHideDemo4: false });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3, showHideDemo4: false });
        break;
        case "showHideDemo4":
          this.setState({ showHideDemo4: !this.state.showHideDemo4 });
          break;
      default:
        
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3,  showHideDemo4 } = this.state;
    return (
      
      <div className="foe-service-main">
     {/* { showHideDemo4 && <Ourservice_Content hideComponent={this.hideComponent}  />} */}
    { showHideDemo1 && <Student_Overview  />}
    { showHideDemo2 && <Partners_Overview  />}
    { showHideDemo3 && <University_Overview  />}
   
     
      </div>
    );
  }
}

export default Ourservice;
