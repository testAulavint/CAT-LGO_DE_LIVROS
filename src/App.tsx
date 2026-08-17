import { useEffect, useState, type JSX } from "react"

import type { Book } from "./types"
import BookList from "./componentes/booklist"
import axios from "axios"
import FormBook from "./componentes/bookForm"
import style from './style.module.css'










const URL_LINK: string = "https://crudcrud.com/api/3ff8cafde0094b96851117131e7e964a/livro"

function App(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([])










  useEffect(() => {

    async function getBooks() {
      try {
        const res = await axios.get<Book[]>(URL_LINK)
        setBooks(res.data)

      } catch (error) {
        console.error('ERRO AO CHAMAR API', error);

      }
    }
    getBooks() // 🟢 Executa a função antes de fechar o useEffect

  }
    , [])

  const addApi = async (book: Book) => {
    try {
      // 🟢 Envia o 'book' e recebe o item cadastrado com ID em 'res.data'
      const res = await axios.post<Book>(URL_LINK, book)

      // 🟢 Adiciona res.data ao estado
      setBooks((prev) => [...prev, res.data])


    }
    catch (error) {
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
    <>
      <div className={style.div}>

        <FormBook onCadastrar={addApi} />
        <BookList setBooks={setBooks} books={books} onRemove={handleRemove} />
      </div>
    </>
  )
}

export default App












