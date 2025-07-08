import ModalOpcionNavegacion from "./modalOpcionNavegacion";

const Navegacion = ({Mas,Opciones,Lupa,chatNavegacion,toggleOpcionNavegacion,opcionNavegacion,setOpcionVista,BotonNavegacion,setOpcionNavegacion,Active,imgRojo,imgAzul,nombreProyectos}) => {
    

    return (
        <>
            <div className="flex h-screen flex-col p-1">
                {/*titulo y boton de nuevo chat y de filtrar*/}
                <div className="flex justify-between space-x-3 pl-4 pr-2 pt-2 pb-1">
                    <div className="text-2xl font-semibold">
                        <h1>Proyectos</h1>
                    </div>
                    <div className="z-50">
                        <button className="p-2 mx-2 rounded-full hover:bg-neutral-800">
                            <Mas className="w-6 text-white" />
                        </button>
                        <button 
                        onClick={() => {toggleOpcionNavegacion(),setOpcionVista(false)}}
                        className={`p-2 rounded-full  ${opcionNavegacion ? ("bg-neutral-800") : ("hover:bg-neutral-800") }`}>
                            <Opciones className="w-6 text-white"/>
                        </button>
                    </div>
                </div>

                {opcionNavegacion && (
                    <>
                        <ModalOpcionNavegacion setOpcionNavegacion={setOpcionNavegacion} opcionNavegacion={opcionNavegacion} />
                    </>
                )}

                {/*Buscador de chat*/}
                <div className="px-4 z-40 pt-2 pb-3">
                    <div className="relative">
                        <Lupa className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                        <input
                        onClick={Active}
                        className="pl-9 pr-2 rounded-full bg-neutral-700 w-full h-10 text-white placeholder-neutral-400
                        focus:outline-none focus:border-2 focus:border-green-500 focus:bg-zinc-900"
                        type="text"
                        placeholder="Buscar chat..."
                        />
                    </div>
                </div>
                {/*botones de navegacion*/}
                <div className="px-2  overflow-y-auto overflow-x-hidden h-full">

                    <div
                    onClick={() => BotonNavegacion("distribuidor")}
                    className={`relative z-40 rounded-lg mb-1 flex ${chatNavegacion === "distribuidor" ? ("bg-neutral-800") : (" hover:bg-neutral-800 ") }`}
                    >
                        <button className=" w-20 p-2 py-3">
                            <div className='flex justify-center'>
                                <img className='rounded-full w-14' src={imgRojo} alt="" />
                            </div>
                        </button>
                        <button className="flex-1">
                            <div className='flex flex-col items-start'>
                                <h3 className="font-semibold">{nombreProyectos[0]}</h3>
                                <p className="text-sm text-neutral-400">Nose</p>
                                <p className="absolute top-0 right-0 text-xs text-neutral-400 mr-5 mt-3">12/13/12</p>
                            </div>
                        </button>
                    </div>

                    <div
                    onClick={() => BotonNavegacion("sistema")}
                    className={`relative z-40 rounded-lg mb-1 flex ${chatNavegacion === "sistema" ? ("bg-neutral-800") : (" hover:bg-neutral-800 ") }`}
                    >
                        <button className=" w-20 p-2 py-3" >
                            <div className='flex justify-center'>
                                <img className='rounded-full w-14' src={imgAzul} alt="" />
                            </div>
                        </button>
                        <button className="flex-1">
                            <div className='flex flex-col items-start'>
                                <h3 className="font-semibold">{nombreProyectos[1]}</h3>
                                <p className="text-sm text-neutral-400">Nose</p>
                                <p className="absolute top-0 right-0 text-xs text-neutral-400 mr-5 mt-3">12/13/12</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navegacion;