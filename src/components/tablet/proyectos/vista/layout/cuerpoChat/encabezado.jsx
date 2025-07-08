

const Encabezado = ({chatId,ImgPerfil,toggleModalOpcionVista,modalOpcionVista,iconsEncabezado}) => {
    
    const [Icono1,Icono2,Icono3,Icono4] = iconsEncabezado;

    return(
        <div className="flex justify-between items-center h-[4rem] bg-neutral-900">
            <div className='h-full flex justify-start items-center'>
                <button className='flex'>
                    <div className='px-3 flex justify-center items-center w-[70px]'>
                        <img
                        className='rounded-full'
                        src={chatId === "distribuidor" ? ImgPerfil[0] :
                            chatId === "sistemas" ? ImgPerfil[1] :
                            chatId === "grupo123" ? ImgPerfil[2] :
                            ""} alt=""
                        />
                    </div>
                    <div>
                        <h3 className='text-white text-base font-semibold'>
                            {chatId === "distribuidor" ? (<>{chatId}</>) :
                            chatId === "sistemas" ? (<>{chatId}</>) :
                            chatId === "grupo123" ? (<>{chatId}</>) :
                            (
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
                        <Icono1 className="w-6 text-white" />
                        <Icono2 className="w-6 text-white" />
                    </button>
                </div>
                <div className='h-full w-16 flex justify-center items-center'>
                    <button className='hover:bg-neutral-800 rounded-full p-2'>
                        <Icono3 className="w-6 text-white" />
                    </button>
                </div>
                <div className='h-full w-16 flex justify-center items-center'>
                    <button
                    onClick={toggleModalOpcionVista}
                    className={`rounded-full p-2 ${modalOpcionVista ? ("bg-neutral-800") : ("hover:bg-neutral-800")}`} >
                        <Icono4 className="w-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Encabezado;