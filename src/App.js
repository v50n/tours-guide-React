import React, { useState, useEffect } from 'react';
import './App.css';
import Tours from './Components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () =>{
      var response = await fetch(url);
      var data = await response.json();

      setData(data);
      setLoading(false);
    }


    const handleNotInterested = (id) => {
      var copyData = data.filter(item => item.id !== id);
      setData(copyData);
    }

    const handleRefresh = () => {    
        getData();
    }

    useEffect(()=>{
      getData();
    },[]);
    if(loading){
      return(
        <div className="App">
        Loading...
      </div>
      )
    }else{
      if(data.length === 0){
        return(
          <div className="App">
          <h1>No tours left</h1>
            <button className="btn-refresh" onClick={handleRefresh}>Refresh</button>
        </div>
        )
      }else{
        return (
          <div className="App">
          <h1>Our Tours</h1>
          <hr/>
          {
            data.map(item => <Tours key={item.id} {...item} handleNotInterested={handleNotInterested}/>)
          }
        </div>
        );
      }
    }
}

export default App;
