import React from 'react';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeClicked: 0
        }
    }

    clicked = () => {
        let temp = this.props.timeClicked;
        this.setState({
            timeClicked: temp += 1
        })
    }
    render() {

        return (
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <p>time clicked :{this.props.timeClicked}</p>
                    <img src={this.props.img} alt=''></img>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
export default HornedBeasts;