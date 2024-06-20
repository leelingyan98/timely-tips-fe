import { Link } from "react-router-dom";
import { EllipsisHorizontalCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline"

export default function MoreActions({ validateActions, postId }) {
    return (
        <>
            {validateActions.owner ?
                <Link to={`/post/${postId}/edit`} className="pl-1">
                    <PencilSquareIcon className="h-6 w-6" />
                </Link>
                :
                null
            }
        </>
    )
}

