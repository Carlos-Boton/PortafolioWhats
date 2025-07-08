const Distribuidor = ({Mensaje}) => {

    return(
        <>
            <div className="mb-4">
                <div className="sticky top-4 z-50 flex justify-center items-center my-4 px-4">
                    <div className="p-1 text-center bg-neutral-800 rounded-md">
                        <p className="text-neutral-400 text-sm">30/02/2025</p>
                    </div>
                </div>
                
                <Mensaje/>

                <div
                className="sticky top-4 z-50 flex justify-center items-center my-4 px-4"
                >
                    <div className="p-1 text-center bg-neutral-800 rounded-md">
                        <p className="text-neutral-400 text-sm">32/02/2025</p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block px-2 py-1 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            Hola mi brother, estoy emocionado
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pr-6 my-2 ml-auto flex flex-col justify-end">
                    <div className="inline-block px-2 py-1 mb-1 bg-green-900 ml-auto rounded-md">
                        <p className="text-white">
                            Hola, que tal mi brother
                        </p>
                    </div>

                    <div className="inline-block px-2 py-1 mb-1 bg-green-900  ml-auto rounded-md">
                        <p className="text-white">
                            Y ahora por que la emocion?
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block px-2 py-1 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            Resulta que hoy presento el sistema que estuve abarcando en el proceso de recidencia
                        </p>
                    </div>

                    <div className="inline-block px-2 py-1 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            Presentare cada parte del sistema que me toco, ya que el sistema es muy amplio y necesitabamos compañeros para completar el sistema completo
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pr-6 my-2 ml-auto flex justify-end">
                    <div className="inline-block px-2 py-1 mb-1 bg-green-900 rounded-md">
                        <p className="text-white">
                            Wow, y de que va el sistema que abarcaste?
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block px-2 py-1 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            Es sobre acumulacion de puntos del estudiante, para obtener un certificado el cual esta sirve para poder graduarse, asi que es un documento importante
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pr-6 my-2 ml-auto flex justify-end">
                    <div className="inline-block px-2 py-1 mb-1 bg-green-900 rounded-md">
                        <p className="text-white">
                            Y solo acomula puntos?
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block px-2 py-1 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            No solo eso, el sistema tiene tres rutas de acceso, el alumno quien acomula los puntos, el maestro quien da los puntos, y el admin quien asigna a los maestros para dichas clases
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pr-6 my-2 ml-auto flex justify-end">
                    <div className="inline-block px-2 py-1 mb-1 bg-green-900 rounded-md">
                        <p className="text-white">
                            Vaya!, si se ve que tiene sus cositas, podrias mostrarme una foto del sistema?
                        </p>
                    </div>
                </div>

                <div className="w-[clamp(260px,80%,770px)] pl-6">
                    <div className="inline-block px-2 py-1 mb-1 bg-neutral-800 rounded-md">
                        <p className="text-white">
                            Claro!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distribuidor;