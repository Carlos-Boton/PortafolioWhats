import BotonLaterales from "./botonLaterales";
import FooterImg from "./footerImg";
import ModalOpcion from "./modalOpcion";
import NavModal from "./navModal";
import { useState, useRef } from "react";

const ModalImg = ({iconsModalImg,chatId,ImgPerfil,toggleModalImg,ArrojarImg,valorImg,iconsNextImg,Anterior,Siguiente,MoverImg,setOpcionModalNav,opcionModalNav,iconsOpcionModalNav}) => {

    const [zoomActivo, setZoomActivo] = useState(false);
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });
    const contenedorRef = useRef(null);

    const manejarClickImagen = (e) => {
        if (!zoomActivo && contenedorRef.current) {
            const rect = contenedorRef.current.getBoundingClientRect();

            // Centro del contenedor
            const centroX = rect.left + rect.width / 2;
            const centroY = rect.top + rect.height / 2;

            // Punto donde se hizo click
            const clickX = e.clientX;
            const clickY = e.clientY;

            // Distancia del click al centro (para mover la imagen en sentido opuesto)
            const desplazamientoX = (centroX - clickX) * 0;
            const desplazamientoY = (centroY - clickY) * 0.5;

            setPosicion({ x: desplazamientoX, y: desplazamientoY });
            setZoomActivo(true);
        } else {
            setZoomActivo(false);
            setPosicion({ x: 0, y: 0 });
        }
    };
    return(
        <>
            <NavModal iconsModalImg={iconsModalImg} chatId={chatId} ImgPerfil={ImgPerfil} toggleModalImg={toggleModalImg} zoomActivo={zoomActivo} setOpcionModalNav={setOpcionModalNav} opcionModalNav={opcionModalNav} />

            <ModalOpcion chatId={chatId} opcionModalNav={opcionModalNav} iconsOpcionModalNav={iconsOpcionModalNav} setOpcionModalNav={setOpcionModalNav} />

            <BotonLaterales Anterior={Anterior} Siguiente={Siguiente} iconsNextImg={iconsNextImg} valorImg={valorImg} ArrojarImg={ArrojarImg} zoomActivo={zoomActivo} />

            <div className={`transition-all duration-200 ease-in-out ${zoomActivo ? ("h-screen") : ("h-[calc(100vh-10rem)] mt-[4rem]")} overflow-hidden py-6`}>
                <div
                    className="flex relative justify-center items-center w-full h-full"
                    ref={contenedorRef}
                >
                    {/* Fondo que cierra el modal */}
                    
                    {!zoomActivo && (
                        <div
                        onClick={() => toggleModalImg(1, null)}
                        className="absolute w-screen h-screen z-10"
                        ></div>
                    )}

                    {/* Imagen que hace zoom en el punto clicado */}
                    <img
                    onClick={manejarClickImagen}
                    src={ArrojarImg[valorImg]}
                    alt=""
                    className={`z-20 h-full object-contain transition-transform duration-300 ease-in-out ${
                        zoomActivo ? "cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    style={{
                        transform: zoomActivo
                        ? `scale(1.5) translate(${posicion.x}px, ${posicion.y}px)`
                        : "scale(1) translate(0px, 0px)",
                    }}
                    />
                </div>
            </div>

            <FooterImg ArrojarImg={ArrojarImg} valorImg={valorImg} MoverImg={MoverImg} zoomActivo={zoomActivo} />
        </>
    )
}

export default ModalImg;