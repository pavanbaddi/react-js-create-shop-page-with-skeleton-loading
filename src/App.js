import Select from 'react-dropdown-select'
import React,{ useState, useEffect } from 'react';

function App() {
  const [options, setOptions] = useState( [
    { id: 1, country: "America" },
    { id: 2, country: "India" }, 
    { id: 3, country: "Africa" },
  ] )

  const [selectedOptions, setSelectedOptions] = useState( [ ] )

  return (
      <>
        <div style={{width:'250px', margin:'15px'}} >
          <Select options={ options.map( ( item, index ) => { 
            return { value: item.id, label: item.country }
          } ) } values={selectedOptions} onChange={ ( values ) => setSelectedOptions([...values]) } />
        </div>
      </>
  );
}

export default App;
