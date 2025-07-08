

const ModalInformacion = ({toggleModalInformacion,iconsModalInformacion,chatId,ImgPerfil,ModalRef,tamañoImg,ArrojarImg,animacionModalInformacion,toggleModalImg}) => {

    const [Icono1,Icono2,Icono3,Icono4,Icono5,Icono6,Icono7,Icono8,Icono9,Icono10,Icono11] = iconsModalInformacion;

    return(
        <div className="h-screen overflow-x-hidden overflow-y-auto text-white">
            <div className="fixed flex h-16 bg-neutral-900 w-full">
                <div className="w-16 h-16 flex justify-center items-center">
                    <button
                    onClick={() => toggleModalInformacion(2)}
                    className="hover:bg-neutral-800 p-2 rounded-full">
                        <Icono1 className="w-6 text-white "/>
                    </button>
                </div>
                <div className="text-blck flex-1 flex items-center">
                    <h3 className="ml-2">Info. del contacto</h3>
                </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${animacionModalInformacion ? ("opacity-100 mt-16") : ("opacity-0")}`}>
                <div className="flex flex-col justify-center items-center h-72">
                    <div className="w-36 mb-2">
                        <img
                        className='rounded-full '
                        src={chatId === "distribuidor" ? ImgPerfil[0] :
                        chatId === "sistemas" ? ImgPerfil[1] :
                        chatId === "grupo123" ? ImgPerfil[2] :
                        ""} alt="" />
                    </div>
                    <div className="w-full">
                        <h3 className="text-center text-2xl mb-3">
                            {chatId === "distribuidor" ? chatId :
                            chatId ==="sistemas" ? chatId :
                            chatId ==="grupo123" ? chatId :
                            ("") }
                        </h3>
                        <h4 className="text-center text-sm text-neutral-400">
                            +52 981 177 15 71
                        </h4>
                    </div>
                </div>
                <div className="min-h-16 max-h-20 flex flex-col px-4">
                    <h3 className="text-neutral-400">
                        Info
                    </h3>
                    <h3>
                        {chatId === "distribuidor" ? "¡Hola! ¡hola! compañero, ¿Como has estado?" :
                        chatId ==="sistemas" ? "" :
                        chatId ==="grupo123" ? "" :
                        ("") }
                    </h3>
                </div>

                <hr className="border-neutral-500 mx-4" />

                <div className="p-4 flex justify-between">
                    <div className="ml-1 flex">
                        <Icono2 className="w-5 mr-6"/>
                        <h3>Archivos, enlaces y documentos</h3>
                    </div>
                    <div>
                        <h3 className="text-neutral-400 mr-1" >{ArrojarImg.length}</h3>
                    </div>
                </div>

                <div className="flex px-3 py-2 w-[100%] mb-2" style={{ height: `${tamañoImg}px` }}>
                    {ArrojarImg.slice(0,3).map((img, i) => (
                        <div ref={ModalRef} key={i} className="relative overflow-hidden mx-1 rounded-xl h-full w-[32%]">
                            <img
                            onClick={() => toggleModalImg(0,i)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={img} alt="" />
                        </div>
                    ))}
                </div>

                <hr className="border-neutral-500 mx-4" />

                <div className="px-4">
                    <div className="flex items-center h-14">
                        < Icono3 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Mensajes destacados
                        </h3>
                    </div>
                    <div className="flex items-center h-14">
                        < Icono4 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Silenciar notificaciones
                        </h3>
                    </div>
                    <div className="flex items-center h-14">
                        < Icono5 className="w-5 mx-2"/>
                        <div className="flex flex-col ml-2">
                            <h3 className="">
                                Mensajes temporales
                            </h3>
                            <h3 className="text-neutral-400">
                                Desactivados
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center h-14">
                        < Icono6 className="w-5 mx-2"/>
                        <div className="flex flex-col ml-2">
                            <h3 className="">
                                privacidad avanzado del chat
                            </h3>
                            <h3 className="text-neutral-400">
                                Desactivado
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center min-h-14 max-h-22 mb-3">
                        < Icono7 className="w-5 mx-2"/>
                        <div className="flex flex-col ml-2">
                            <h3 className="">
                                Cifrado
                            </h3>
                            <h3 className="text-neutral-400">
                                Los mensajes estan cifrados de extremo a extermo. Haz click para verificarlo
                            </h3>
                        </div>
                    </div>
                    <hr className="border-neutral-500" />
                    <br />
                    <hr className="border-neutral-500" />
                    <div className="flex items-center h-12 mt-3 hover:bg-neutral-800 rounded-lg">
                        < Icono8 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Añadir a Favoritos
                        </h3>
                    </div>
                    <div className="flex items-center h-12 text-red-300 hover:bg-neutral-800 rounded-lg">
                        < Icono9 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Bloquear a {chatId === "distribuidor" ? chatId :
                            chatId ==="sistemas" ? chatId :
                            chatId ==="grupo123" ? chatId :
                            ("") }
                        </h3>
                    </div>
                    <div className="flex items-center h-12 text-red-300 hover:bg-neutral-800 rounded-lg">
                        < Icono10 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Reportar {chatId === "distribuidor" ? chatId :
                            chatId ==="sistemas" ? chatId :
                            chatId ==="grupo123" ? chatId :
                            ("") }
                        </h3>
                    </div>
                    <div className="flex items-center h-12 text-red-300 hover:bg-neutral-800 rounded-lg">
                        < Icono11 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Eliminar Chat
                        </h3>
                    </div>
                    <div className="h-8">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInformacion;