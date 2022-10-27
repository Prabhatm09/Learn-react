import React,{useState} from "react"
import { useEffect } from "react"
import "./Covid.css"
import axios from "axios"
export function Covid(){
    const [covidinfo,setCovidInfo]=useState({})
   const[searh,setSearch]=useState("")
    useEffect(()=>{
        axios.get(`https://disease.sh/v3/covid-19/all`)
        .then(res=>{
            console.log(res)
            setCovidInfo({...res.data})
        })
    },[])

    return(
    <>
    <div className="covid-info_container">
        <div className="img_logo">
            <img src="data:image/jpeg;base64,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" alt="img"/>
        </div>
        <h1>Covid Analysis</h1>
       <p className="info"> <span> Active - </span>    {covidinfo.active}</p>
       <p className="info"> <span> TodayCases - </span>   {covidinfo.todayCases}</p>
       <p className="info"> <span> Tests - </span>    {covidinfo.tests}</p>
       <p className="info"> <span> TodayDeaths - </span>    {covidinfo.todayDeaths}</p>
       <p className="info"> <span> TodayRecovered - </span>   {covidinfo.todayRecovered}</p>
       <p className="info"> <span> Updated - </span>   {covidinfo.updated}</p>
     </div>
        </>
    )
}