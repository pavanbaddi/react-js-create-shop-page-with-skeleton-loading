import React, { useEffect, useState } from 'react'

export default function usePosts(  ){
    const [ posts, setPosts ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( false )
    const [ count, setCount ] = useState( 0 )

    useEffect( ( ) => {
        setCount(posts.length)
    }, [ posts ] )

    const fetchPosts = async( ) => {
        setIsLoading(true)

        let url = `http://jsonplaceholder.typicode.com/photos`
        let res = await fetch( url )
        res = await res.json()

        if( res.length ){
            setPosts([...res])
        }

        setIsLoading(false)
    }

    return {
        posts,
        fetchPosts,
        count,
        isLoading,
        setIsLoading,
    }
}