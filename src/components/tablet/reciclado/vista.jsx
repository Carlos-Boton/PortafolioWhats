import { useEffect, useRef } from "react";
import { PlusIcon, MicrophoneIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import Distribuidor from './distribuidor';
import Mensaje from "./mensaje";
import Sistema from './sistema';
import Blanco from "../layout/blanco";
import ModalOpcion from "./modalOpcion";

const Vista = ({FlechaAbajo,Camara,Opciones,Lupa,chatNavegacion,ImgDistribuidor,Palomita,setMostrarImg,setValorImg,imgSidebar,setVerImagen,opcionVista,toggleOpcionVista,setOpcionNavegacion,BotonNavegacion,setOpcionVista,Active,toggleModalInformacion,Whatasap,imgRojo,imgAzul,nombreProyectos}) => {
    const contenedorRef = useRef(null);

    useEffect(() => {
        const el = contenedorRef.current;
        if (el) {
        el.scrollTop = el.scrollHeight;
        }
    }, []);

    return(
        <>
            <div  className="bg-fondo-personalizado min-h-screen;" >
                {/*Encabezado*/}
                {chatNavegacion === "blanco" ? (
                    <>
                        <div
                        ref={contenedorRef}
                        className='h-[100vh] bg-zinc-950 overflow-y-auto overflow-x-hidden'>
                            <Blanco Whatasap={Whatasap} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between items-center h-16 bg-neutral-900">
                            <div className='h-full flex justify-start items-center'>
                                <button className='flex'>
                                    <div className='px-3 flex justify-center items-center w-16'>
                                        <img className='rounded-full ' src={chatNavegacion === "distribuidor" ? imgRojo : chatNavegacion === "sistema" ? imgAzul : ""} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='text-white text-base font-semibold'>
                                            {chatNavegacion === "distribuidor" ? (
                                                <>
                                                    {nombreProyectos[0]}
                                                </>
                                            ) : chatNavegacion === "sistema" ? (
                                                <>
                                                    {nombreProyectos[1]}
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </h3>
                                        <h3 className='text-neutral-500 text-xs'> +52 981 177 51 24</h3>
                                    </div>
                                </button>
                            </div>
                            <div className='flex z-50'>
                                <div className='h-full w-16 flex justify-center items-center'>
                                    <button className='flex hover:bg-neutral-800 rounded-full p-2'>
                                        <Camara className="w-6 text-white" />
                                        <FlechaAbajo className="w-6 text-white" />
                                    </button>
                                </div>
                                <div className='h-full w-16 flex justify-center items-center'>
                                    <button className='hover:bg-neutral-800 rounded-full p-2'>
                                        <Lupa className="w-6 text-white" />
                                    </button>
                                </div>
                                <div className='h-full w-16 flex justify-center items-center'>
                                    <button
                                    onClick={() => {toggleOpcionVista(); setOpcionNavegacion(false)}}
                                    className={`rounded-full p-2 ${opcionVista ? ("bg-neutral-800") : ("hover:bg-neutral-800")}`} >
                                        <Opciones className="w-6 text-white" />
                                    </button>
                                </div>
                            </div>

                            {opcionVista && (
                                <>
                                    <ModalOpcion toggleModalInformacion={toggleModalInformacion} setOpcionVista={setOpcionVista} opcionVista={opcionVista} BotonNavegacion={BotonNavegacion} />
                                </>
                            )}
                        </div>
                        <div
                        ref={contenedorRef}
                        className='h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden touch-none'>
                            {chatNavegacion === "distribuidor" ? (
                                <>
                                    <Distribuidor
                                    Mensaje={Mensaje} ImgDistribuidor={ImgDistribuidor}
                                    Palomita={Palomita} setMostrarImg={setMostrarImg}
                                    setValorImg={setValorImg} imgSidebar={imgSidebar}
                                    setVerImagen={setVerImagen}
                                    />
                                </>
                            ) : chatNavegacion === "sistema" ? (
                                <>
                                    <Sistema Mensaje={Mensaje} />
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>

                        <div className="button-0 flex justify-between items-center px-4 h-16 pb-3">
                            <div
                            onClick={Active}
                            className="flex z-50 items-center bg-neutral-800 rounded-full px-3 w-full">
                                {/* Iconos a la izquierda */}
                                <button className="text-white rounded-full p-2 hover:bg-neutral-700">
                                    <PlusIcon className="w-6" />
                                </button>
                                <button className="text-white mr-2 rounded-full p-2 hover:bg-neutral-700">
                                    <FaceSmileIcon className="w-6" />
                                </button>
                                    {/* Input */}
                                    <input
                                        type="text"
                                        placeholder="Escribe un mensaje"
                                        className="flex-1 bg-neutral-800 h-14 text-white placeholder-neutral-400 outline-none"
                                    />
                                {/* Icono a la derecha */}
                                <button className="text-white ml-2 rounded-full p-2 hover:bg-green-600 hover:text-black">
                                    <MicrophoneIcon className="w-6" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {/*Contenido*/}
                
            </div>
        </>
    )
}

export default Vista;