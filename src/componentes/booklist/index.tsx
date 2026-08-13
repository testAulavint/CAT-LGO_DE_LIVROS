import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import ItemBook from "../bookItem"

type BookListProps = {
    books: Book[]
    onRemove: (id: number) => void
}

export default function BookList({ books, onRemove }: BookListProps): JSX.Element {

    const arrayBooks: Book[] = books

    return (
        <section className={`${Style.con}`}>
            {arrayBooks.map((book, index) =>

                <ItemBook key={index} item={book} onRemove={onRemove} />
            )}

        </section>
    )
}
