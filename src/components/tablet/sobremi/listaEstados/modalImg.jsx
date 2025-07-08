

const ModalImg = ({toggleXimagen,Estados,valor,indicacion,toggleArrow,iconsModalImg,barrasCompletadas,barrasActivas,tiempo}) => {

    const [Icono1,Icono2,Icono3,Icono4,Icono5,Icono6,Icono7] = iconsModalImg;

    const guardaddo = Estados[valor].imagenes.length;

    return(
        <div className='absolute overflow-hidden w-screen h-screen top-0 left-0 z-50 bg-red-100 flex items-center justify-center '>
            <div className="absolute h-screen w-screen z-30 shadow-[inset_0_0_150px_rgba(0,0,0)]">

            </div>
            <div className=' w-full h-20 absolute top-0 flex justify-center'>
                <div
                className='absolute w-20 h-20 left-0 z-40 flex items-center justify-center'>
                    <Icono1
                    onClick={toggleXimagen}
                    className="w-6 text-white" strokeWidth={3} />
                </div>
                <div
                className='absolute w-20 h-20 right-0 z-40 flex items-center justify-center'>
                    <Icono2
                    onClick={toggleXimagen}
                    className="w-6 text-white" strokeWidth={3} />
                </div>
                
                <div className='w-[500px] z-30 flex flex-col'>
                    <div className="w-full h-full flex items-center justify-center space-x-1" >
                        {Estados[valor].imagenes.map((barra, index) => {
                            const anchoBarra = `${(100 / guardaddo).toFixed(0)}%`;
                            const estaActiva = barrasActivas[index];
                            const estaCompletada = barrasCompletadas[index];

                            return (
                                <div key={index} className="z-50" style={{ width: anchoBarra }}>
                                    <div className="h-2 w-full bg-neutral-500 rounded-md overflow-hidden shadow-inner">
                                        <div
                                        className="h-full bg-gradient-to-r from-white to-white transition-all"
                                        style={{
                                        width: estaCompletada || estaActiva ? '100%' : '0%',
                                        transitionDuration: estaActiva
                                            ? `${tiempo}ms`
                                            : '0ms', // incluso si estaCompletada, 0ms
                                        }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex w-full h-20 items-center'>
                        <div className='flex items-center justify-center w-20 h-full '>
                            <div className='rounded-full w-12 h-12'>
                                <img src={Estados[valor].foto} alt="" className="h-full object-contain" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className="text-xl text-white">{Estados[valor].nombre}</h3>
                            <h3 className="text-sm  text-neutral-400">{Estados[valor].Hora}</h3>
                        </div>
                    </div>
                </div>
            </div>
            
                { !(valor === 0 && indicacion === 0) && (
                    <div className='w-20 h-full absolute top-0 left-0 flex items-center justify-center z-30'>
                        <div
                        className='w-20 h-20 flex items-center justify-center'>
                            <Icono3
                            onClick={() => toggleArrow(2)}
                            className="w-6 text-white" strokeWidth={3} />
                        </div>
                    </div>
                )}
            
            <div className='w-20 h-full absolute top-0 right-0 flex items-center justify-center z-30'>
                <div
                className='w-20 h-20 flex items-center justify-center'>
                    <Icono4
                    onClick={() => toggleArrow(1)}
                    className="w-6 text-white" strokeWidth={3} />
                </div>
            </div>
            {Estados[valor].valor === "img" && (
                <>
                    <div className="absolute w-screen h-[350%] z-10 flex items-center justify-center overflow-hidden">
                        {/* Imagen de fondo */}
                        <img
                            src={Estados[valor].imagenes[indicacion]}
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Capa tipo vidrio encima */}
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-none shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] border border-black/20" />
                    </div>
                    <div className=' h-full z-20 flex items-center justify-center bg-white shadow-[0_0_50px_30px_rgba(0,0,0,0.7)]' >
                        <img src={Estados[valor].imagenes[indicacion]} alt="" className='h-full object-contain' />
                    </div>
                </>
            )}

            {Estados[valor].valor === "text" && (
                <div className="absolute text-white bg-green-500 w-screen h-[350%] z-10 flex items-center justify-center overflow-hidden">
                    <div className="w-[500px] h-screen flex items-center text-3xl">
                        {Estados[valor].imagenes[indicacion]}
                    </div>
                </div>
            )}

            <div className='w-full h-28 opacity-50 absolute bottom-0 z-50 flex px-6 items-center'>
                <button className="text-white rounded-full mx-2">
                    <Icono5 className="w-8" />
                </button>
                <button className="text-white rounded-full mx-2">
                    <Icono6 className="w-8" />
                </button>
                <div
                className="flex z-50 items-center bg-neutral-800 rounded-xl h-12 px-6 w-full">
                    <input
                        type="text"
                        placeholder="Escribe una respuesta..."
                        className="bg-neutral-800 text-white outline-none"
                    />
                </div>
                <button className="text-white rounded-full mx-2">
                    <Icono7 className="w-8" />
                </button>
            </div>
        </div>
    )
}

export default ModalImg;