import {React, useState} from 'react'
import '../explore.css'
import Trend from '../components/Trend'

const Explore = () => {

    const [trends, settrends] = useState([
        {
            title: "What's going on?",
            category: 'Music',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "1 Eth?",
            category: 'Trending in Nigeria',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "Mercy Johnson",
            category: 'Lifestyle',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "Airdrops",
            category: 'Crypto',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "Traversy",
            category: 'Tech',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "Bloomberg",
            category: 'Finances',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "Berger too Ajah",
            category: 'Trending in Nigeria',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        },
        {
            title: "lgbtq",
            category: 'news',
            number: `${Math.floor(Math.random() * 100)}k Tweets.`
        }
    ])

  return (
    <div className='explore' >
        <div className="explore__searchRegion">
            <input type="text" placeholder='Search' className="explore__searchInput" />
        </div>
        <div className="explore__trending">
            <h1 className="explore__trending__title">
                Trends for you
            </h1>
            <div className="explore__trends">
                {trends.map((trend)=>(
                    <li key={Math.random()}>
                        <Trend trend = {trend} />
                    </li>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Explore