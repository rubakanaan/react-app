import React from 'react';

class HornedBeasts extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.img} alt=''></img>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
export default HornedBeasts;