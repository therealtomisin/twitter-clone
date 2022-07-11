import {React, useState} from 'react'
import '../feed.css'
import Tweet from '../components/Tweet'
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import MoodIcon from '@mui/icons-material/Mood';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const Feed = () => {

    const [value, setvalue] = useState('')
    const [tweets, settweets] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        settweets([...tweets, {
                                content: value,
                                id: Math.random(),
                                retweeted: false,
                                isRetweet: false,
                                isLiked: false
                            }])
        setvalue('')
        console.log('done')
    }

    const retweet = (theTweet) => {
        if (theTweet.retweeted){
            console.log('atweet')
            tweets.filter((tweet)=>{
                return (tweet.id !== theTweet.id)
            })
        } else {
            console.log('retweeted')
            let newTweet = {content: theTweet.content, id: Math.random(), isRetweet: true, retweeted: true, isLiked: theTweet.isLiked}
            settweets([...tweets, newTweet])
            theTweet.retweeted = true
            // console.log(theTweet.isLiked)
            // console.log(newTweet.isLiked)
            console.log(tweets)
        }
        // const newTweet = tweet
    }


    // const like = (tweet, id) => {
    //     // console.log('called')
    //     if (tweet.isLiked) {
    //         tweet.isLiked = !tweet.isLiked
    //     } else {
    //         // tweets.forEach((tweet)=>{
    //         //     if (id === tweet.id) {
    //         //         tweet.isLiked = !tweet.isLiked
    //         //     }
    //         // })
    //         // console.log(tweet.isLiked)
    //         console.log('idk what to put here')
    //         tweet.isLiked =  !tweet.isLiked
    //     }
    // }

     // const like = (tweet) => {
    //     if (tweet.isLiked){
    //         return
    //     } else {
    //         console.log('liked')
    //         tweet.isLiked = !tweet.isLiked
    //         console.log(tweet.isLiked)
    //     }
    // }

  return (
    <div className='feed'>

        <div className="feed__newTweet">
            <div className="newTweet__avi">

            </div>
            <form action="" className="newTweet__form" onSubmit={handleSubmit}>

                <input type="text" className="newTweet__content" placeholder="What's happening?" value={value} onChange={(e)=>{setvalue(e.target.value)}} />
                <div className="newTweet__buttons">
                    <div className="newTweet__actions">
                        <CollectionsIcon />
                        <GifBoxIcon />
                        <PollIcon />
                        <MoodIcon />
                        <ScheduleSendIcon />
                        <AddLocationIcon />
                    </div>
                    <button type='submit' className="newTweet__submit">
                        Tweet
                    </button>
                </div>

            </form>
        </div>

        <div className="feed__tweets">
            {tweets.slice(0).reverse().map((tweet)=>(
                <li key={tweet.id} className='feed__tweet'>
                    <Tweet retweet = {retweet} tweet = {tweet} settweets={settweets} tweets={tweets} />
                </li>
            ))}
        </div>

    </div>
  )
}

export default Feed