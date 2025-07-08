
const vistaDerecho = () => {
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[420px]">
                <div className='relative w-20 h-20 mb-10 flex items-center justify-center' >
                    <div className='absolute border-[5px] border-neutral-600 w-[62px] h-[62px] rounded-full'></div>
                    <div
                        className="absolute w-full h-[10px]"
                        style={{
                            transform: `rotate(270deg)`,
                            background: 'linear-gradient(to right, transparent 50%, #18181b 50%)',
                        }}
                    ></div>
                    <div
                        className="absolute w-full h-[10px]"
                        style={{
                            transform: `rotate(150deg)`,
                            background: 'linear-gradient(to right, transparent 50%, #18181b 50%)',
                        }}
                    ></div>
                    <div
                        className="absolute w-full h-[10px]"
                        style={{
                            transform: `rotate(30deg)`,
                            background: 'linear-gradient(to right, transparent 50%, #18181b 50%)',
                        }}
                    ></div>
                    <div className='bg-neutral-600 w-10 h-10 rounded-full z-10'></div>
                </div>
                <h3 className="text-3xl text-white mb-2">Vista de Estados</h3>
                <h4 className="text-neutral-400 text-sm text-center">Informacion sobre mi y fotos de los proyectos que se añadio al portafolio</h4>
            </div>
        </div>
    )
}
export default vistaDerecho;