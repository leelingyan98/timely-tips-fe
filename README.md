# Timely Tips
<img src="https://i.imgur.com/CTxMbKR.jpeg">

Timely Tips is a social media app to connect the foreign worker community in Singapore through sharing daily life hacks. Working in a foreign country on a long-term basis can be tough due to cultural and lifestyle differences.

[Launch the app!](https://timely-tips.vercel.app/)

## Technologies used
- MERN stack (MongoDB and Mongoose, Express, ReactJS Vite, Node.js)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Flowbite](https://flowbite.com/) and [Flowbite-React](https://flowbite-react.com/) for components built on Tailwind
- [heroicons](https://heroicons.com/) for icons
- [date-fns](https://date-fns.org/) to format post and comment creation time-ago
- Bcrypt and jsonwebtoken for password-hashing
- [Cloudinary](https://cloudinary.com/) for image hosting
- [Multer](https://www.npmjs.com/package/multer) for image upload middleware
- [Axios](https://axios-http.com/) for sending `multipart/form-data` API requests

## Features
Users can perform the following actions
- Post a tip with a photo
- Like, bookmark and comment on tips
- Search and follow other users
- Manage their own tips (update, delete)
- Manage their own profile (update details, profile picture)

## App Usage
Users can sign up with their email address, password and set a unique username. They can log in with their email address and password later.

<img src="https://i.imgur.com/3L7VNr7.jpeg" width="400" />
<br><br>
Upon sign up or log in, users will arrive at the home page.

1. Navigation to see bookmarks
2. User menu to view or edit profile or sign out
3. Form for you to share your tip
4. Toggle between recent tips and people that you follow
5. Like or bookmark a post. If you are the post owner, edit and delete actions will be available.

<img src="https://i.imgur.com/Se6msuF.jpeg" width="400" />

Click on the "trash" icon to delete the post.

Clicking the "edit" icon will toggle the post edit options. If there is a photo on your post, you are given an option to remove the photo. **NOTE: This cannot be undone!**

You can also click on the "Cancel" button to stop editing.

<img src="https://i.imgur.com/s6fu9qM.jpeg" width="400" />

On the timeline view, users can click (1) to view the post in detail alongside the comments. The comment count is shown on (2).

<img src="https://i.imgur.com/Uj9yUsz.jpeg" width="400" />

On the single post view, there is a button to return to the previous page. Users can write their comments here and manage their own comments.

<img src="https://i.imgur.com/frjHkjs.jpeg" width="400" />

On the profile view page, users can follow other users. If it is their own profile, the "Edit profile" button will display.

<img src="https://i.imgur.com/bDNd7Sm.jpeg" width="400" />

While editing their profile, if there is a profile picture, there will be an option for the user to remove it.
<img src="https://i.imgur.com/k8KyBwU.jpeg" width="400" />

## Future improvements
- Auto-refresh the feed and post when a post or comment is created or deleted.
- Implement Firebase as an authentication for users to log in with Google or Apple
- View liked posts
- Allow users to upload or update a photo on an existing post
- Display (edited) if a post has been edited
- Prompt window to warn that the deletion is irreversible and to confirm that the user wants to delete the post
- Display errors when attempting to update email or username
- Allow users to delete comments from their own post
- Allow users to handle their followers (block/remove)
- Allow the user to change their passwords and recover their accounts
- Allow the user to delete their accounts
- Timeline to handle infinite loading in steps
- Admin dashboard to manage posts
