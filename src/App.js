import React, { useEffect, useState } from 'react'
import theme_styles from './themes.module.css'
import './App.css'

function App() {

  const [ list, setList ] = useState( [] )
  useEffect( ( ) => {
    applyTheme()
    fetchGallery()
  }, [  ] )

  const getTheme = () => {
    let theme = localStorage.getItem("theme")

    if( theme === "theme-light" ){
      theme = "theme-light"
    } else {
      theme = "theme-dark"
    }

    return theme
  }

  const setTheme = ( theme ) => {
    localStorage.setItem("theme", theme)
  }

  const applyTheme = (  ) => {
    let theme = getTheme()
    let body = document.getElementsByTagName('body')[0]
    
    if( theme === "theme-light" ){
      body.classList.remove( theme_styles["theme-dark"] )
      body.classList.add( theme_styles["theme-light"] )
    } else {
      body.classList.remove( theme_styles["theme-light"] )
      body.classList.add( theme_styles["theme-dark"] )
    }    
  }

  const fetchGallery = async( ) => {
      let url = `http://jsonplaceholder.typicode.com/photos`
      let res = await fetch( url )
      res = await res.json()

      if( res.length ){
        setList([...res])
      }

  }

  const toggleMode = ( ) => {
    let theme = getTheme()
    
    if( theme === "theme-light" ){
      theme = "theme-dark"
    } else {
      theme = "theme-light"
    }
    
    setTheme( theme )
    applyTheme( theme )
  }


  return (
    <>

      <div className="container"  >
        <h1 className="text-center"  >Gallery | <button onClick={toggleMode} type="button">Toggle Theme</button></h1>

        <div className="gallery-wrapper" >
          {
            ( list.length )
              ? list.map( (item, index) => {

                    if( index >= 18 ){
                      return null
                    }

                    return (
                      <div key={index} className="item"  >
                        <div>
                          <img src={item["url"]} className="img" alt="" />
                        </div>
                        <p>{ item.title }</p>
                      </div>
                    )
                })
              : (
                <p>Please wait...</p>
              )
            
          }
        </div>
      </div>

    </>
  )

}

export default App;
