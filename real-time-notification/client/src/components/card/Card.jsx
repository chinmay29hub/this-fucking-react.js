import React, { useState } from 'react'
import "./card.css"
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";

const Card = ({post, socket, user}) => {

    const [liked , setLiked] = useState(false)

    const handleNotification = (type) => {
        
        setLiked(true)
        socket.emit("sendNotification", {
            senderName : user,
            receiverName : post.username,
            type,
        })
    }

  return (
    <div className='card'>
        <div className='info'>
            <img className='userImg' src={post.userImg} alt='' />
            <span>
                {post.fullname}
            </span>
        </div>
        <img className='postImg' src={post.postImg} alt='' />
        <div className='interaction'>
            {
                liked ? (
                    <img className='cardIcon' src={HeartFilled} alt='' />
                ) : (
                    <img className='cardIcon' src={Heart} alt='' onClick={() => handleNotification(1)} />
                )
            }
            <img className='cardIcon' src={Comment} alt='' onClick={() => handleNotification(2)} />
            <img className='cardIcon' src={Share} alt='' onClick={() => handleNotification(3)} />
            <img className='cardIcon infoIcon' src={Info} alt='' />

        </div>
    </div>
  )
}

export default Card