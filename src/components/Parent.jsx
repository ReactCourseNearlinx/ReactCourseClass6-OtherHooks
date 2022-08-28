import { useState, useRef, useCallback } from 'react';
import Child from './Child';

const styles = {
  textAlign:'center', 
  border:'2px solid',
  backgroundColor:'lightblue',
  margin: 'auto',
  padding: '1em',
  width: '50%',
  height: '400px',
};

const inputTextStyle = {
  width:'90%', 
  margin:'auto', 
  height:'2rem', 
  borderRadius:'5px'
};

const buttonStyle = {
  width:'20%', 
  margin:'0.5rem auto', 
  height:'2rem', 
  borderRadius:'5px',
  cursor: 'pointer',
};


const Parent = () => {

  const [text, setText] = useState("");
  const [page, setPage] = useState(0);
  const totalRenders = useRef(0);

  const returnPage = useCallback(() => setPage(page-1), [page]);

  return (
    <div style={styles}>
        <h2>Total Parent Renders: {totalRenders.current++}</h2>
        <input value={text} onChange={e => setText(e.target.value)} style={inputTextStyle}/>
        <button onClick={() => setPage(page+1)} style={buttonStyle}>Next Page: {page}</button>
        <Child page={page} updatePage={returnPage} />
    </div>
  )
};

export default Parent;