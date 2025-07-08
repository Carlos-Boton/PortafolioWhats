

const NavModal = ({iconsModalImg,chatId,ImgPerfil,toggleModalImg,zoomActivo,setOpcionModalNav,opcionModalNav}) => {

    const [Icono1,Icono2,Icono3,Icono4,Icono5,Icono6,Icono7,Icono8] = iconsModalImg;

    return(
        <>
            {!zoomActivo && (
                <nav className="fixed w-full flex justify-end items-center h-[4rem] text-center top-0 left-0 shadow-md z-20">
                    <div
                    onClick={() => setOpcionModalNav(false)}
                    className="w-screen absolute h-[4rem] z-30">
                    </div>
                    <div className="fixed z-20 left-[2rem] text-start w-12" >
                        <img
                            className='rounded-full '
                            src={chatId === "distribuidor" ? ImgPerfil[0] :
                            chatId === "sistemas" ? ImgPerfil[1] :
                            chatId === "grupo123" ? ImgPerfil[2] :
                            ""} alt="" />
                    </div>
                    <div className="fixed z-20 left-[6rem] text-start" >
                        <h3 className='text-white font-semibold'>
                            {chatId === "distribuidor" ? chatId :
                            chatId ==="sistemas" ? chatId :
                            chatId ==="grupo123" ? chatId :
                            ("") }
                        </h3>
                        <h3 className='text-neutral-500 text-xs'> +52 981 177 51 24</h3>
                    </div>

                    <div className="px-4 z-50 bg-zinc-900">
                        <button
                        onClick={() => setOpcionModalNav(false)}
                        > <Icono1 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                        <button
                        onClick={() => setOpcionModalNav(false)}
                        > <Icono2 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2} /> </button>
                        <button
                        onClick={() => setOpcionModalNav(false)}
                        > <Icono3 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2} /> </button>
                        <button
                        onClick={() => setOpcionModalNav(false)}
                        > <Icono4 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                        <button
                        onClick={() => setOpcionModalNav(false)}
                        > <Icono5 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                        <button
                        onClick={() => setOpcionModalNav(false)}
                        > <Icono6 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                        <button
                        onClick={() => setOpcionModalNav(!opcionModalNav) }
                        > <Icono7 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                        <button
                        onClick={() => toggleModalImg(1,null) }
                        > <Icono8 className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                    </div>
                </nav>
            )}
            
        </>
    )
}

export default NavModal;