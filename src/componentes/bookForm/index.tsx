import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import { useState } from "react"
import style from './style.module.css'

type FormBookProps = {

    onCadastrar: (book: Book) => void
}


export default function FormBook({ onCadastrar }: FormBookProps): JSX.Element {
    const [title, setTitle] = useState<string>('')
    const [autor, setAutor] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [erro, setErro] = useState<boolean>(false)

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!title || !autor) {
            return setErro(true)
        }

        onCadastrar({ title: title, author: autor })

        setTitle('')
        setAutor('')
        setErro(false)
        setIsOpen(false)
    }
    return (
        <>
            <button className={style.addBook} onClick={() => setIsOpen((prev) => !prev)}>Adicionar Livro</button>
            {isOpen &&
                <form onSubmit={handlerSubmit} className={style.Formulario}>
                    <button type="button" className={style.formCancel} onClick={() => setIsOpen((prev) => !prev)}> x </button >
                    <input className={`${style.inputGeral} ${style.inputName} `} type="text" placeholder="Titulo do Livro" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className={`${style.inputGeral} ${style.textArea}`} placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)}></textarea>
                    {erro && <p className={style.erro}> Preencha todos os campos </p>}
                    <button className={style.btnAct} disabled={!title} type="submit">Adicionar</button>


                </form >
            }

        </>
    )
}