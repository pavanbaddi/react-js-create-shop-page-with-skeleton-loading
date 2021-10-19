import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({
      name : '',
      age : '',
  }); 

  const [canVote, setCanVote] = useState( null ); 

  useEffect(() => {
    console.log('component loaded')
  } );

  useEffect(() => {
    console.log('form age value changed')
    setCanVote( ( form.age >= 18 )? true : false )
  }, [ form.age ] );


  return (
    <>
      <div>
        <label>Name</label>
        <input type="text" onChange={ ( e ) => setForm( { ...form, name : e.target.value } )  } value={form.name} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" onChange={ ( e ) => setForm( { ...form, age : e.target.value } )  } value={form.age} />
        { canVote===true ? <div>Yes you can vote</div> :  <div>No you cannot vote</div>  }
      </div>
    </>
  );

}

function Online() {

  useEffect(() => {
    console.log(`Online Component, useEffect with no second parameter`)
  });

  useEffect(() => {
    console.log(`Online Component, useEffect with no second parameter as empty array, `)
  }, [  ] );



  return "Online";

}

export default App;
