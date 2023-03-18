import './CsvPage.css'

export function Csv({data}) {
    return (
      <div className="csv">
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
            data.map(e => {
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

export default Csv;