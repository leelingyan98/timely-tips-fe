import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import * as usersAPI from '../../utilities/users-api.js';

export default function CommentCard({ commentData }) {
    const [commentUser, setCommentUser] = useState({});

    useEffect(() => {
        const getUserData = async () => {
            const userData = await usersAPI.findByUserId(commentData.user);
            console.log(userData)
            setCommentUser(userData);
        };
        getUserData();
    }, []);

    return (
        <>
            <div className="comments">
                <div><Link to={`/profile/${commentUser.username}`}>@{commentUser.username}</Link> {commentData.createdAt}</div>
                <div className="content">{commentData.content}</div>
            </div>
        </>
    )
}

