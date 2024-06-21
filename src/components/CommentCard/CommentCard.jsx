import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as usersAPI from '../../utilities/users-api.js';
import { formatTimeAgo } from "../../utilities/common.js";
import "./CommentCard.css";
import MoreActions from "../MoreActions/MoreActions.jsx";
import UpdateContentForm from "../UpdateContentForm/UpdateContentForm.jsx";

export default function CommentCard({ user, commentData, refresh }) {
    const [commentUser, setCommentUser] = useState();
    const [currentComment, setCurrentComment] = useState(commentData);
    const [editMode, setEditMode] = useState(false);
    const [validateActions, setValidateActions] = useState({
        liked: false,
        owner: false,
    });

    useEffect(() => {
        const getUserData = async () => {
            const userData = await usersAPI.findByUserId(commentData.user);
            setCommentUser(userData);
        };
        getUserData();

        // Define comment actions
        const commentOwner = user._id === commentData.user;

        setValidateActions({
            ...validateActions,
            owner: commentOwner,
        });
    }, [commentData]);

    return (
        <>
            {commentUser ?
                <>
                    <div className="comments">
                        <div className="flex">
                            <div className="mr-2">
                                <img className="w-12 h-12 rounded-full" src={`${commentUser.profilePicture.url}`} />
                            </div>
                            <div>
                                <div className="top-row">
                                    <div>
                                        <Link className="font-bold" to={`/profile/${commentUser.username}`}>@{commentUser.username}</Link>
                                        <span className="text-sm"> {formatTimeAgo(commentData.createdAt)}</span>
                                    </div>
                                </div>
                                {editMode ?
                                    <UpdateContentForm
                                        contentData={commentData} type="comment"
                                        setEditMode={setEditMode} setContent={setCurrentComment}
                                    />
                                    :
                                    <p className="content">
                                        {currentComment.content}
                                    </p>
                                }
                            </div>
                        </div>
                        
                        <div className="flex justify-self-end self-start">
                            <MoreActions
                                contentData={commentData} setContent={setCurrentComment}
                                type="comment" validateActions={validateActions}
                                editMode={editMode} setEditMode={setEditMode}
                                refresh={refresh}
                            />
                        </div>
                    </div>
                </>
                :
                'Loading...'
            }
        </>
    )
}

