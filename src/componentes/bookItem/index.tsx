import type { JSX } from "react/jsx-runtime";
import type { Book } from "../../types";

type ItemBookProps = {
    item: Book
    onRemove: (id: number) => void
}

export default function ItemBook({ item, onRemove }: ItemBookProps): JSX.Element {

    return (
        <div>
            <p>Nome livro: {item.name}</p>
            <p>Descrição: {item.description} </p>
            <p>data lançamento {item.date}</p>
            <p>{item.id}</p>
            <button onClick={() => onRemove(item.id)}>Remover</button>
        </div>
    )
}