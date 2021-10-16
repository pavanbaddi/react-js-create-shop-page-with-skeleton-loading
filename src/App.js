import usePosts from 'lib/hooks';
import React, { useEffect, useState } from 'react'
import theme_styles from './themes.module.css'

function App() {

  const [ list, setList ] = useState( [] )
  const posts = usePosts()

  useEffect( ( ) => {
    fetchGallery()
}, [  ] )

  const fetchGallery = async( ) => {
      let url = `http://jsonplaceholder.typicode.com/photos`
      let res = await fetch( url )
      res = await res.json()

      if( res.length ){
        setList([...res])
      }

  }

  const toggleMode = ( ) => {
    // https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/ 
  }


  return (
    <>

      <div style={{width:"80%", margin:"auto"}} >
        <h1 style={{textAlign:"center"}}  >Gallery | <button onClick={toggleMode} type="button">Mode</button></h1>

        <div style={ { display : 'grid', gridTemplateColumns : 'repeat(3,1fr)', gridAutoRows: '300px' } } >
          {
            ( list.length )
              ? list.map( (item, index) => {

                    if( index >= 9 ){
                      return null
                    }

                    return (
                      <div key={index} style={ { border : '1px solid #eee', padding : '10px 5px' } } >
                        <div>
                          <img src={item["url"]} style={ { width : '100%', height : '200px', objectFit : 'contain' } } alt="" />
                        </div>
                        <p>{ item.title }</p>
                      </div>
                    )
                })
              : (
                <div>Please wait...</div>
              )
            
          }
        </div>
      </div>

    </>
  )

}

export default App;
