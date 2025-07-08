

const FooterImg = ({ArrojarImg,valorImg,MoverImg,zoomActivo}) => {

    return(
        <>
            {!zoomActivo && (
                <div className="transition-all duration-500 ease-in-out fixed button-0 border-t border-t-neutral-800 w-full h-[6rem] flex justify-center items-center overflow-x-auto overflow-y-hidden z-20">

                    {ArrojarImg.map((img, realIndex) => {
                        // Lógica de posición
                        const posicion = realIndex - valorImg;

                        let style = {};
                        if (posicion < 0) {
                        // Lado izquierdo
                        style = { marginRight: `${Math.abs(posicion) * 11}rem` };
                        } else if (posicion > 0) {
                        // Lado derecho
                        style = { marginLeft: `${posicion * 11}rem` };
                        }

                        return (
                        <div
                            key={realIndex}
                            className="transition-all duration-150 ease-in-out absolute w-[5rem] h-[5rem] flex justify-center"

                            style={style}
                        >
                            <button onClick={() => MoverImg(realIndex)}>
                            <div
                                className={`rounded-md ${
                                realIndex === valorImg
                                    ? "w-[4rem] h-[4rem] border-4 border-green-400 p-1"
                                    : "w-[5rem] h-[5rem] bg-neutral-800 border-[3px] border-neutral-800 hover:border-neutral-400"
                                }`}
                            >
                                <div
                                className={`relative rounded-md overflow-hidden w-full h-full ${
                                realIndex === valorImg
                                    ? ""
                                    : "border-[6px] border-neutral-800"
                                }`}>
                                <img
                                    src={img}
                                    alt=""
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                                </div>
                            </div>
                            </button>
                        </div>
                        );
                    })}
                </div>
            )}
        </>
        
    )
}

export default FooterImg;