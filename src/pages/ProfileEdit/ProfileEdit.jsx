import { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api.js';
import BackButton from '../../components/BackButton/BackButton.jsx';
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm.jsx';
import { Button, FileInput } from "flowbite-react";

export default function ProfileEdit({ user }) {
  const [userData, setUserData] = useState();
  const [editPicture, setEditPicture] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllUserData = async () => {
      const userData = await usersAPI.findByUserId(user._id);
      setUserData(userData);
    }
    getAllUserData();
  }, []);

  function handleChange(evt) {
    setEditPicture({files: evt.target.files[0]});
  }

  async function handleProfilePicSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", editPicture.files);

    try {
      await usersAPI.updateUserPicture(user._id, formData);
      document.getElementById('profilepicture').value = '';
      setError("Profile picture updated! It will take around 1 minute to reflect.");
    } catch (error) {
      setError("Failed to update profile picture");
      console.error('Error update profile picture:', error.message);
    }
  }

  async function handleRemoveProfilePicture() {
    try {
        await usersAPI.updateUserRemovePicture(user._id);
        setError("Profile picture removed!");
    } catch (error) {
        setError("Failed to delete photo");
        console.error('Error deleting photo:', error.message);
    }
  }

  return (
    <div>
      <BackButton />
      <h2>Edit profile</h2>
      <div className="form-container">
        {userData ?
          <>
            <div className="flex flex-col items-center md:flex-row w-full md:justify-around p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="w-3/5 flex flex-col justify-around items-center">
                <img className="w-24 h-24 rounded-full" src={user.profilePicture.url} />
                <p className="mt-5 text-center">It will take around 1 minute to update.</p>
                <form autoComplete="off" onSubmit={handleProfilePicSubmit}>
                  <FileInput
                    type="file"
                    id="profilepicture"
                    name="profilepicture"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                  <div className="flex justify-center mt-5">
                    { user.profilePicture.public_id !== "" ?
                    <Button onClick={handleRemoveProfilePicture} className="mx-2 text-secondary bg-secondarylight hover:border-secondary">Remove</Button>
                    :
                    null
                    }
                    <Button type="submit" className="mx-2 text-primary">Update</Button>
                  </div>
                </form>
                <p className="error-message">{error}</p>
              </div>
              <ProfileEditForm userData={userData} />
            </div>
          </>
          : null
        }
      </div>
    </div>
  );
}
