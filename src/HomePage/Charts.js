import React from 'react';

import axios from 'axios';

import Chart from 'chart.js';

export default class Charts extends React.Component {
  state = {
    myBudget: []
  }

  componentDidMount(){
  var dataChart = {
    datasets: [{
        data: [],
        backgroundColor:[],
    }],

    labels: []
};

axios.get(`http://localhost:3000/budget`)
  .then(res => {
    for(var i=0; i<res.data.myBudget.length; i++){
        dataChart.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataChart.labels[i] = res.data.myBudget[i].title;
        dataChart.datasets[0].backgroundColor[i] = res.data.myBudget[i].backgroundColor;
    }
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
     type: "pie",
     data: dataChart
   });
  });
  }

  render() {
    return (
       <div className="center chart-container">
        <h1>Chart Js Pie Chart</h1>
        <canvas id="myChart"></canvas>
        </div>
    )
  }
}