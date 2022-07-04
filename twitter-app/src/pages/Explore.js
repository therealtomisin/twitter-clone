import {React, useState} from 'react'
import '../explore.css'

const Explore = () => {

    const [trends, settrends] = useState([])

  return (
    <div className='explore' >
        <div className="explore__searchRegion">
            <input type="text" className="explore__searchInput" />
        </div>
        <div className="explore__trending">
            <h1 className="explore__trending__title">
                Trends for you
            </h1>
            <div className="explore__trends">
                {}
            </div>
        </div>
    </div>
    
  )
}

export default Explore