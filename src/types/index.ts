export type Book = {
    _id?: string
    title: string
    author: string
    status?: "Pendente" | "Concluido"
}