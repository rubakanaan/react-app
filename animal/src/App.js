import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/Data.json';
// import Filter from './components/Filter'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selectedProp: {},
      

    }
  };
  handleShow = (pre) => {

    this.setState({
      show: !this.state.show,
      selectedProp: pre

    })
  }
 


  render() {
    return (
      <div>

        <Header />
        <Main
          Data={Data}
          handleShow={this.handleShow}
          slc={this.slc}
          arr={this.state.newArr}

        />
        <SelectedBeast
          handleShow={this.handleShow}
          show={this.state.show}
          selectedProp={this.state.selectedProp}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
