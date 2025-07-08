

const FooterDistribuidor = ({ImgDistribuidor,imgSidebar,setValorImg,valorImg,verImagen,setVerImagen}) => {


    return (
        <>
            <div className={`transition-all duration-150 ease-in-out ${valorImg === 'inicio' || verImagen === 1 ? ("") : ("absolute mr-[10rem] w-[5rem] h-[5rem]")}`}>
                <button
                onClick={() => {setValorImg("inicio");setVerImagen(1)}}
                className=""
                >
                    <div className={`mx-1 ${valorImg === 'inicio' || verImagen === 1 ? ("border-4  border-green-400 rounded-md w-[4rem] p-1 h-[4rem]") : ("bg-neutral-800 border-[3px] border-neutral-800 hover:border-[3px] hover:border-neutral-400 rounded-md w-[5rem] h-[5rem]")}`}>
                        <div className={`${valorImg === 'inicio' || verImagen === 1 ? ("relative overflow-hidden w-full h-full") : ("relative rounded-md overflow-hidden w-full h-full border-[6px] border-neutral-800 ")}`}>
                            <img src={ImgDistribuidor} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </button>
            </div>

            <div></div>

            <div className={`transition-all duration-150 ease-in-out ${valorImg === 'sidebar' || verImagen === 2 ? ("") : ("absolute ml-[10rem] w-[5rem] h-[5rem]")}`}>
                <button
                onClick={() => {setValorImg("sidebar");setVerImagen(2)}}
                className=""
                >
                    <div className={`${valorImg === 'sidebar' || verImagen === 2 ? ("border-4 border-green-400 rounded-md w-[4rem] p-1 h-[4rem]") : ("bg-neutral-800 border-[3px] border-neutral-800 hover:border-[3px] hover:border-neutral-400 rounded-md w-[5rem] h-[5rem]")}`}>
                        <div className={`${valorImg === 'sidebar' || verImagen === 2 ? ("relative overflow-hidden w-full h-full") : ("relative rounded-md overflow-hidden w-full h-full border-[6px] border-neutral-800 ")}`}>
                            <img src={imgSidebar} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default FooterDistribuidor;