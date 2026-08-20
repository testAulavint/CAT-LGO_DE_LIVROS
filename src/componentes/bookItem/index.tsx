import type { JSX } from "react/jsx-runtime";
import type { Book } from "../../types";
import style from './style.module.css';

type ItemBookProps = {
    item: Book;
    onRemove: (id: string) => void;
    concluir: (id: string) => void;
};

export default function ItemBook({ item, onRemove, concluir }: ItemBookProps): JSX.Element {
    return (
        <div className={style.item}>
            <p className={style.name}>
                <strong className={style.destaque}>Titulo do livro:</strong> {item.title}
            </p>
            <p className={style.geral}>
                <strong className={style.destaque}>Autor:</strong> {item.author}
            </p>
            <p className={style.geral}>
                <strong className={style.destaque}>Status: </strong> {item.status || "Pendente"}
            </p>
            <div className={style.editar}>
                <button className={`${style.btn} ${style.btn_geral}`} onClick={() => item._id && onRemove(item._id)}>
                    Remover
                </button>
                <button onClick={() => item._id && concluir(item._id)} className={style.btn_geral}>
                    Concluido
                </button>
            </div>
        </div>
    );
}
