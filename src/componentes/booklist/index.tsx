import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import ItemBook from "../bookItem"
import style from './style.module.css'

type BookListProps = {
    books: Book[]
    onRemove: (id: string) => void
}

export default function BookList({ books, onRemove }: BookListProps): JSX.Element {

    const arrayBooks: Book[] = books

    return (
        <section className={`container ${style.container}`}>
            {arrayBooks.map((book, index) =>

                <ItemBook key={index} item={book} onRemove={onRemove} />
            )}

        </section>
    )
}
