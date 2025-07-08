

const EnviarChats = ({iconsChat,ActiveChat}) => {

    const [Icono1,Icono2,Icono3] = iconsChat;

    return(
        <div className="button-0 flex justify-between items-center px-4 h-16 pb-3">
            <div
            onClick={() => ActiveChat(2)}
            className="flex z-50 items-center bg-neutral-800 rounded-full px-3 w-full">
                {/* Iconos a la izquierda */}
                <button className="text-white rounded-full p-2 hover:bg-neutral-700">
                    <Icono1 className="w-6" />
                </button>
                <button className="text-white mr-2 rounded-full p-2 hover:bg-neutral-700">
                    <Icono2 className="w-6" />
                </button>
                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Escribe un mensaje"
                        className="flex-1 bg-neutral-800 h-14 text-white placeholder-neutral-400 outline-none"
                    />
                {/* Icono a la derecha */}
                <button className="text-white ml-2 rounded-full p-2 hover:bg-green-600 hover:text-black">
                    <Icono3 className="w-6" />
                </button>
            </div>
        </div>
    )
}

export default EnviarChats;