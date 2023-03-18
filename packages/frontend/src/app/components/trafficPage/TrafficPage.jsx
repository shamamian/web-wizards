import '../trafficPage/TrafficPage.css'
import Table from '../table/Table';
import FilterIcon from '../../../assets/svg/filter.svg'
import VectorDown from '../../../assets/svg/vector-down.svg'
export function Traffic({data}) {
    return (
      <div className="traffic">
        <div className='traffic__header'>
          <p className='traffic__header-title'>Routes list</p>
          <button className='traffic__header-btn'>
            <img src={FilterIcon} alt="" />
            <p className='traffic__header-btn-text'>Filter</p>
            <img src={VectorDown} alt="" />
          </button>
        </div>
        <Table data={data}/>
      </div>
    );
}

  export default Traffic;