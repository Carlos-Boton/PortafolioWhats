

const Encabezado = ({Icono1,Icono2,toggleModalOpcion,modalOpcionNavegacion}) =>{
    
    return (
        <div className="flex justify-between space-x-3 pl-4 pr-6 pt-2 pb-1 text-white">
            <div className="text-2xl font-semibold">
                <h1>Proyectos</h1>
            </div>
            <div className="z-50">
                <button className="p-2 mx-2 rounded-full hover:bg-neutral-800">
                    <Icono1 className="w-6" />
                </button>
                <button 
                onClick={toggleModalOpcion}
                className={`p-2 rounded-full  ${modalOpcionNavegacion ? ("bg-neutral-800") : ("hover:bg-neutral-800") }`}>
                    <Icono2 className="w-6 text-white"/>
                </button>
            </div>
        </div>
    )
}
export default Encabezado;