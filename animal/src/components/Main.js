import React from 'react';
import Filter from './Filter';
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
                <div>

                    {
                        
                        this.props.arr.map((horn) => {
                            return (
                                    console.log(this.props.arr),
                                <HornedBeasts
                                    title={horn.title}
                                    img={horn.image_url}
                                    description={horn.description}

                                />
                            )
                        })

                    }
                </div>
            </div>

        )
    }
}
export default Main;