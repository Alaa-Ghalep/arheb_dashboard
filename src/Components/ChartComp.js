import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler 
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler 
);
 const options = {
  plugins: {
    legend:true,
  },
  scales:{
    y:{min:0,max:100}
  }
};

 const data = {
  labels:['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Dataset 1',
      
      data:[41,79,19,40,25,80,39,78,26,19,80,44],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: '#000000',
      pointBorderColor:'black',
      tension:0.4
    },
   

  ],
};


export default function ChartComp() {
  return (
    <div>
      <h1 className='text-center'>Line Chart</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
          <Line
      data={data}
      options={options}></Line>
          </div>
        </div>
      </div>
    
    </div>
  )
}
