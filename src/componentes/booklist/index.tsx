import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import ItemBook from "../bookItem"
import style from './style.module.css'


type BookListProps = {
    editar: boolean
    setEditar: React.Dispatch<React.SetStateAction<boolean>>
    books: Book[]
    onRemove: (id: string) => void
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

export default function BookList({ books, onRemove, setBooks, editar, setEditar }: BookListProps): JSX.Element {

    const arrayBooks: Book[] = books

    return (<>




        <section className={` ${style.container}`}>
            {arrayBooks.map((book, index) =>

                <ItemBook setEditar={setEditar} editar={editar} setBooks={setBooks} key={index} item={book} onRemove={onRemove} />
            )}

        </section>
    </>
    )
}
