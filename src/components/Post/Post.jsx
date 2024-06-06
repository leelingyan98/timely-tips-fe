import { useState } from 'react'
import './Post.css'

export default function Post() {
  return (
    <>
      <div className="post-container">
        <div className="top-row">
          <div className="post-creator">
            <div className="display-picture"></div>
            <div className="post-creator-name">
              <span className="display-name">Display name</span>
              <span className="handle">@handle</span>
            </div>
          </div>
          <div className="actions">
            <button>xx Like</button>
            <button>Save</button>
            <button>...</button>
          </div>
        </div>
        <p className="content">Post text here</p>
        <div className="photo">Post image here</div>
        <div className="bottom-row">
          <button>View Post</button>
          <div className="comments">
            xxx comments
          </div>
        </div>
      </div>
    </>
  )
}