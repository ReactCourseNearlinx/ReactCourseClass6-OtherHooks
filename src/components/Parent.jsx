import { useState, useRef } from 'react'
import Child from './Child'

const styles = {
  textAlign:'center', 
  border:'2px solid',
  backgroundColor:'lightblue',
  margin: 'auto',
  padding: '1em',
  width: '50%',
  height: '400px',
}

const Parent = () => {

  const [text, setText] = useState("")
  const totalRenders = useRef(0);

  return (
    <div style={styles}>
        <h2>Total Parent Renders: {totalRenders.current++}</h2>
        <input value={text} onChange={e => setText(e.target.value)} style={{width:'90%', margin:'auto', height:'2rem', borderRadius:'5px'}}/>
        <Child />
    </div>
  )
}

export default Parent;