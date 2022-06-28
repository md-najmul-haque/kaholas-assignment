import React, { useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {

    const [data, setData] = useState([])

    fetch('/data.json')
        .then(res => res.json())
        .then(data => setData(data))

    return (
        <div>
            {
                data.map(info => <Banner key={info.id} info={info}></Banner>)
            }

        </div>
    );
};

export default Home;