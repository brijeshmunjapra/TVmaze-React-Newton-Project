import React, { useState } from 'react'
import Actor from './Actors';
import Show from './Show';
const Search = () => {

    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    return (
        <>
            <section className=" mb-1">
                <div className="radiobuttonsdiv">

                    
                        <div className='radiobuttons'>
                            <input type="radio" name="movie" onChange={() => setActorFilter()}/> 
                            <p className='radiotext ms-2 mt-3'>By Actor</p>
                            <input type="radio" name="movie" onChange={() => setShowFilter()} className="ms-3" /> 
                            <p className='radiotext ms-2 mt-3' >By Show</p>
                        </div>
                    
                </div>
            </section>

            {actor ? <Actor /> : ""}
            {show ? <Show /> : ""}
        </>
    )
}

export default Search