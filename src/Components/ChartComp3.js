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
    legend: {
      labels: {
        color:'#175960',
        backgroundColor:'#17596075'
      }
    }
  },
  scales: {
    x: {
      grid: {
        color:'#175960',

      },
      ticks: {
        color:'#175960',
      },
    },
    y: {
      grid: {
        color:'#175960',

      },
      ticks: {
        color:'#175960',
      },
    },}
};

 const data = {
  labels:['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(220, 220, 220, 0.2)",
      borderColor: "rgba(220, 220, 220, 1)",
      pointBackgroundColor: "#175960",
      pointBorderColor: "#fff",
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40,60,10,40],
      fill: {
        target: "origin", // 3. Set the fill options
        above: '#a8c2c5e7'
      },
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(151, 187, 205, 0.2)",
      borderColor: "rgba(151, 187, 205, 1)",
      pointBackgroundColor: "rgba(151, 187, 205, 1)",
      pointBorderColor: "#fff",
      data: [50, 12, 28, 29, 7, 25, 12, 70, 60,66,20,80],
      fill: {
        target: "origin", // 3. Set the fill options
        above: '#175960'
      },
    },
    {
      label: "My Thered dataset",
      backgroundColor: "#17596075",
      borderColor: "#175960",
      pointBackgroundColor: "#17596075",
      pointBorderColor: "#fff",
      data: [80, 33, 68, 19, 2,55, 22, 100, 30,77,10,120],
      fill: {
        target: "origin", // 3. Set the fill options
        above: 'rgb(236, 236, 236)'
      },
    },
  ],
  // background-color: rgb(236, 236, 236);
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },


};


export default function ChartComp3() {
  return (
    <div>
      {/* <h1 className='text-center'>Line Chart3</h1> */}
      <Line
      data={data}
      options={options}></Line>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
        
          </div>
        </div>
      </div>
    
    </div>
  )
}
