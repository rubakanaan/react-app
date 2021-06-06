import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        let image_url = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";
        let image_url2= "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";
        return (
            <div>
                <div>
                    <title>UniWhal</title>
                    <img src={image_url} alt='' />
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                </div>
                <div>
                    <title>Rhino Family</title>
                    <img src={image_url2} alt='' />
                    <p>Mother (or father) rhino with two babies</p>
                </div>
            </div>
        )
    }
}
export default HornedBeasts;