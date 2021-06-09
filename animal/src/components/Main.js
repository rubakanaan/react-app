import React from 'react';
import HornedBeasts from './HornedBeasts';
//import Data from './Data.json';




class Main extends React.Component {

    render() {

        return (
            <div>
                { this.props.Data.map((beast) => {
                    return (
                        <HornedBeasts
                            title={beast.title}
                            img={beast.image_url}
                            description={beast.description}
                            handleShow={this.props.handleShow}
                        />
                    )
                })

                }
            </div>

        )
    }
}
export default Main;