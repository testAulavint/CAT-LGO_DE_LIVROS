import type { JSX } from "react/jsx-runtime";
import type { Book } from "../../types";
import style from './style.module.css'

type ItemBookProps = {
    item: Book
    onRemove: (id: string) => void
}

export default function ItemBook({ item, onRemove }: ItemBookProps): JSX.Element {

    return (
        <div className={style.item}>
            <p className={style.name} >  <strong className={style.destaque}>Nome do livro:</strong> {item.name}</p>
            <p className={style.geral}> <strong className={style.destaque} >Descrição:</strong> {item.description} </p>
            <p className={style.geral} ><strong className={style.destaque} >data lançamento: </strong>  {item.date}</p>

            <button className={style.btn} onClick={() => onRemove(item._id)}>Remover</button>
        </div>
    )
}