

const ModalOpcion = ({iconsModalOpcionNavegacion,toggleModalOpcion,modalOpcionNavegacion}) => {

    const [Icono1, Icono2, Icono3, Icono4] = iconsModalOpcionNavegacion;

    return(
        <div>
            <div
            className={`${
            modalOpcionNavegacion ? "translate-x-0" : "-translate-x-full"
            } fixed inset-0 z-20`}
            onClick={toggleModalOpcion}
            // Cierra el sidebar cuando se hace clic fuera de él
            ></div>

            <div className={`transition-all duration-200 ease-in-out absolute overflow-hidden top-[55px] left-[clamp(90px,35%,560px)] bg-neutral-800 rounded-xl flex flex-col z-50 ${modalOpcionNavegacion ? ("p-2 w-[240px] h-[185px]") : ("w-0 h-0")}`}>
                {/* Botones del menú */}
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <Icono3 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Nuevo grupo</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <Icono2 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Mensajes destacados</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <Icono1 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Seleccionar chats</p>
                </button>
                <hr className="border-neutral-600 m-1" />
                <button className="whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-50 rounded-lg p-2 flex">
                    <Icono4 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Cerrar sesión</p>
                </button>
            </div>
        </div>
    )
}

export default ModalOpcion;