import React from 'react';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
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
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <p>&#128151;{this.state.timeClicked}</p>
                    <img onClick={this.clicked} src={this.props.img} alt=''></img>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
export default HornedBeasts;