import React, { useEffect, useState } from 'react'

export default function Todos() {

    const [list, setList] = useState([ 'Apple', 'Orange', 'Mango' ]);
    // const [list, setList] = useState([ 'Apple' ]);

    const remove = ( index ) => {
        if( list[index] ){
            list.splice( index, 1 )
        }
        setList([...list])
    }

    // called only once during first render
    useEffect(() => {
        console.log(`Todos Component : First Render`)
    }, [  ] );

    // called on every re-render 
    useEffect(() => {
        console.log(`Todos Component : Renders Everytime`)
    });
    
    // called when the list changes
    useEffect(() => {
        console.log(`Todos Component : Renders when list state gets updated`)
    }, [ list ] );

    return (
        <div>
            <input type="text" onBlur={ ( e ) => ( e.target.value !== '' )? setList([...list, e.target.value ]) : ''  } defaultValue="" />

            {
                ( list.length )
                    ? list.map( ( item, index ) => {
                        return (
                            <TodoItem key={index} index={index} name={item} remove={remove} />
                        )
                    } )
                    : null
            }
        </div>
    )
}

export function TodoItem( props ) {
   
    // gets called only on component mount and not on unmount
    useEffect(() => {
        console.log(`TodoItem Component, useEffect with no second parameter as empty array, `)

        // gets called when component is removed
        return () => {
            console.log(`Running cleanup...`)
        }
    }, [  ] );

    return (
        <li>{ props.name } - <button type="button" onClick={ () => props.remove( props.index ) } >Remove</button> </li>
    )
}
