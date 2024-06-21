import React, { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import { updateComment } from '../../utilities/comments-api';
import { Button, Textarea } from "flowbite-react";

export default function UpdateContentForm({ contentData, type, setEditMode, currentPost, setContent }) {
    const [formDetails, setFormDetails] = useState({ content: contentData.content });
    const [error, setError] = useState("");

    function handleChange(evt) {
        setFormDetails({
            ...formDetails,
            [evt.target.name]: evt.target.value,
        });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            if (type === "post") {
                await postsAPI.updatePostContent(contentData._id, formDetails);
            } else if (type === "comment") {
                await updateComment(contentData._id, formDetails);
            }
            setContent({ ...contentData, content: formDetails.content })
            setEditMode(false);
        } catch (error) {
            setError("Failed to update");
            console.error('Error updating:', error.message);
        }
    }

    async function handleRemovePhoto(evt) {
        evt.preventDefault();
        try {
            const post = await postsAPI.removePostPhoto(contentData._id);
            setContent({ ...contentData, photo: { public_id: null, url: null } })
        } catch (error) {
            setError("Failed to delete photo");
            console.error('Error deleting photo:', error.message);
        }
    }

    return (
        <div className="form-container my-5">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Textarea
                    id="content" name="content" className="w-full"
                    placeholder="Start writing your tip here! i.e. Here are 5 ways you can save money:"
                    rows={4} cols={100} maxLength={300}
                    value={formDetails.content} onChange={handleChange}
                    required
                />
                <div className="bottom-row mt-2 justify-end">
                    <p>{formDetails.content.length}/300 characters</p>
                    <Button
                        className="mx-3 bg-secondarylight text-secondary border-secondary hover:border-secondarydark"
                        onClick={() => setEditMode(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="text-primary border-primary hover:border-primarydark"
                        type="submit"
                    >
                        Update
                    </Button>
                </div>
            </form>
            {type === "post" ?
                <>
                    {currentPost.photo ?
                        <Button className="text-primary" onClick={handleRemovePhoto}>Delete photo</Button>
                        : null
                    }
                </>
                : null
            }

            {error && <p className="error-message">{error}</p>}
        </div>
    )
}