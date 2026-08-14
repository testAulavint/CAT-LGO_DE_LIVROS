import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"
import { useState } from "react"

type FormBookProps = {

    onCadastrar: (book: Book) => void
}


export default function FormBook({ onCadastrar }: FormBookProps): JSX.Element {

    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const handlerSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        onCadastrar({ name: nome, description: descricao, date: date })

        setNome('')
        setDescricao('')
        setDate('')
    }
    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <input type="text" placeholder="data-lançamento" value={date} onChange={(e) => setDate(e.target.value)} />

                <button type="submit">Adicionar</button>
            </form>
        </>
    )
}