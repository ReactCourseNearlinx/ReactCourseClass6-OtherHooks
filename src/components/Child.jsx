import { useRef, useState } from 'react'
import data from "./api/index";

const styles = {
  textAlign:'center', 
  border:'2px solid',
  backgroundColor:'lightgreen',
  margin: '1em auto',
  padding: '1em',
  width: '50%',
  height: '50%',
}

const Child = () => {

  const [currentCar, setCurrentCar] = useState('');
  const totalRenders = useRef(0);

  return (
    <div style={styles}>
      
      <select value={currentCar} onChange={(e)=>setCurrentCar(e.target.value)}>
        {[...data].map((car)=>
          <option key={car[0]+car[1]}  value={car[0]}>
            {car[1]}
          </option>
        )}
      </select>
      
      <h2>Total Child Renders: {totalRenders.current++}</h2>

    </div>
  )
}

export default Child;