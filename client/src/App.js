import logo from './logo.svg';
import './App.css';
import Jobs from "./Jobs";
import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';


const mockJobs =[
  {
    title:"SE 1",
    location: "Berlin"
  },
  {
    title: "SE 2",
    location: "Talinn"
  }
]


async function fetchJobs (updateCallBack){
  const res = await fetch("http://localhost:3001/jobs")
  const json = await res.json()
  console.log(json)
  updateCallBack(json)
  return json
}


function App() {
  const [jobList, setJobList]=useState([])
  useEffect(()=>{
    fetchJobs(setJobList)
  }, []) 

  return (
    <div className="App" >
      <Typography variant="h4">
      <Jobs jobs={jobList}/>
      </Typography>
      

    </div>
  );
}

export default App;
