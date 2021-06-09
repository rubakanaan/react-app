import React from 'react';
import Header from './components/Header'; 
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/Data.json';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selectedTitle: '',
      selectedImg: '', 
      selectedDesc:''
        
    }
};
handleShow = (title , img , desc) => {
console.log("work");
  this.setState({
      show: !this.state.show,
      selectedTitle: title,
      selectedImg: img, 
      selectedDesc: desc
  })
}
handleClose = () => {
 
    this.setState({
        show: false
    })
  }

  render(){
    return(
      <div>
        
        <Header />
        <Main 
        Data={Data}
        handleShow={this.handleShow}
        handleClose={this.handleClose}
         />
        <SelectedBeast
        show={this.state.show}
        title={this.state.selectedTitle}
        img= {this.state.selectedImg}
        desc={this.state.selectedDesc}
          />
        <Footer />
      </div>
    )
  }
}

export default App;
