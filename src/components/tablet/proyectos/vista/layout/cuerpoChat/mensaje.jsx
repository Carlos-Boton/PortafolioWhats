

const Mensaje = ({chatId}) => {
    return (
        <>
            <div
            className="sticky top-4 z-10 flex justify-center items-center my-4 px-4"
            >
                <div className="p-1 text-center bg-neutral-800 rounded-md">
                    <p className="text-neutral-400 text-sm">
                        {chatId === "distribuidor" ? ("30/03/2025") :
                        chatId === "sistemas" ? ("12/06/2024") :
                        chatId === "grupo123" ? ("06/08/2024") :
                         ("")
                        }
                        </p>
                </div>
            </div>
            <div className="flex justify-center items-center my-4 px-4">
                <div className="w-[500px] px-4 py-1 text-center bg-neutral-800 rounded-md">
                    <p className="text-yellow-400 text-sm" >
                    Los mensajes y las llamadas estan cifrados de extremo a extremo. Solo las personas en este chat pueden leerlos, escucharlos o compartirlos. Haz clic para obtener mas información.
                    </p >
                </div>
            </div>
        </>
    )
}

export default Mensaje;