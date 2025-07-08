const Distribuidor = ({Mensaje,ImgDistribuidor,Palomita,setMostrarImg,setValorImg,imgSidebar,setVerImagen}) => {

    return(
        <>
            <div className="mb-4">
                <div
                className="sticky top-4 z-20 flex justify-center items-center my-4 px-4"
                >
                    <div className="p-1 text-center bg-neutral-800 rounded-md">
                        <p className="text-neutral-400 text-sm">30/02/2025</p>
                    </div>
                </div>
                
                <Mensaje/>

                <div
                className="sticky top-4 z-20 flex justify-center items-center my-4 px-4"
                >
                    <div className="p-1 text-center bg-neutral-800 rounded-md">
                        <p className="text-neutral-400 text-sm">32/02/2025</p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pr-6 my-2 ml-auto flex justify-end">
                    <div className="inline-block flex items-end p-2 mb-1 bg-green-900 rounded-md">
                        <p className="text-white mr-2">
                            Hola, dime de que trata tu proyecto?
                        </p>
                        <div className="-mb-1 flex">
                            <p className="text-neutral-400 text-xs">10:00 pm</p>
                            <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                            <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                        </div>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block flex flex-col items-end p-2 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            El proyecto se basa en un sistema de venta para un distribuidor de venta de bebidas gaseosas, en donde el usuario genera la venta desde su celular con productos registrados en la base de datos de la aplicación, de igual manera tiene a sus clientes almacenados en la base de datos, una vez creado la venta se puede imprimir el ticket de venta para el cliente del usuario.
                        </p>
                        <div className="-mt-4 flex">
                            <p className="text-neutral-400 text-xs">10:00 pm</p>
                            <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                            <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                        </div>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pr-6 my-2 ml-auto flex justify-end">
                    <div className="inline-block flex flex-col items-end p-2 mb-1 bg-green-900 rounded-md">
                        <p className="text-white">
                            Dime, que tecnologias usaste en la aplicación?
                        </p>
                        <div className="-mb-1 flex">
                            <p className="text-neutral-400 text-xs">10:00 pm</p>
                            <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                            <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                        </div>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block p-2 mb-1 bg-neutral-800 rounded-md">
                        <div className="flex flex-col items-end">
                            <div className="">
                                <p className="text-white">
                                Tecnologias que complementa la aplicacion.
                                </p>
                                <p className="text-white">
                                    -HTML
                                </p>
                                <p className="text-white">
                                    -CSS
                                </p>
                                <p className="text-white">
                                    -JavaScript
                                </p>
                                <p className="text-white">
                                    -Libreria React
                                </p>
                                <p className="text-white">
                                    -TailwindCss
                                </p>
                                <p className="text-white">
                                    -Firebase
                                </p>
                                <p className="text-white">
                                    -Autenticathor Firebase
                                </p>
                            </div>
                            <div className="-mt-4 flex">
                                <p className="text-neutral-400 text-xs">10:00 pm</p>
                                <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                                <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] flex flex-col pr-6 my-2 ml-auto justify-end">
                    <div className="inline-block p-2 mb-1 bg-green-900 rounded-md ml-auto">
                        <div className="flex items-end">
                            <p className="text-white mr-1">
                            Hoo vaya!!
                            </p>
                            <div className="-mb-1  flex">
                                <p className="text-neutral-400 text-xs">10:00 pm</p>
                                <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                                <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                    <div className="inline-block p-2 mb-1 bg-green-900 rounded-md ml-auto">
                        <div className="flex flex-col items-end">
                            <p className="text-white">
                                me podrias mostrar una foto de la aplicación?
                            </p>
                            <div className="-mb-1  flex">
                                <p className="text-neutral-400 text-xs">10:00 pm</p>
                                <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                                <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block items-end p-2 mb-1 bg-neutral-800 rounded-md">
                        <div className="flex items-end">
                            <p className="text-white mr-2">
                            Si claro, aqui lo mando.
                            </p>
                            <div className="-mb-1  flex">
                                <p className="text-neutral-400 text-xs">10:00 pm</p>
                                <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                                <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="inline-block p-1 mb-1 bg-neutral-800 rounded-md w-80 h-[370px]">
                        <div className="relative overflow-hidden bg-green-100 w-full h-[170px] rounded-md mb-1" >
                            <button
                            onClick={() => {setMostrarImg(true); setValorImg("inicio"); setVerImagen(1)}}
                            className="mb-1">
                                <img src={ImgDistribuidor} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </button>
                        </div>
                        <div className="relative overflow-hidden bg-green-100 w-full h-[170px] rounded-md" >
                            <button
                            onClick={() => {setMostrarImg(true); setValorImg("sidebar"); setVerImagen(2)}}
                            className="">
                                <img src={imgSidebar} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-end">
                                <p className="text-neutral-400 text-xs font-semibold">10:00 pm</p>
                                <Palomita className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                                <Palomita className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} />
                            </div>
                        <br />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Distribuidor;