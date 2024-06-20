import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api.js';
import BackButton from '../../components/BackButton/BackButton.jsx';
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm.jsx';

export default function ProfileEdit({ user }) {
  const [userData, setUserData] = useState();
  const [editPicture, setEditPicture] = useState({})
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllUserData = async () => {
      const userData = await usersAPI.findByUserId(user._id);
      setUserData({
        username: userData.username,
        email: userData.email,
        displayName: userData.displayName
      });
    }
    getAllUserData();
  }, [])

  async function handleProfilePicSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", editPicture);

    try {
      // await usersAPI.updateProfilePicture(formData);
      setEditPicture(formData);
      document.getElementById('profile-picture').value = '';
    } catch (error) {
      setError("Failed to update profile picture");
      console.error('Error update profile picture:', error.message);
    }

  }

  return (
    <div>
      <BackButton />
      <h2>Edit profile</h2>
      <div className="form-container">
        {userData ?
          <>
            <form autoComplete="off" onSubmit={handleProfilePicSubmit}>
              <label htmlFor="profilepicture">Upload a photo</label>
              <input
                type="file"
                id="profilepicture"
                name="profilepicture"
                accept="image/*"
                onChange={(e) => setEditPicture(e.target.files[0])}
              />
            </form>
            <ProfileEditForm userData={userData} />
          </>
          : null
        }
      </div>
    </div>
  );
}