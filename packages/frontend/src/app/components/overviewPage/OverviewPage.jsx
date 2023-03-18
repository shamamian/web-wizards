import 'chart.js/auto';
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import './OverviewPage.css'

export function Overview() {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: '',
        data: [75, 75, 95, 75, 55, 55, 100],
      },
    ],
  });
    return (
      <div className="overview">
        <Chart type='bar' data={chartData} />
        <Chart type='bar' data={chartData} />
      </div>
    );
}

  export default Overview;