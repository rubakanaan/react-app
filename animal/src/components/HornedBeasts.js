import React from 'react';
import Card from 'react-bootstrap/Card'



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeClicked: 0
        }
    }

    clicked = () => {
        let temp = this.state.timeClicked;
        this.setState({
            timeClicked: temp += 1
        })
    }
    render() {
            
        return (

            <Card style={{ width: '18rem' }}  bg="info" text="white" border="dark"
            >
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>
                        &#128151;{this.state.timeClicked}
                    </Card.Text>
                    <Card.Img variant='top' onClick={() => 
                    {
                         this.clicked(); 
                         this.props.handleShow(this.props)
                     
                    }  }
                        
                          src={this.props.img} alt={this.props.title} />
                </Card.Body>
            </Card>
        )
    }
}
export default HornedBeasts;