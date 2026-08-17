import axios from "axios"
import type React from "react"
import type { Book } from "../../../types"
import style from './style.module.css'

type EditarFormProps = {

    setEditar: React.Dispatch<React.SetStateAction<boolean>>
    descricao: string
    setDescricao: (value: string) => void
    id: string
    item: Book
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}


const URL = ' https://crudcrud.com/api/3ff8cafde0094b96851117131e7e964a/livro'


function EditarForm({ descricao, setDescricao, id, item, setBooks, setEditar }: EditarFormProps) {


    const onEditar = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await axios.put(`${URL}/${id}`, {
                name: item.name,
                description: descricao,
                date: item.date
            })

            setBooks((prev) =>
                prev.map((item) => (item._id === id ?
                    { ...item, description: descricao }
                    : item
                )
                )
            )
            setEditar((prev) => !prev)




            console.log(res.data);


        } catch (error) {
            console.log('Erro ao editar o campo descrição: ', error);

        }
    }

    return (
        <>
            <form onSubmit={onEditar} className={style.containerFromEditar} >
                <textarea className={style.textArea} value={descricao} placeholder="Editar Descrição" onChange={(e) => setDescricao(e.target.value)} />
                <button type="submit"> Enviar</button>
                <p> Essa edição esta disponivel somente para 'Descrição'</p>
            </form >
        </>
    )
}
export default EditarForm   