import React from 'react'

const Trend = ({trend}) => {
  return (
    <div className='trend' >

        <span className="trend__category">
            {trend.category}
        </span>
        <div className="trend__title">
            {trend.title}
        </div>
        <span className="twend__tweetAmount">
            {trend.number}
        </span>
    </div>
  )
}

export default Trend