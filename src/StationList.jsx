import { arr_stations } from "./ArrStation"
import Station from './Station'
import  { useState,useEffect } from 'react';
      


function StationList() {

     
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [filteredStations, setFilteredStations] = useState(arr_stations)
    
      useEffect(()=>{
        updateFilterStation();
        console.log(inputValue)
      },[inputValue,city,street]
      );
          

      function updateFilterStation() {
        let filteredByLineStations = [];
        let filteredByCityStations = [];
        let filteredStations = [];
      
        // Filter by line number
        if (inputValue !== '') {
          filteredByLineStations = arr_stations.filter(station =>
            station.busLine.includes(parseInt(inputValue))
          );
        } else {
          filteredByLineStations = arr_stations;
        }
      
        // Filter by city
        if (city !== '') {
          filteredByCityStations = filteredByLineStations.filter(station =>
            station.city.includes(city)
          );
        } else {
          filteredByCityStations = filteredByLineStations;
        }
      
        // Filter by street
        if (street !== '') {
          filteredStations = filteredByCityStations.filter(station =>
            station.street.includes(street)
          );
        } else {
          filteredStations = filteredByCityStations;
        }
      
        setFilteredStations(filteredStations);
      }
      
      

    return (
      <>
      <div className="lable">
        <label >
             Bus-Line:
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      </label>
      <label >
             City:
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      </label>
      <label >
             Street:
      <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      </label>
      
    </div>
        
     <div>{filteredStations.map((s,i)=><Station key={i} station={s}></Station>)}</div>
      
      </>
    )
  }
  
  export default StationList

  