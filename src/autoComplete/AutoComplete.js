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
        const filteredData = data.filter((countryname) => {
        const regex = new RegExp(`${key}`)
        return countryname.name.match(regex)
        // console.log(countryname)
         })
         setEnterDetails(filteredData)
         console.log(enterDetails)
}
 


    return (
        <div className="main-div">
            <div className="second-div">
                <div className="input-div">
                    <input  onChange={(e) => searchData(e.target.value) } type="text" placeholder="" />
                    {enterDetails.map((item) => {
                        return (
                        <div>{item.name}</div>
                        )
                    })}
                </div>
                     
            </div>
        </div>
    )
}

export default AutoComplete;