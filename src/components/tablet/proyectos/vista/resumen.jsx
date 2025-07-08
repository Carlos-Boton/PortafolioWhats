import { VideoCameraIcon,ChevronDownIcon,MagnifyingGlassIcon,ArrowRightIcon,EllipsisVerticalIcon,PlusIcon,CheckCircleIcon,InformationCircleIcon,XCircleIcon,MinusCircleIcon,MicrophoneIcon,HandThumbDownIcon,UserPlusIcon,ArrowRightStartOnRectangleIcon,CheckIcon,ChevronLeftIcon,ChevronRightIcon,ArrowDownTrayIcon,ArrowTurnUpRightIcon,ArrowTurnUpLeftIcon,FaceSmileIcon,StarIcon,XMarkIcon,FolderIcon,BellIcon,ClockIcon,ShieldCheckIcon,LockClosedIcon,HeartIcon,NoSymbolIcon,TrashIcon } from '@heroicons/react/24/outline';
import Encabezado from './layout/cuerpoChat/encabezado';
import ModalOpcion from './layout/cuerpoChat/modalOpcion';
import Mensaje from './layout/cuerpoChat/mensaje';
import EnviarChats from './layout/cuerpoChat/enviarChat';
import ModalInformacion from './layout/modalInformacion/modalInformacion';
import Img1 from "../../../../assets/Distribuidor.png";
import Img2 from "../../../../assets/sidebar.png";
import Img3 from "../../../../assets/anaranjado.webp";
import Img4 from "../../../../assets/rojo.webp";
import Img5 from "../../../../assets/verde.webp";
import Img6 from "../../../../assets/azul.webp";
import Img7 from "../../../../assets/morado.webp";
import inicio from "../../../../assets/InicioSesion.png";
import ciclo from "../../../../assets/ciclos.png";
import registro from "../../../../assets/Tecnm.jpg";
import { useState,useEffect,useRef } from 'react';
import ModalImg from './layout/modalImg/modalImg';
import Distribuidor from './layout/chats/distribuidor';
import Sistemas from './layout/chats/sistemas';

