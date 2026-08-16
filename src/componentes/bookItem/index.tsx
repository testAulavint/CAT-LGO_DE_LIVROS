import type { JSX } from "react/jsx-runtime";
import type { Book } from "../../types";
import style from './style.module.css'
import { useState } from "react";
import EditarForm from "./formEditar";

type ItemBookProps = {

    item: Book
    onRemove: (id: string) => void
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>


}

export default function ItemBook({ item, onRemove, setBooks }: ItemBookProps): JSX.Element {

    const [editar, setEditar] = useState<boolean>(false)

    const [descricao, setDescricao] = useState<string>(item.description)



    const formEditar = (): void => {
        setEditar((prev) => !prev)
    }

    return (
        <>
            <div className={style.item}>
                <p className={style.name} >  <strong className={style.destaque}>Nome do livro:</strong> {item.name}</p>
                <p className={style.geral}> <strong className={style.destaque} >Descrição:</strong> {item.description} </p>
                <p className={style.geral} ><strong className={style.destaque} >data lançamento: </strong>  {item.date}</p>
                <div className={style.editar} >
                    <button className={`${style.btn} ${style.btn_geral}`} onClick={() => onRemove(item._id)}>Remover</button>
                    <button className={style.btn_geral} onClick={formEditar} >Editar</button>


                </div>
                {
                    editar &&
                    <EditarForm
                        setEditar={setEditar}
                        setBooks={setBooks}
                        item={item}
                        key={item._id}
                        id={item._id}
                        descricao={descricao}
                        setDescricao={setDescricao}
                    />
                }

            </div>
        </>)
}