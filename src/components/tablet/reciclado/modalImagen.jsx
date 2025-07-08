import FooterDistribuidor from "./footerDistribuidor";
import NavModalImg from "./navModalImg";

const ModalImagen = ({chatNavegacion,valorImg,ImgDistribuidor,imgSidebar,ChevronRightIcon,ChevronLeftIcon,setValorImg,ArrowDownTrayIcon,ArrowTurnUpRightIcon,FaceSmileIcon,StarIcon,XMarkIcon,ArrowRightIcon,setMostrarImg,Anterior,Siguiente,verImagen,setVerImagen,imgAzul,imgRojo,nombreProyectos}) => {

    return(
        <>
            <div className="absolute h-screen w-screen top-0 bg-neutral-900 overflow-hidden">
                <NavModalImg
                ArrowRightIcon={ArrowRightIcon} setMostrarImg={setMostrarImg} StarIcon={StarIcon}
                FaceSmileIcon={FaceSmileIcon} ArrowTurnUpRightIcon={ArrowTurnUpRightIcon}
                ArrowDownTrayIcon={ArrowDownTrayIcon} XMarkIcon={XMarkIcon}
                chatNavegacion={chatNavegacion} imgAzul={imgAzul} imgRojo={imgRojo} nombreProyectos={nombreProyectos}
                />

                <div className="fixed flex justify-center items-center w-24 left-0 h-[calc(100vh-10rem)]">
                    <button
                    onClick={() => Anterior()}
                    className={`rounded-full p-3 ${verImagen === 1 ? ("bg-neutral-700 text-neutral-500 cursor-not-allowed") : ("bg-neutral-500 text-white")} `}>
                        <ChevronLeftIcon className='w-6' strokeWidth={3} />
                    </button>
                </div>

                <div className="fixed flex justify-center items-center w-24 right-0 h-[calc(100vh-10rem)]">
                    <button
                    onClick={() => Siguiente()}
                    className={`rounded-full p-3 ${verImagen === 2 ? ("bg-neutral-700 text-neutral-500 cursor-not-allowed") : ("bg-neutral-500 text-white")} `}>
                        <ChevronRightIcon className='w-6' strokeWidth={3} />
                    </button>
                </div>
                
                <div className="h-[calc(100vh-10rem)] overflow-hidden py-6">
                    <div className="flex justify-center items-center w-full h-full">
                        {chatNavegacion === "distribuidor" ? (
                            <>
                                {valorImg === "inicio" || verImagen === 1 ? (
                                    <>  
                                        <img src={ImgDistribuidor} alt="" className="w-full h-full object-contain"/>
                                    </>
                                ) : valorImg === "sidebar" || verImagen === 2 ? (
                                    <>
                                        <img src={imgSidebar} alt="" className="w-full h-full object-contain"/>
                                    </>
                                ) : (
                                    <></>
                                ) }
                            </>
                        ) : (
                            <>

                            </>
                        ) }
                    </div>
                </div>

                <div className="px-20 border-t border-t-neutral-800 w-full h-[6rem] flex justify-center items-center overflow-x-auto overflow-y-hidden">

                    {chatNavegacion === 'distribuidor' ? (
                        <>
                            <FooterDistribuidor
                            ImgDistribuidor={ImgDistribuidor} imgSidebar={imgSidebar}
                            setValorImg={setValorImg} valorImg={valorImg} verImagen={verImagen}
                            setVerImagen={setVerImagen}
                            />
                        </>
                    ) : chatNavegacion === 'sistema' ? (
                        <>
                        </>
                    ) : (
                        <>
                        </>
                    ) }
                </div>
            </div>
        </>
    )
}

export default ModalImagen;