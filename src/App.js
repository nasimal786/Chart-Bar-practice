import React, { useRef } from 'react'
import {Bar, getElementAtEvent} from "react-chartjs-2"
import { Chart as chartjs,BarElement,CategoryScale,LinearScale,Tooltip,Legend } from 'chart.js'
chartjs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)
function App() {
const data = {
  labels: ['mon','tue','wed','thu','fri','sat'],
  datasets : [{
    label: 'sales details',
    data: [33,24,55,63,99,65],
    backgroundColor: ['red','blue'],
    borderColor: 'black',
    borderWidth: 1
  }]
}
const options = {}
const chartRef=useRef();
function handleClick(event){
  if(getElementAtEvent(chartRef.current,event).length >0){
    console.log(getElementAtEvent(chartRef.current,event))
  }
  
}
  return (
    <div style={{width: '600px',height: '60%'}}>
      <Bar data={data} ref={chartRef} options={options} onClick={handleClick} />
    </div>
  )
}

export default App