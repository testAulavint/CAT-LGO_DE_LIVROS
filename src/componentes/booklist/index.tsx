import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import ItemBook from "../bookItem"
import style from './style.module.css'


type BookListProps = {
    books: Book[]
    onRemove: (id: string) => void
    concluir: (id: string) => void
}

export default function BookList({ books, onRemove, concluir }: BookListProps): JSX.Element {
    return (
        <section className={style.container}>
            {books.map((book, index) => (
                <ItemBook key={book._id || index} item={book} onRemove={onRemove} concluir={concluir} />
            ))}
        </section>
    )
}
