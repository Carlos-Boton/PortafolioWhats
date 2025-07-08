import { ChevronDownIcon,VideoCameraIcon,EllipsisVerticalIcon,MagnifyingGlassIcon,PlusIcon,CheckIcon,ArrowRightIcon,ChevronLeftIcon,ChevronRightIcon,ArrowDownTrayIcon,ArrowTurnUpRightIcon,FaceSmileIcon,StarIcon,XMarkIcon,FolderIcon,BellIcon,ClockIcon,ShieldCheckIcon,LockClosedIcon,HeartIcon,NoSymbolIcon,HandThumbDownIcon,TrashIcon } from '@heroicons/react/24/outline';
import ImgDistribuidor from '../../assets/Distribuidor.png';
import imgSidebar from '../../assets/sidebar.png';
import { useState,useEffect,useRef } from 'react';
import Navegacion from "./navegacion";
import Sidebar from "../layout/sidebar";
import Vista from "./vista";
import ModalImagen from './modalImagen';
import ModalInformacion from './modalInformacion';
import Whatasap from '../../assets/whatasap.png';
import imgRojo from '../../assets/rojo.webp'
import imgAzul from '../../assets/azul.webp'

const Interfaz = () => {
    const divRef = useRef();
    const ModalRef = useRef();
    const iconModalInformacion = [StarIcon,BellIcon,ClockIcon,ShieldCheckIcon,LockClosedIcon,HeartIcon,NoSymbolIcon,HandThumbDownIcon,TrashIcon];
    const mensajeModal = ["¡Hola! ¡Hola!, ¿Como has estado compañero?","Preciona ESC para salir de esta pantalla","¿Te diste Cuenta de las caras al inicio?"];
    const nombreProyectos = ["Distribuidor","Sistema Tec","Configuración"];
    const imagenesDistribuidor = [ImgDistribuidor,imgSidebar];
    const [chatNavegacion, setChatNavegacion] = useState("blanco");
    const [valorImg, setValorImg] = useState("")
    const [tamañoImg, setTamañoImg] = useState(20);
    const [mostrarImg, setMostrarImg] = useState(false);
    const [activeModal, setActiveModal] = useState(false)
    const [verImagen, setVerImagen] = useState(0);
    const [opcionNavegacion, setOpcionNavegacion] = useState(false)
    const [opcionVista ,setOpcionVista] = useState(false);
    const [modalInformacion, setModalInformacion] = useState(false);
    const [ArrojarImg,setArrojarImg] = useState([]);

    useEffect(() => {
        if (chatNavegacion === "distribuidor") {
            setArrojarImg(imagenesDistribuidor);
        }
        if (chatNavegacion === "sistema"){
            setArrojarImg([]);
        }
    }, [chatNavegacion]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                if (modalInformacion) {
                    setModalInformacion(false);
                    setActiveModal(false);
                    
                } else {
                    setChatNavegacion("blanco");
                }
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [setChatNavegacion,modalInformacion,setModalInformacion,setActiveModal]);


    useEffect(() => {
        if (!modalInformacion) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                if (width < 805) {
                setActiveModal(true);
                }
                if (width > 806) {
                setActiveModal(false);
                }
            }
        });

        if (divRef.current) {
        observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, [modalInformacion,activeModal]);

    useEffect(() => {
        const observerM = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                setTamañoImg(width);
            }
        });

        if (ModalRef.current) {
        observerM.observe(ModalRef.current);
        }

        return () => {
            if (ModalRef.current) {
                observerM.unobserve(ModalRef.current);
            }
        };
    }, [modalInformacion]);

    const toggleModalInformacion = () =>{
        setModalInformacion(true);
        setOpcionVista(false);
    }

    const toggleVistaInformacion = () => {
        setModalInformacion(false);
        setActiveModal(false)
    }

    const Active = () => {
        setOpcionNavegacion(false)
        setOpcionVista(false)
    }

    const BotonNavegacion = (id) =>{
        setChatNavegacion(id)
        setModalInformacion(false)
        setOpcionNavegacion(false)
        setOpcionVista(false)
    }

    const toggleOpcionNavegacion = () => {
        setOpcionNavegacion(!opcionNavegacion);
    }

    const toggleOpcionVista = () => {
        setOpcionVista(!opcionVista);
    }

    const Siguiente = () => {
        if(verImagen < 2){
            setVerImagen(verImagen + 1)
            setValorImg("")
        }
    }

    const Anterior = () => {
        if(verImagen > 1){
            setVerImagen(verImagen - 1)
            setValorImg("")
        }
    }

    return (
        <>
            <div className={`${mostrarImg ? ("hidden") : ("bg-neutral-900 text-white")}`}>

                <Sidebar/>

                <div className='ml-16 flex h-screen overflow-x-auto overflow-y-hidden'>
                    <div className="w-[clamp(340px,35%,570px)] min-w-[340px] border-r border-r-neutral-700">
                        <Navegacion
                        Lupa={MagnifyingGlassIcon} Mas={PlusIcon} Opciones={EllipsisVerticalIcon}
                        opcionNavegacion={opcionNavegacion} toggleOpcionNavegacion={toggleOpcionNavegacion}
                        setOpcionVista={setOpcionVista} BotonNavegacion={BotonNavegacion}
                        chatNavegacion={chatNavegacion} setOpcionNavegacion={setOpcionNavegacion}
                        Active={Active} imgRojo={imgRojo} imgAzul={imgAzul} nombreProyectos={nombreProyectos}
                        />
                    </div>
                    <div
                    ref={divRef}
                    className='flex flex-1'>
                        {activeModal ? (
                            <>
                            </>
                        ) : (
                            <>
                                <div className="relative flex-1 min-w-[420px] text-black overflow-hidden">
                                    <Vista 
                                    FlechaAbajo={ChevronDownIcon} Camara={VideoCameraIcon}
                                    Opciones={EllipsisVerticalIcon} Lupa={MagnifyingGlassIcon}
                                    chatNavegacion={chatNavegacion} ImgDistribuidor={ImgDistribuidor}
                                    Palomita={CheckIcon} setMostrarImg={setMostrarImg}
                                    setValorImg={setValorImg} imgSidebar={imgSidebar}
                                    verImagen={verImagen} setVerImagen={setVerImagen}
                                    toggleOpcionVista={toggleOpcionVista} opcionVista={opcionVista}
                                    setOpcionNavegacion={setOpcionNavegacion} BotonNavegacion={BotonNavegacion}
                                    setOpcionVista={setOpcionVista} Active={Active}
                                    toggleModalInformacion={toggleModalInformacion} Whatasap={Whatasap}
                                    imgRojo={imgRojo} imgAzul={imgAzul} nombreProyectos={nombreProyectos}
                                    />
                                </div>
                            </>
                        )}

                        {modalInformacion && (
                            <>
                                <div
                                className={`${activeModal ? ("flex-1 min-w-[536px]") : ("w-[clamp(350px,40%,590px)] border-l border-l-neutral-700")}`} >
                                    <ModalInformacion XMarkIcon={XMarkIcon} toggleVistaInformacion={toggleVistaInformacion} imgRojo={imgRojo} imgAzul={imgAzul} chatNavegacion={chatNavegacion} nombreProyectos={nombreProyectos} mensajeModal={mensajeModal} FolderIcon={FolderIcon} 
                                    imagenesDistribuidor={imagenesDistribuidor} ModalRef={ModalRef} tamañoImg={tamañoImg} iconModalInformacion={iconModalInformacion}
                                    ArrojarImg={ArrojarImg}
                                    />
                                </div>
                            </>
                        )}
                        
                    </div> 
                </div>
            </div>
            {mostrarImg && (
                <>
                    <ModalImagen
                    ArrowRightIcon={ArrowRightIcon} chatNavegacion={chatNavegacion}
                    setMostrarImg={setMostrarImg} valorImg={valorImg} ImgDistribuidor={ImgDistribuidor}
                    ChevronLeftIcon={ChevronLeftIcon} ChevronRightIcon={ChevronRightIcon} imgSidebar={imgSidebar}
                    setValorImg={setValorImg} ArrowDownTrayIcon={ArrowDownTrayIcon}
                    ArrowTurnUpRightIcon={ArrowTurnUpRightIcon} FaceSmileIcon={FaceSmileIcon}
                    StarIcon={StarIcon} XMarkIcon={XMarkIcon} Siguiente={Siguiente}
                    Anterior={Anterior} verImagen={verImagen} setVerImagen={setVerImagen}
                    nombreProyectos={nombreProyectos} imgRojo={imgRojo} imgAzul={imgAzul}
                    />
                </>
            )}

            
        </>
    )
}

export default Interfaz;        