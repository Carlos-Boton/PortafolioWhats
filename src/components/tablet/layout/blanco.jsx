import Whatasap from "../../../assets/whatasap.png";

const Blanco = () => {

    return(
        <>
            <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center min-w-[500px]">
                <div>
                    <img src={Whatasap} alt="" />
                </div>
                <div className="w-[clamp(500px,80%,870px)]">
                    <h3 className="text-4xl text-center mb-6 text-white font-light">
                        Descarga WhatsApp? para tu Dispositivo!!?
                    </h3>
                    <h3 className="text-center mb-6 text-neutral-400 text-sm">
                        Este portafolio no tiene una aplicacion para tu dispositivo, no se hace llamadas ni compartir pantalla, pero si puedes disfrutar la experiencia.
                    </h3>
                </div>
                <button className="bg-green-400 p-2 px-5 rounded-3xl font-semibold text-sm hover:bg-green-500">
                    Descargar?
                </button>
            </div>

            <div className="flex items-center justify-center min-w-[500px]" >
                <h3 className="text-neutral-400 text-sm text-center">
                    Bienvenido a mi portafolio, puede intentar mandar un mensaje.
                </h3>
            </div>
        </>
    )
}

export default Blanco;