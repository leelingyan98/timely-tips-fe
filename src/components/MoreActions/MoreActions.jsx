import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

export default function MoreActions({ validateActions, postId }) {
    return (
        <>
            {validateActions.owner ?
                <>
                    <Link to={`/post/${postId}/edit`} className="pl-1">
                        <PencilSquareIcon className="h-6 w-6 text-black hover:text-gray-500" />
                    </Link>
                    <span className="pl-2">
                        <TrashIcon className="h-6 w-6 text-secondarydark hover:text-secondary" />
                    </span>
                </>
                
                :
                null
            }
        </>
    )
}

