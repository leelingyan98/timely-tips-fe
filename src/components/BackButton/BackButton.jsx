import { useNavigate } from 'react-router';
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function BackButton() {
    const navigate = useNavigate();

    // Navigate back to previous page
    function previousPage() {
        navigate(-1);
    };

    return (
        <>
            <Button className="text-primary">
                <HiOutlineArrowLeft className="h-5 w-5" onClick={previousPage}/>
            </Button>
            {/* <button onClick={previousPage}>Go back</button> */}
        </>
    )
}