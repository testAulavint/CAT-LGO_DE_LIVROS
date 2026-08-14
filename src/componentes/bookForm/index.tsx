import type { JSX } from "react/jsx-runtime"
import type { Book } from "../../types"

type FormBookProps = {
    nome: string
    setNome: (val: string) => void
    descricao: string
    setDescricao: (val: string) => void
    date: string
    setDate: (val: string) => void
    onCadastrar: (e: React.SubmitEvent<HTMLFormElement>) => void
}


export default function FormBook({ nome, setNome, descricao, setDescricao, date, setDate, onCadastrar }: FormBookProps): JSX.Element {
    return (
        <>
            <form onSubmit={onCadastrar}>
                <input type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <input type="text" placeholder="data-lançamento" value={date} onChange={(e) => setDate(e.target.value)} />

                <button type="submit">Adicionar</button>
            </form>
        </>
    )
}