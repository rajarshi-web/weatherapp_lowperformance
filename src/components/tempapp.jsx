import React, { useEffect, useState } from "react";

const TempApp = () => {
    const [cord, setCord] = useState({
        lat: '',
        lon: ''
    })
    const [search, setSearch] = useState("22.6701");
    const [search1, setSearch1] = useState("88.3355");
    const [response, setResponse] = useState({
        main: {
            temp:'',
            temp_min:'',
            temp_max:''
        },
        name:''
    });
    const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${search}&lon=${search1}&appid=bd5e378503939ddaee76f12ad7a97608`
        const response = await fetch(url);
        // console.log(response);
        const resJson = await response.json();
        console.log(resJson);
        // setlat(resJson);
        // setlon(resJson);
        setCord(resJson['coord']);
        setResponse(resJson);
    }

    useEffect(() => {
        fetchApi();
    });

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" placeholder="latitude" value={search} className="inputField" onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                    <input type="search" placeholder="longitude" value={search1} className="inputField" onChange={(event) => {
                        setSearch1(event.target.value)
                    }} />
                </div>
            </div>

            <div className="info">
                <h5 className="loaction"><span><i className="fa-solid fa-earth-oceania"></i></span>Latitute: {cord.lat}</h5>
                <h5 className="loaction"><span><i className="fa-solid fa-earth-americas"></i></span>Longitude: {cord.lon}</h5>
                <h3 className="city">City <b>{response.name}</b></h3>
                <h3 className="temp">{response.main.temp}°F</h3>
                <h5 className="tempin_max">Min {response.main.temp_min}°F | Max {response.main.feels_like}°F</h5>
            </div>
        </>
    )
}

export default TempApp