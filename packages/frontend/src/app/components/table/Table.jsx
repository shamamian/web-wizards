import './Table.css'
import searchIcon from '../../../assets/svg/search.svg'
import { useState } from 'react';
import { useEffect } from 'react';
export function Table({data}) {
  const [text, setText] = useState('')
  const [clone, setClone] = useState([...data])
  console.log(clone);

  useEffect(() => {
    if(text != ''){
        setClone([...clone.filter(e => e.routeID.includes(text))])
    } else {
        setClone([...data])
    }
  }, [text])
  return (
    <div className="table">
      <div className='table__header'>
        <input type='text' placeholder='Search by route ID' value={text} onChange = {(e) => setText(e.target.value)} className="table__header-form"/>
        <img src={searchIcon} alt='' className='table__header-icon'/>
      </div>
      <table className='table__main'>
        <thead className='table__main-header' >
            <tr>
                <th></th>
                <th>Route ID</th>
                <th>Start address</th>
                <th>End address</th>
                <th>Workload index</th>
                <th>Usage index</th>
                <th>Start date</th>
                <th>End date</th>
            </tr>
        </thead>
        <tbody className='table__main-body'>
           {
            clone.map(e => {
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.routeID}</td>
                    <td>{e.startAddress}</td>
                    <td>{e.endAddress}</td>
                    <td>{e.workloadIndex}</td>
                    <td>{e.usageIndex}</td>
                    <td>{e.startDate}</td>
                    <td>{e.endDate}</td>
                </tr>
            })
           }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
