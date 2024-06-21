import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { removePost } from '../../utilities/posts-api';
import { removeComment } from '../../utilities/comments-api';
import { useNavigate } from "react-router";

export default function MoreActions(props) {
    const {
        contentData,
        type, validateActions,
        editMode, setEditMode,
    } = props;

    const navigate = useNavigate();

    async function handleDelete(evt) {
        try {
            if (type === "post") {
                await removePost(contentData._id);
            } else if (type === "comment") {
                await removeComment(contentData._id);
            }
            navigate(0);
        } catch (error) {
            console.error('Error updating:', error.message);
        }
    }
    

    return (
        <>
            {validateActions.owner ?
                <>
                    <span className="pl-1 cursor-pointer" onClick={() => setEditMode(!editMode)}>
                        <PencilSquareIcon className="h-6 w-6 text-black hover:text-gray-500" />
                    </span>
                    <span className="pl-2 cursor-pointer" onClick={() => handleDelete(type)}>
                        <TrashIcon className="h-6 w-6 text-secondarydark hover:text-secondary" />
                    </span>
                </>
                :
                null
            }
        </>
    )
}

