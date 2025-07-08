

const navModalImg = ({ArrowDownTrayIcon,ArrowTurnUpRightIcon,FaceSmileIcon,StarIcon,XMarkIcon,ArrowRightIcon,setMostrarImg,chatNavegacion,imgRojo,imgAzul,nombreProyectos}) => {

    return(
        <>
            <nav className="flex justify-between items-center h-[64px] text-center top-0 left-0 shadow-md z-40">
                <div className='h-full flex justify-start items-center'>
                    <button className='flex'>
                        <div className='px-3 flex justify-center items-center w-16'>
                            <img className='rounded-full ' src={chatNavegacion === "distribuidor" ? imgRojo : chatNavegacion === "sistema" ? imgAzul : ""} alt="" />
                        </div>
                        <div>
                            <h3 className='text-white text-base font-semibold'>
                                {chatNavegacion === "distribuidor" ? nombreProyectos[0] : chatNavegacion ==="sistema" ? nombreProyectos[1] : ("") }
                            </h3>
                            <h3 className='text-neutral-500 text-xs'> +52 981 177 51 24</h3>
                        </div>
                    </button>
                </div>
                <div className="px-4">
                    <button> <ArrowRightIcon className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                    <button> <StarIcon className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2} /> </button>
                    <button> <FaceSmileIcon className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2} /> </button>
                    <button> <ArrowTurnUpRightIcon className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                    <button> <ArrowDownTrayIcon className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                    <button
                    onClick={() => setMostrarImg(false) }
                    > <XMarkIcon className='w-10 mx-1 rounded-full p-2 hover:bg-neutral-800 text-neutral-400' strokeWidth={2}/> </button>
                </div>
            </nav>
        </>
    )
}

export default navModalImg;