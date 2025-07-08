import ModalOpcionBoton from "./modalOpcionBoton";

const NavBoton = ({
    chats,
    id,
    ImgPerfil,
    Link,
    ActiveChat,
    ChevronDownIcon,
    toggleModalBoton,
    modalOpcionBoton,
    setModalOpcionBoton
}) => {
    return (
        <div className="px-2 h-full">
            {chats.map((chat, i) => (
                <div key={i} className="group relative">
                    {/* Contenido del botón como Link */}
                    <Link
                        to={`/proyectos/${chat}`}
                        onClick={() => ActiveChat(1)}
                        className={`z-40 rounded-lg mb-1 flex ${id === chat ? "bg-neutral-800" : "hover:bg-neutral-800"}`}
                    >
                        {/* Imagen */}
                        <div className="w-20 pl-1 py-2">
                            <div className="flex justify-center">
                                <img className="rounded-full w-16" src={ImgPerfil[i]} alt="" />
                            </div>
                        </div>

                        {/* Texto y fecha */}
                        <div className="flex-1">
                            <div className="flex">
                                <div className="flex flex-col items-start justify-center h-16 w-full">
                                    <h3 className="font-semibold text-white">{chat}</h3>
                                    <p className="whitespace-nowrap text-sm text-neutral-400">
                                        Nose vale vale vale vale vale
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Botón de opciones y modal */}
                    <div className="absolute top-0 right-2 h-full w-16 flex flex-col justify-center items-center">
                        <p className="text-xs font-semibold mt-2 text-neutral-400">12/13/12</p>
                        <div className="flex flex-col justify-end items-end h-7 w-full px-2">
                            <div
                            onClick={(e) => {
                                e.preventDefault();
                                toggleModalBoton(i);
                            }}
                            className="w-0 overflow-hidden bg-neutral-800 transition-all duration-100 rounded-full group-hover:w-7 group-hover:p-1"
                        >
                            <ChevronDownIcon className="w-5 text-neutral-400" strokeWidth={2} />
                        </div>
                        </div>
                        {/* Botón de opciones */}
                        
                        {/* Modal flotante */}
                        <div className="relative px-1 w-5">
                            <ModalOpcionBoton
                                index={i}
                                setModalOpcionBoton={setModalOpcionBoton}
                                modalOpcionBoton={modalOpcionBoton}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NavBoton;

