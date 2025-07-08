

const  ModalOpcion = ({chatId,opcionModalNav,iconsOpcionModalNav,setOpcionModalNav}) => {

    const [Icono1,Icono2] = iconsOpcionModalNav;

    return(
        <>
            {opcionModalNav && (
                <>
                    <div
                    onClick={() => setOpcionModalNav(false)}
                    className="h-screen w-screen fixed top-0 left-0 z-10">
                    </div>
                </>
            )}

            <div className={`transition-all duration-300 ease-in-out absolute top-[55px] right-[70px] overflow-hidden ${opcionModalNav ? ("w-[230px] h-[100px] bg-neutral-800 rounded-xl p-2 flex flex-col z-50") : ("w-0 h-0")}`}>
                <button className={`transition-all duration-300 ease-in-out  whitespace-nowrap text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 mb-1 flex ${opcionModalNav ? ("w-full h-[3rem]") : ("w-0 h-0")}`}>
                    <Icono1 className={`mr-2 w-6`} strokeWidth={2}/>
                    <p className={`transition-all duration-300 ease-in-out text-start ${opcionModalNav ? 'opacity-100 w-full' : 'opacity-0 w-0 h-0'}`} >buscar en la web</p>
                </button>
                <button className={`transition-all duration-300 ease-in-out whitespace-nowrap text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${opcionModalNav ? ("w-full h-[3rem]") : ("w-0 h-0")}`}>
                    <Icono2 className={`mr-2 w-6`} strokeWidth={2}/>
                    <p className={`transition-all duration-300 ease-in-out text-start ${opcionModalNav ? 'opacity-100 w-full' : 'opacity-0 w-0 h-0'}`} >Reportar a {
                    chatId === "distribuidor" ? chatId :
                    chatId ==="sistemas" ? chatId :
                    chatId ==="grupo123" ? chatId :
                    ("") }</p>
                </button>
            </div>
        </>
    )
}

export default ModalOpcion;