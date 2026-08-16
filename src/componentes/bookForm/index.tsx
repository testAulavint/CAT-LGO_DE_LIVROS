import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import { useState } from "react"
import style from './style.module.css'

type FormBookProps = {

    onCadastrar: (book: Book) => void
}


export default function FormBook({ onCadastrar }: FormBookProps): JSX.Element {

    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [erro, setErro] = useState<boolean>(false)




    const handlerSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!nome || !descricao) {
            return setErro((prev) =>
                prev === true ? prev : !prev
            )
        }

        onCadastrar({ name: nome, description: descricao, date: date })

        setNome('')
        setDescricao('')
        setDate('')
        setIsOpen((prev: boolean) => !prev)
    }
    return (
        <>
            <button className={style.addBook} onClick={() => setIsOpen((prev) => !prev)}>Adicionar Livro</button>
            {isOpen &&
                <form onSubmit={handlerSubmit} className={style.Formulario}>
                    <button type="button" className={style.formCancel} onClick={() => setIsOpen((prev) => !prev)}> x </button >
                    <input className={`${style.inputGeral} ${style.inputName} `} type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <textarea className={`${style.inputGeral} ${style.textArea}`} placeholder="Adicione uma descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                    <input className={`${style.inputGeral}  ${style.dataLancamento}`} type="text" placeholder="Data-Lançamento" value={date} onChange={(e) => setDate(e.target.value)} />
                    {erro && <p className={style.erro}> Preencha todos os campos </p>}
                    <button className={style.btnAct} disabled={!nome} type="submit">Adicionar</button>


                </form >
            }

        </>
    )
}