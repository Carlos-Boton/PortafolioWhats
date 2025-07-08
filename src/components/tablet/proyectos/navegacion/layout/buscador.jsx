

const Buscardor = ({Icono3,ActiveChat}) => {
    return(
        //Diseño de Buscardor
        <div className="px-4 pt-2 pb-3">
            <div className="relative z-30">
                <Icono3 className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                <input
                onClick={() => ActiveChat(2)}
                className="pl-9 pr-2 rounded-full bg-neutral-700 w-full h-10 text-white placeholder-neutral-400
                focus:outline-none focus:border-2 focus:border-green-500 focus:bg-zinc-900"
                type="text"
                placeholder="Buscar chat..."
                />
            </div>
        </div>
    )
}

export default Buscardor;