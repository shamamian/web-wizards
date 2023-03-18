import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Traffic from './components/trafficPage/TrafficPage';
import Overview from './components/overviewPage/OverviewPage';
import Csv from './components/csvPage/CsvPage';
import './app.css'
import { useState } from "react";
export function App() {
  const [data, setData] = useState([ 
    { 
      id: 1, 
      routeID: '8074567876543', 
      startAddress: 'Ney York City, 5th avenue, sq....', 
      endAddress: 'This status inform', 
      workloadIndex: 12, 
      usageIndex: 23, 
      startDate: '13 May 2022 - 11:20', 
      endDate: '13 May 2022 - 11:23', 
    }, 
    { 
      id: 2, 
      routeID: '884567876543', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 13, 
      usageIndex: 23, 
      startDate: '13 May 2022 - 10:20', 
      endDate: '13 May 2022 - 10:46', 
    }, 
    { 
      id: 3, 
      routeID: '65237428364863', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 14, 
      usageIndex: 45, 
      startDate: '13 May 2022 - 10:20', 
      endDate: '13 May 2022 - 10:45', 
    }, 
    { 
      id: 4, 
      routeID: '76238723542', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 15, 
      usageIndex: 34, 
      startDate: '13 May 2022 - 10:20', 
      endDate: '13 May 2022 - 16:50', 
    }, 
    { 
      id: 5, 
      routeID: '329786573', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 23, 
      usageIndex: 34, 
      startDate: '13 May 2022 - 10:33', 
      endDate: '13 May 2022 - 17:45', 
    }, 
    { 
      id: 6, 
      routeID: '38475736435345', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 45, 
      usageIndex: 56, 
      startDate: '13 May 2022 - 10:23', 
      endDate: '13 May 2022 - 15:55', 
    }, 
    { 
      id: 7, 
      routeID: '3874735345345', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 46, 
      usageIndex: 78, 
      startDate: '13 May 2022 - 10:39', 
      endDate: '13 May 2022 - 16:59', 
    }, 
    { 
      id: 8, 
      routeID: '987276534', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 67, 
      usageIndex: 45, 
      startDate: '13 May 2022 - 11:40', 
      endDate: '13 May 2022 - 11:40', 
    }, 
    { 
      id: 9, 
      routeID: '927846532409802', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 45, 
      usageIndex: 12, 
      startDate: '13 May 2022 - 13:45', 
      endDate: '13 May 2022 - 13:45', 
    }, 
    { 
      id: 10, 
      routeID: '2983587623875', 
      startAddress: 'This status informs ', 
      endAddress: 'This status inform', 
      workloadIndex: 78, 
      usageIndex: 12, 
      startDate: '13 May 2022 - 10:50', 
      endDate: '13 May 2022 - 10:50', 
    }, 
  ])
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Traffic data={data}/>}></Route>
        <Route path="/overview" element={<Overview/>}></Route>
        <Route path="/csv" element={<Csv data={data}/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
