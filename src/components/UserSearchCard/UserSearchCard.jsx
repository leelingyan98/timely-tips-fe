import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

export default function UserSearchCard({ userResult }) {
  return (
    <>
      <Link to={`/profile/${userResult.username}`}>
        <Card className="max-w-sm mb-5 mx-2">
          <div className="flex justify-start">
            <img className="w-16 h-16 mb-3 rounded-full shadow-lg" src={userResult.profilePicture.url}/>
            <div className="text-left ml-3">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">@{userResult.username}</h5>
              {userResult.displayName ?
                <span className="text-sm text-gray-500 dark:text-gray-400">{userResult.displayName}</span>
                : null
              }
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
}
