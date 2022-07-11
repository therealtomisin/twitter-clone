import {React, useState, useEffect} from 'react'
import '../tweet.css'
import ellipses from '../images/ellipses.svg'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';


const Tweet = ({tweet, retweet, tweets, settweets}) => {
    

const [isMytweet, setisMytweet] = useState(false)
const [isLiked, setisLiked] = useState(false)

// const setLike = (tweet, id) => {
//         // setisLiked(!isLiked)
//         like(tweet, id)
//         console.log('liked')
// }

const like = (tweet, id, tweets) => {
    // console.log('called')
    if (tweet.isLiked) {
        tweets.forEach(tweet => {
            if (tweet.id === id) {
                tweet.isLiked = !tweet.isLiked
                setisLiked(!isLiked)
            }
        });
    } else {
        // tweets.forEach((tweet)=>{
            //     if (id === tweet.id) {
                //         tweet.isLiked = !tweet.isLiked
                //     }
                // })
                // console.log(tweet.isLiked)
                console.log('idk what to put here')
                tweets.forEach(tweet => {
                    if (tweet.id === id) {
                        tweet.isLiked = !tweet.isLiked
                        setisLiked(!isLiked)
                    }
                });
                // tweet.isLiked =  !tweet.isLiked
                // setisLiked(!isLiked)
    }
}

const setLike = (tweet) => {
  tweet.isLiked ? setisLiked(true) : setisLiked(false)
}

// setLike(tweet)

  return (
    <div className='tweet' >

        <div className="tweet__action">
            {tweet.isRetweet && 'Retweeted by you.'}
        </div>
        <div className="tweet__container"> 
        
                <div className="tweet__avi">

                </div>
                <div className="tweet__components">
                    <div className="tweet__topLayer">
                        <div className="tweet__names">
                            <span className="tweet__displayname">
                                30+
                            </span>
                            <span className="tweet__username">
                                @tomiszn
                            </span>
                            <span className="tweet__timeStamp">
                                1h
                            </span>
                        </div>
                        <div className="tweet__options">
                            <img className='tweet__ellipses' src={ellipses} alt="" />
                        </div>
                    </div>
                    <div className="tweet__content">
                        {tweet.content}
                    </div>
                    <div className="tweet__bottomLayer">
                        <span className="tweet__icons">
                            <ModeCommentIcon />
                        </span>
                        <span className="tweet__icons" onClick={()=>retweet(tweet)}>
                            <RepeatIcon />
                        </span>
                        <span className={`tweet__icons ${tweet.isLiked? 'liked': ''}`}  onClick={()=>like(tweet, tweet.id, tweets)}>
                            <FavoriteIcon />
                        </span>
                        <span className="tweet__icons">
                            <IosShareIcon />
                        </span>
                        {
                            isMytweet && 
                            
                            <span className="tweet__icons">

                            </span>
                        }
                        
                    </div>
                    </div>
        </div>
    </div>
  )
}

export default Tweet