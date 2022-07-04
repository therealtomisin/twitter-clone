import {React, useState} from 'react'
import '../tweet.css'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';

const Tweet = ({tweet}) => {

const [isMytweet, setisMytweet] = useState(false)

  return (
    <div className='tweet' >
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
                    ...
                </div>
            </div>
            <div className="newTweet__content">
                {tweet.content}
            </div>
            <div className="tweet__bottomLayer">
                <span className="tweet__icons">
                    <ModeCommentIcon />
                </span>
                <span className="tweet__icons">
                    <RepeatIcon />
                </span>
                <span className="tweet__icons">
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
  )
}

export default Tweet