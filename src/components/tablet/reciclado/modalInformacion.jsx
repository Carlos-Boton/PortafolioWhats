import { useState,useEffect } from "react";


const ModalInformacion = ({XMarkIcon,toggleVistaInformacion,imgRojo,imgAzul,chatNavegacion,nombreProyectos,mensajeModal,FolderIcon,ModalRef,tamañoImg,iconModalInformacion,ArrojarImg}) =>{

    

    const Icono1 = iconModalInformacion[0];
    const Icono2 = iconModalInformacion[1];
    const Icono3 = iconModalInformacion[2];
    const Icono4 = iconModalInformacion[3];
    const Icono5 = iconModalInformacion[4];
    const Icono6 = iconModalInformacion[5];
    const Icono7 = iconModalInformacion[6];
    const Icono8 = iconModalInformacion[7];
    const Icono9 = iconModalInformacion[8];

    return(
        <>
            <div className="h-screen overflow-x-hidden overflow-y-auto">
                <div className="fixed flex h-16 bg-neutral-900 w-full">
                    <div className="w-16 h-16 flex justify-center items-center">
                        <button
                        onClick={toggleVistaInformacion}
                        className="hover:bg-neutral-800 p-2 rounded-full">
                            <XMarkIcon className="w-6 text-white "/>
                        </button>
                    </div>
                    <div className="text-blck flex-1 flex items-center" >
                        <h3 className="ml-2">Info. del contacto</h3>
                    </div>
                </div>
                <div className="mt-16 flex flex-col justify-center items-center h-72">
                    <div className="w-36 mb-2">
                        <img className='rounded-full ' src={chatNavegacion === "distribuidor" ? imgRojo : chatNavegacion === "sistema" ? imgAzul : ""} alt="" />
                    </div>
                    <div className="w-full">
                        <h3 className="text-center text-2xl mb-3">
                            {chatNavegacion === "distribuidor" ? nombreProyectos[0] : chatNavegacion ==="sistema" ? nombreProyectos[1] : ("") }
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
                        {chatNavegacion === "distribuidor" ? mensajeModal[0] : chatNavegacion ==="sistema" ? mensajeModal[1] : ("") }
                    </h3>
                </div>
                <hr className="border-neutral-500 mx-4" />
                <div className="p-4 flex justify-between">
                    <div className="ml-1 flex">
                        <FolderIcon className="w-5 mr-6"/>
                        <h3>Archivos, enlaces y documentos</h3>
                    </div>
                    <div>
                        <h3 className="text-neutral-400 mr-1" >{ArrojarImg.length}</h3>
                    </div>
                </div>
                <div className="flex px-3 py-2 w-[100%] mb-2" style={{ height: `${tamañoImg}px` }}>
                    {ArrojarImg.slice(0,3).map((img, i) => (
                        <div ref={ModalRef} key={i} className="relative overflow-hidden mx-1 rounded-xl h-full w-[32%]">
                            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={img} alt="" />
                        </div>
                    ))}
                </div>
                <hr className="border-neutral-500 mx-4" />
                <div className="px-4">
                    <div className="flex items-center h-14">
                        < Icono1 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Mensajes destacados
                        </h3>
                    </div>
                    <div className="flex items-center h-14">
                        < Icono2 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                                Silenciar notificaciones
                            </h3>
                        
                    </div>
                    <div className="flex items-center h-14">
                        < Icono3 className="w-5 mx-2"/>
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
                        < Icono4 className="w-5 mx-2"/>
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
                        < Icono5 className="w-5 mx-2"/>
                        <div className="flex flex-col ml-2">
                            <h3 className="">
                                Cifrado
                            </h3>
                            <h3 className="text-neutral-400">
                                Los mensajes estan cifrados de extremo a extermo. Haz clic para verificarlo
                            </h3>
                        </div>
                    </div>
                    <hr className="border-neutral-500 mx-4" />
                    <br />
                    <hr className="border-neutral-500 mx-4" />
                    <div className="flex items-center h-12 mt-3 hover:bg-neutral-800 rounded-lg">
                        < Icono6 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Añadir a Favoritos
                        </h3>
                    </div>
                    <div className="flex items-center h-12 text-red-300 hover:bg-neutral-800 rounded-lg">
                        < Icono7 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Bloquear a {chatNavegacion === "distribuidor" ? nombreProyectos[0] : chatNavegacion ==="sistema" ? nombreProyectos[1] : ("") }
                        </h3>
                    </div>
                    <div className="flex items-center h-12 text-red-300 hover:bg-neutral-800 rounded-lg">
                        < Icono8 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Reportar {chatNavegacion === "distribuidor" ? nombreProyectos[0] : chatNavegacion ==="sistema" ? nombreProyectos[1] : ("") }
                        </h3>
                    </div>
                    <div className="flex items-center h-12 text-red-300 hover:bg-neutral-800 rounded-lg">
                        < Icono9 className="w-5 mx-2"/>
                        <h3 className="ml-2">
                            Eliminar Chat
                        </h3>
                    </div>
                    <div className="h-8">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalInformacion;