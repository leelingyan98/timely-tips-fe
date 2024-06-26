import { useState } from 'react';
import * as usersAPI from '../../utilities/users-api.js';
import { Label, TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { UserCircleIcon } from "@heroicons/react/24/solid"

export default function ProfileEditForm({ userData }) {
  const [editForm, setEditForm] = useState({
    username: userData.username,
    email: userData.email,
    displayName: userData.displayName || " ",
  });
  const [error, setError] = useState('');

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  async function handleSubmit(evt) {
    try {
      evt.preventDefault();

      await usersAPI.updateUserDetails(userData._id, editForm);
      setError("Profile updated!");
    } catch (error) {
      setError("Failed to update profile: Username or email is taken.");
    }
  };

  return (
    <div>
      <form className="mt-3" autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="username" value="Username (handle) *" />
        <TextInput className="mb-2"
          id="username" type="username" name="username" addon="@"
          value={editForm.username} onChange={handleChange}
          maxLength={20}
          required
        />
        <Label htmlFor="email" value="Email address *" />
        <TextInput className="mb-2"
          id="email" type="email" name="email" icon={HiMail}
          value={editForm.email} onChange={handleChange}
          required
        />
        <Label htmlFor="displayName" value="Display Name" />
        <TextInput className="mb-2"
          id="displayName" type="displayName" name="displayName" icon={UserCircleIcon}
          value={editForm.displayName} onChange={handleChange}
        />
        <Button type="submit" className="text-primary mx-auto md:mx-0">Update details</Button>
      </form>
      <p className="error-message">{error}</p>
    </div>
  );
}