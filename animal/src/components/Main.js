import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json';
class Main extends React.Component {

    render() {

        return (
            <div>
               { Data.map((beast)=>{
                    return(
                <HornedBeasts
                    title={beast.title}
                    img={beast.image_url}
                    description={beast.description}

                />
                    )
                })

            }
            </div>
        )
    }
}
export default Main;