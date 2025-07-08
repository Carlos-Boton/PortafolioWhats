

const Filtro = ({setActiveFiltro,activeFiltro}) => {

    return(

        <div className="text-neutral-400 flex mb-4">
            <div onClick={() => setActiveFiltro("todos")} className={`border  px-2 py-1 rounded-3xl mx-1 ml-4 ${activeFiltro === "todos" ? ("bg-green-900 text-green-200 border-green-700") : ("border-neutral-500 hover:bg-neutral-600")}`}>Todos</div>
            <div onClick={() => setActiveFiltro("no leidos")} className={`border  px-2 py-1 rounded-3xl mx-1 ${activeFiltro === "no leidos" ? ("bg-green-900 text-green-200 border-green-700") : ("border-neutral-500 hover:bg-neutral-600")}`}>No leídos</div>
            <div onClick={() => setActiveFiltro("favoritos")} className={`border  px-2 py-1 rounded-3xl mx-1 ${activeFiltro === "favoritos" ? ("bg-green-900 text-green-200 border-green-700") : ("border-neutral-500 hover:bg-neutral-600")}`}>Favoritos</div>
            <div onClick={() => setActiveFiltro("grupos")} className={`border  px-2 py-1 rounded-3xl mx-1 ${activeFiltro === "grupos" ? ("bg-green-900 text-green-200 border-green-700") : ("border-neutral-500 hover:bg-neutral-600")}`}>Grupos</div>
        </div>
    )
}
export default Filtro;