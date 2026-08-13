import { useState } from "react"
import { bookMokados } from "./dadosMokados"
import type { Book } from "./types"
import BookList from "./componentes/booklist"


function App() {
  const [books, setBooks] = useState<Book[]>(bookMokados)

  const handleRemove = (id: number) => {
    setBooks((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      <BookList books={books} onRemove={handleRemove} />
    </>
  )
}

export default App