const Resumen = ({chatId,ImgPerfil,modalOpcionVista,toggleModalOpcionVista,ActiveChat,modalInformacion,activeModal,toggleModalInformacion,divRef,ModalRef,tamañoImg,ArrojarImg,setArrojarImg,animacionModalInformacion}) => {
    const scrollFinalRef = useRef(null);
    const imagenesGrupo123 = [Img3,Img4,Img5,Img6,Img7,Img1,Img2];
    const imagenesSistemas = [inicio,ciclo,registro];
    const imagenesDistribuidor = [Img1,Img2];
    const iconsEncabezado = [VideoCameraIcon,ChevronDownIcon,MagnifyingGlassIcon,EllipsisVerticalIcon];
    const iconsModalOpcion = [InformationCircleIcon,CheckCircleIcon,ClockIcon,XCircleIcon,MinusCircleIcon,TrashIcon];
    const iconsChat = [PlusIcon,FaceSmileIcon,MicrophoneIcon];
    const iconsModalInformacion = [XMarkIcon,FolderIcon,StarIcon,BellIcon,ClockIcon,ShieldCheckIcon,LockClosedIcon,HeartIcon,NoSymbolIcon,HandThumbDownIcon,TrashIcon];
    const iconsModalImg = [ArrowRightIcon,StarIcon,BellIcon,FaceSmileIcon,ArrowTurnUpRightIcon,ArrowDownTrayIcon,EllipsisVerticalIcon,XMarkIcon];
    const iconsNextImg = [ChevronLeftIcon,ChevronRightIcon]
    const iconsOpcionModalNav = [MagnifyingGlassIcon,HandThumbDownIcon];
    const [mostrarModalImg,setMostrarModalImg] = useState(false);
    const [valorImg,setValorImg] = useState("");
    const [opcionModalNav, setOpcionModalNav] = useState(false);
    const [imagenesCargadas, setImagenesCargadas] = useState(false);

    useEffect(() => {
  scrollFinalRef.current?.scrollIntoView({ behavior: "auto" });
}, [imagenesCargadas]);


    const toggleModalImg = (id,i) =>{
        if(id === 0){
            setMostrarModalImg(true);
            setValorImg(i)
        }
        if(id === 1){
            setMostrarModalImg(false);
            setOpcionModalNav(false);
        }
    }

    const Anterior = () => {
        if(valorImg > 0){
            let menos = valorImg - 1;
            setValorImg(menos);
            setOpcionModalNav(false);
        }
    }

    const Siguiente = () => {
        if(valorImg < ArrojarImg.length-1 ){
            let menos = valorImg + 1;
            setValorImg(menos);
            setOpcionModalNav(false);
        }
    }

    const MoverImg = (i) => {
        setValorImg(i)
        setOpcionModalNav(false);
    }
    
    useEffect(() => {
        setImagenesCargadas(false);
        setArrojarImg([]);

        const nuevasImagenes =
            chatId === "distribuidor" ? imagenesDistribuidor :
            chatId === "sistemas" ? imagenesSistemas :
            chatId === "grupo123" ? imagenesGrupo123 : [];

        setArrojarImg(nuevasImagenes);
    }, [chatId]);

    // detectar cambio real de imágenes
    useEffect(() => {
        if (ArrojarImg.length > 0) {
            setImagenesCargadas(true);
        }
    }, [ArrojarImg]);



    return(
        <>
            <div
            ref={divRef}
            className='flex relative overflow-y-hidden'>
                <div className={`${activeModal ? ("hidden") : ("min-w-[420px] flex-1 bg-fondo-personalizado h-screen relative overflow-y-hidden")}`}>
                
                    <Encabezado chatId={chatId} ImgPerfil={ImgPerfil} toggleModalOpcionVista={toggleModalOpcionVista} modalOpcionVista={modalOpcionVista} iconsEncabezado={iconsEncabezado}/>

                    <ModalOpcion iconsModalOpcion={iconsModalOpcion} modalOpcionVista={modalOpcionVista} toggleModalOpcionVista={toggleModalOpcionVista} toggleModalInformacion={toggleModalInformacion} />

                    <div className='h-[calc(100vh-8rem)] px-[4%] overflow-y-auto overflow-x-hidden touch-none'>
                        <Mensaje chatId={chatId} />

                        {chatId === "distribuidor" && imagenesCargadas && (
                            <Distribuidor CheckIcon={CheckIcon} ArrojarImg={ArrojarImg} toggleModalImg={toggleModalImg} />
                        )}
                        {chatId === "sistemas" && (<Sistemas CheckIcon={CheckIcon} ArrojarImg={ArrojarImg} toggleModalImg={toggleModalImg}  />)}
                        {chatId === "grupo123" && (<>XDDD</>)}
                        <div ref={scrollFinalRef} />
                        
                    </div>


                    <EnviarChats iconsChat={iconsChat} ActiveChat={ActiveChat} />
                </div>
                <div
                className={` ${activeModal ? ("flex-1 min-w-[420px]") : (` ${modalInformacion ? ("transition-all duration-300 ease-in-out w-[clamp(440px,40%,670px)] border-l border-l-neutral-600") : ("w-0")}`)}`} >
                    {modalInformacion && (
                            <ModalInformacion toggleModalInformacion={toggleModalInformacion} iconsModalInformacion={iconsModalInformacion} chatId={chatId} ImgPerfil={ImgPerfil} ModalRef={ModalRef} tamañoImg={tamañoImg} ArrojarImg={ArrojarImg} animacionModalInformacion={animacionModalInformacion} toggleModalImg={toggleModalImg} />
                    )}
                </div>
            </div>
            
            <div className={`transition-all duration-150 ease-in-out overflow-hidden ${mostrarModalImg ? ("opacity-100 bg-zinc-900 absolute w-screen h-screen top-0 left-0 z-50") : ("opacity-0")}`} >
                {mostrarModalImg && (
                    <ModalImg iconsModalImg={iconsModalImg} chatId={chatId} ImgPerfil={ImgPerfil} toggleModalImg={toggleModalImg} ArrojarImg={ArrojarImg} valorImg={valorImg} iconsNextImg={iconsNextImg} Anterior={Anterior} Siguiente={Siguiente} MoverImg={MoverImg} setOpcionModalNav={setOpcionModalNav} opcionModalNav={opcionModalNav} iconsOpcionModalNav={iconsOpcionModalNav} />
                )}
            </div>
            
        </>
    )
}

export default Resumen;