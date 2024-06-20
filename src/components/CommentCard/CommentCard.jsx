import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import * as usersAPI from '../../utilities/users-api.js';
import { formatTimeAgo } from "../../utilities/common.js";
import "./CommentCard.css"

export default function CommentCard({ commentData }) {
    const [commentUser, setCommentUser] = useState();

    useEffect(() => {
        const getUserData = async () => {
            const userData = await usersAPI.findByUserId(commentData.user);
            console.log(userData)
            setCommentUser(userData);
        };
        getUserData();
    }, [commentData]);

    return (
        <>
         { commentUser ?
            <>
            <div className="comments">
                <div className="display-picture">
                  <img src={`${commentUser.profilePicture.url}`} />
                </div>
                <div className="text">
                    <div>
                        <Link className="font-bold" to={`/profile/${commentUser.username}`}>@{commentUser.username}</Link>
                        <span className="text-sm"> {formatTimeAgo(commentData.createdAt)}</span>
                    </div>
                    <div className="content">{commentData.content}</div>
                </div>      
            </div>
        </>
        :
        'Loading...'
        }
        </>
    )
}

