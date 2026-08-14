import type { JSX } from "react/jsx-runtime";
import type { Book } from "../../types";

type ItemBookProps = {
    item: Book
    onRemove: (id: string) => void
}

export default function ItemBook({ item, onRemove }: ItemBookProps): JSX.Element {

    return (
        <div>
            <p> <strong>Nome do livro:</strong> {item.name}</p>
            <p> <strong>Descrição:</strong> {item.description} </p>
            <p><strong>data lançamento: </strong>  {item.date}</p>

            <button onClick={() => onRemove(item._id)}>Remover</button>
        </div>
    )
}