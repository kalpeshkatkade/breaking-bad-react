import React from 'react'
import CharacterItem from './CharacterItem'
import SpinningLoader from '../ui/Loader'


const CharacterGrid = ({items, isloading}) => {
    return (isloading) ? 
    ( <SpinningLoader /> ) : 
    ( <section className="cards">
            {items.map(item => (
                <CharacterItem key={ item.char_id } item={ item }></CharacterItem>
            ))}
        </section> )  
}

export default CharacterGrid
