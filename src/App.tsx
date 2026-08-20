import { useEffect, useState, type JSX } from "react"

import type { Book } from "./types"
import BookList from "./componentes/booklist"
import axios from "axios"
import FormBook from "./componentes/bookForm"
import style from './style.module.css'










const URL_LINK: string = "https://crudcrud.com/api/0e0f3413c9204276a5fa70cd5ae2acc3/livro"

function App(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([])

  const handlerUpdateStatus = async (id: string) => {
    const bookToUpdate = books.find((item) => item._id === id)
    if (!bookToUpdate) return;

    try {
      await axios.put<Book>(`${URL_LINK}/${id}`, {
        title: bookToUpdate.title,
        author: bookToUpdate.author,
        status: "Concluido"
      })
      setBooks((prev) =>
        prev.map((item) => item._id === id ? { ...item, status: "Concluido" } : item));
    } catch (erro) {
      console.error("erro na requisição", erro);
    }
  }

  useEffect(() => {
    async function getBooks() {
      try {
        const res = await axios.get<Book[]>(URL_LINK)
        setBooks(res.data)
      } catch (error) {
        console.error('ERRO AO CHAMAR API', error);
      }
    }
    getBooks()
  }, [])

  const addApi = async (book: Book) => {
    try {
      const res = await axios.post<Book>(URL_LINK, book)
      setBooks((prev) => [...prev, res.data])
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
    }
  }

  const handleRemove = async (id: string) => {
    try {
      await axios.delete(`${URL_LINK}/${id}`)
      setBooks((prev) => prev.filter((item) => item._id !== id))
    } catch (error) {
      console.error('erro ao deletar livro', error);
    }
  }

  return (
    <div className={style.div}>
      <FormBook onCadastrar={addApi} />
      <BookList concluir={handlerUpdateStatus} books={books} onRemove={handleRemove} />
    </div>
  )
}

export default App












