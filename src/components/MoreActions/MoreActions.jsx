import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

export default function MoreActions({ validateActions, type, objId, editMode, setEditMode }) {
    return (
        <>
            {validateActions.owner ?
                <>
                    <span className="pl-1" onClick={(e) => setEditMode(!editMode)}>
                        <PencilSquareIcon className="h-6 w-6 text-black hover:text-gray-500" />
                    </span>
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

