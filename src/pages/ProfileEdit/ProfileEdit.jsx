import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api.js';
import BackButton from '../../components/BackButton/BackButton.jsx';

export default function ProfileEdit({ user }) {
  const [editForm, setEditForm] = useState({});
  const [editPicture, setEditPicture] = useState({})
  const [error, setError] = useState('');
//   const disable = (userData.password !== userData.confirm);

  useEffect(() => {
    const getAllUserData = async () => {
      const userData = await usersAPI.findByUserId(user._id);
      setEditForm({
        username: userData.username,
        email: userData.email,
        displayName: userData.displayName
        });
    }
    getAllUserData();
  }, [])

  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  };

//   async function handleProfilePicSubmit(evt) {
//     evt.preventDefault();

//     const formData = new FormData();
//     if (postDetails.files) {
//       formData.append('photos', postDetails.files);
//     }
//   }

  async function handleSubmit(evt) {
    try {
      await usersAPI.updateUser(editForm);
    } catch (error) {
      setError("Failed to update user");
      console.error('Error updating user', error.message);
    }
  };

  return (
    <div>
        <BackButton />
        <h2>Edit profile</h2>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="username">Username {"(handle)"}</label><br />
          <input type="text" name="username" value={editForm.username} onChange={() => handleChange} required /><br />
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            name="email"
            value={editForm.email}
            onChange={handleChange}
            required
          /><br />
          <label>Display Name</label><br />
          <input type="text" name="displayName" value={editForm.displayName} onChange={() => handleChange} required/><br />
          <button type="submit">Update profile</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}