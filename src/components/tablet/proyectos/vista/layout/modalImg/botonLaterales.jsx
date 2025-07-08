

const BotonLaterales = ({Anterior,Siguiente,valorImg,ArrojarImg,iconsNextImg,zoomActivo}) => {

    const [Icono1,Icono2] = iconsNextImg;

    return(
        <>
            <div className="z-30 fixed mt-[4rem] flex justify-center items-center w-24 left-0 h-[calc(100vh-10rem)]">
                <button
                onClick={() => Anterior()}
                disabled={zoomActivo}
                className={`rounded-full p-3 ${valorImg === 0 ? ("bg-neutral-700 text-neutral-500 cursor-not-allowed") : (`${zoomActivo ? ("bg-neutral-700 text-neutral-500 cursor-not-allowed") : ("bg-neutral-500 text-white")}`)} `}>
                    <Icono1 className='w-6' strokeWidth={3} />
                </button>
            </div>
            <div className="z-30 fixed mt-[4rem] flex justify-center items-center w-24 right-0 h-[calc(100vh-10rem)]">
                <button
                onClick={() => Siguiente()}
                disabled={zoomActivo}
                className={`rounded-full p-3 ${valorImg === ArrojarImg.length-1 ? ("bg-neutral-700 text-neutral-500 cursor-not-allowed") : (`${zoomActivo ? ("bg-neutral-700 text-neutral-500 cursor-not-allowed") : ("bg-neutral-500 text-white")}`)} `}>
                    <Icono2 className='w-6' strokeWidth={3} />
                </button>
            </div>
        </>
    )
}

export default BotonLaterales;