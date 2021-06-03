import axios from 'axios';
import React, { useEffect, useState } from 'react';
import names from '../component/AutoSearch'

const AutoComplete = () => {

    // const [display, setDisplay] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [enterDetails, setEnterDetails] = useState([])


     const API = async () => {
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        console.log(response.data);
        setData(response.data);

    }
    console.log(data,"data")

    useEffect ( () => {
        API();
    },[])

   

     function searchData (key) {
         console.log(key,"key")
         if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
        const filteredData = data.filter((countryname) => countryname.name === key)
        console.log(filteredData,"hjf");
        
    }

    }


    return (
        <div className="main-div">
            <div className="second-div">
                <div className="input-div">
                    <input  onChange={(e) => searchData(e.target.value) } type="text" placeholder="" />
                </div>
                     
            </div>
        </div>
    )
}

export default AutoComplete;