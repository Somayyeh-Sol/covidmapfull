import React, { useState, useEffect } from 'react';
import Legend from './Legend.jsx';
import CovidMap from './CovidMap.jsx';
import Loading from './Loading.jsx';
import LoadCountriesTasks from '../tasks/LoadCountriesTask';
import LegendItems  from "../entities/LegendItems";


export default function Covid19(){
    const [countries,setCountries]=useState([]);
    const LegendItemsInReverse=[...LegendItems].reverse();


    const load = () =>{
        const loadCountriesTask= new LoadCountriesTasks();
        loadCountriesTask.load(setCountries);
        
       
    }
    useEffect(load,[]);
    console.log(countries);
    return (
        <div>
            { countries.length === 0 ?(  <Loading />) : (<div>
                <CovidMap countries={countries} />
      

                <Legend LegendItems={LegendItemsInReverse} />
                
                 </div>
             )}
               
        </div>
    )
}