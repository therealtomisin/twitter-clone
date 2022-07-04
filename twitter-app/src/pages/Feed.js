import {React, useState} from 'react'
import '../feed.css'
import Tweet from '../components/Tweet'

const Feed = () => {

    const [value, setvalue] = useState('')
    const [tweets, settweets] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        settweets([...tweets, {content: value, id: Math.random()}])
        setvalue('')
        console.log('done')
    }

  return (
    <div className='feed'>

        <div className="feed__newTweet">
            <div className="newTweet__avi">

            </div>
            <form action="" className="newTweet__form" onSubmit={handleSubmit}>

                <input type="text" className="newTweet__content" placeholder="What's on your mind?" value={value} onChange={(e)=>{setvalue(e.target.value)}} />
                <div className="newTweet__buttons">
                    <button type='submit' className="newTweet__submit">
                        Submit
                    </button>
                </div>

            </form>
        </div>

        <div className="feed__tweets">
            {tweets.map((tweet)=>(
                <li key={tweet.id} className='feed__tweet'>
                    <Tweet tweet = {tweet} />
                </li>
            ))}
        </div>

    </div>
  )
}

export default Feed