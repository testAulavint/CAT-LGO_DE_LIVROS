import React, { useEffect, useState } from "react"
import { bookMokados } from "./dadosMokados"
import type { Book } from "./types"
import BookList from "./componentes/booklist"
import axios from "axios"
import FormBook from "./componentes/bookForm"

const URL_LINK: string = "https://crudcrud.com/api/81dbc3ae67a346f580d295425a31949a/livro"

function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [nome, setNome] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {

    async function getBooks() {
      try {
        const res = await axios.get<Book[]>(URL_LINK)
        setBooks(res.data)
      } catch (error) {

      }
    }
    getBooks() // 🟢 Executa a função antes de fechar o useEffect

  }
    , [])





  const handlerSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const book: Book = {
      name: nome,
      description: descricao,
      date: date
    }
    try {
      // 🟢 Envia o 'book' e recebe o item cadastrado com ID em 'res.data'
      const res = await axios.post(URL_LINK, book)

      // 🟢 Adiciona res.data ao estado
      setBooks((prev) => [...prev, res.data])
      setNome('')
      setDescricao('')
      setDate('')

    }
    catch (error) {
      console.error('Erro ao cadastrar livro:', error);

    }
  }











  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`https://crudcrud.com/api/81dbc3ae67a346f580d295425a31949a/livro/${id}`)
      setBooks((prev) => prev.filter((item) => item._id !== id))
    } catch (error) {
      console.error('erro ao deletar livro', error);

    }
  }

  return (
    <>
      <FormBook date={date} descricao={descricao} nome={nome} onCadastrar={handlerSubmit} setDate={setDate} setDescricao={setDescricao} setNome={setNome} />
      <BookList books={books} onRemove={handleRemove} />
    </>
  )
}

export default App
