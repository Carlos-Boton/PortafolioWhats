

const ModalOpcionBoton = ({modalOpcionBoton,setModalOpcionBoton,index}) => {

    if (modalOpcionBoton !== index) return null;

    return (
        <div className="">

            <div
                className="fixed inset-0 z-10"
                onClick={() => setModalOpcionBoton(null)}
            />

            <div className="z-50">
                <div className={`transition-all duration-200 ease-in-out absolute overflow-hidden top-0 left-2 bg-neutral-800 rounded-xl flex flex-col z-50 ${modalOpcionBoton === index ? ("p-2 w-[240px] h-[305px]") : ("w-0 h-0")}`}>
                {/* Botones del menú */}
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    {/* <Icono3 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Archivar Chat</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    {/* <Icono2 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Silenciar notificaciones</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    {/* <Icono1 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Fijar chat</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    {/* <Icono1 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Marcar como no leido</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    {/* <Icono1 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Añadir a Favoritos</p>
                </button>
                <hr className="border-neutral-600 m-1" />
                <button className="whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-50 rounded-lg p-2 flex">
                    {/* <Icono4 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Bloquear</p>
                </button>
                <button className="whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-50 rounded-lg p-2 flex">
                    {/* <Icono4 className='w-6 mr-2' strokeWidth={2}/> */}
                    <p className="text-start" >Eliminar</p>
                </button>
            </div>
            </div>
        </div>
    )
}

export default ModalOpcionBoton;