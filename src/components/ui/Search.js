import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [input, setInput] = useState('')

    const onChange = (q) => {
        setInput(q)
        getQuery(q)
    }
    return (
              <section className="search">
           <form>
               <input 
                    type='text'
                    className='form-control'
                    placeholder='Search your favourite character' 
                    value={ input }
                    onChange = { (e) => onChange(e.target.value)}
                    autoFocus
               />
           </form>
       </section>
    )
}

export default Search
