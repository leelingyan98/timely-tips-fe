import { useNavigate } from 'react-router'

export default function BackButton() {
    const navigate = useNavigate();

    // Navigate back to previous page
    function previousPage() {
        navigate(-1);
    };

    return (
        <>
            <button onClick={previousPage}>Go back</button>
        </>
    )
}