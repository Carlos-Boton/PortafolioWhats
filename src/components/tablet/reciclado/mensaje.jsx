

const Mensaje = () => {

    return(
        <>
            <div className="flex justify-center items-center my-4 px-4">
                <div className="w-[500px] px-4 py-1 text-center bg-neutral-800 rounded-md">
                    <p className="text-yellow-400 text-sm" >
                    Los mensajes y las llamadas estan cifrados de extremo a extremo.
                    </p >
                    <p className="text-yellow-400 text-sm" >Solo las personas en este chat pueden leerlos, escucharlos o compartirlos. Haz clic para obtener mas información.</p>
                </div>
            </div>
        </>
    )
}

export default Mensaje;