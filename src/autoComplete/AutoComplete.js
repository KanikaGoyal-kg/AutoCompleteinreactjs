import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AutoComplete = () => {

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

   

     function searchData (text) {
        setSearch(text);
        const filteredData = data.filter((countryname) => {
        const regex = new RegExp(`${text}`)
        return countryname.name.match(regex)
         })
         setEnterDetails(filteredData)
         console.log(enterDetails)
}
 


    return (
        <div className="main-div">
            <div className="second-div">
                <div className="input-div">
                    <input  onChange={(e) => searchData(e.target.value) } value={search} type="text" placeholder="" />
                    {enterDetails.map((item, index) => {
                        return (
                        <div key={index} >
                            <p onClick = { () => {
                               setSearch( item && item.name) 
                            }}>{item.name}</p>
                        </div>
                        )
                    })}
                </div>
                     
            </div>
        </div>
    )
}

export default AutoComplete;