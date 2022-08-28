import { useRef, useState, memo, useMemo } from 'react';
import data from "./api/index";

const BIG_NUMBER = 5_000_000_000;

const styles = {
  textAlign:'center', 
  border:'2px solid',
  backgroundColor:'lightgreen',
  margin: '1em auto',
  padding: '1em',
  width: '50%',
  height: '50%',
};

const inputStyles = {
  width:'80%', 
  margin:'0.5rem auto', 
  height:'2rem', 
  borderRadius:'5px',
  cursor: 'pointer',
};

const Child = (props) => {

  const [currentCar, setCurrentCar] = useState('');
  const totalRenders = useRef(0);

  const expensiveCalculation = useMemo(()=> {
    let totalInfo = 0;
    for (let i = 0; i < BIG_NUMBER; i++) {
      totalInfo++;
    }
    return totalInfo;
  },[])

  return (
    <div style={styles}>
      
      <select value={currentCar} onChange={(e)=>setCurrentCar(e.target.value)} style={inputStyles}>
        {[...data].map((car)=>
          <option key={car[0]+car[1]}  value={car[0]}>
            {car[1]}
          </option>
        )}
      </select>
      
      <button style={inputStyles} onClick={props.updatePage}>Return Page: {props.page}</button>
      
      <h2>Total Child Renders: {totalRenders.current++}</h2>
      <h3>Expensive calculation result: {expensiveCalculation}</h3>
    </div>
  )
};

export default memo(Child);