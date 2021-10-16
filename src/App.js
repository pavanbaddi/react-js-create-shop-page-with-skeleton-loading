import usePosts from 'lib/hooks';
import React from 'react';

function App() {

  const posts = usePosts()

  return (
    <>

      <h1>Posts | <button onClick={ posts.fetchPosts } type="button" >Load Posts </button> </h1>

      { posts.count > 0 ? <div>Total Posts : {posts.count} </div> : null }

      <div>
        {
          ( !posts.isLoading )
            ? ( posts.posts.length )
                ? posts.posts.map( (item, index) => {
                    return (
                      <div key={index} style={ { border : '1px solid #eee', padding : '10px 5px' } } >
                        <p>Title: { item.title }</p>
                        <p>{ item.body }</p>
                      </div>
                    )
                  } )
                : null

            : (
              <div>Please wait...</div>
            )
          
        }
      </div>

    </>
  )

}

export default App;
