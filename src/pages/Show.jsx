import { useParams } from "react-router-dom";

const Show = ({ books }) => {

    const { id } = useParams()
    const book = books.find(b => b._id === id)

    return (
        <>
        <p>{book.title}</p>
        </>
    )
}

export default Show;