import React, { useState } from 'react';
import "../../src/App.css"
import PlayerCard from './PlayerCard';
import { data } from '../helper/Data'

const CardContainer = () => {
    const [searchTerm, setSearchTerm] = useState('')
    //********** handleChange********/
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    //*********handleSubmit********/
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(searchTerm)
    }



    return (
        <div className='CardContainer'>

            <div className='search-bar' style={{ marginTop: "110px" }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search Player..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>


            </div>
            <div className="card-container">
                {data.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                ))}
            </div>



        </div>


    );
}

export default CardContainer;
