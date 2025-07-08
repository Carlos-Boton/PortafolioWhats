import { useState,useEffect,useRef } from 'react';
import { useLocation,useNavigate  } from "react-router-dom";
import Blanco from './blanco';
import ImgRojo from "../../../assets/rojo.webp";
import ImgAzul from "../../../assets/azul.webp";
import ImgVerde from "../../../assets/verde.webp";
import ImgNaranja from "../../../assets/anaranjado.webp";
import Sidebar from "./sidebar";
import BotonesProyecto from "../proyectos/navegacion/navegacion";
import VistaProyectos from "../proyectos/vista/resumen"
import NavEstados from '../sobremi/listaEstados/navEstados';
import EstadoDerecho from '../sobremi/estadosDerecho/vistaDerecho';
import Contacto from '../contacto/contacto';
import VistaDerecho from '../contacto/vistaDerecho';
import AjusteDerecho from '../ajustes/ajustesDerecho';
import AjusteIzquierdo from '../ajustes/ajustesIzquierdo';
import PerfilIzquierdo from '../Perfil/perfilIzquierdo';
import PerfilDerecho from '../Perfil/perfilDerecho';

const Interfaz = () => {
    const divRef = useRef();
    const ModalRef = useRef();
    const location = useLocation();
    const path = location.pathname;
    const ImgPerfil = [ImgRojo,ImgAzul,ImgVerde];
    const [modalOpcionNavegacion,setModalOpcionNavegacion] = useState(false);
    const [modalOpcionVista,setModalOpcionVista] = useState(false);
    const [modalInformacion, setModalInformacion] = useState(false);
    const [tamañoImg, setTamañoImg] = useState(0);
    const [ArrojarImg,setArrojarImg] = useState([]);
    const [activeModal, setActiveModal] = useState(false)
    const [animacionModalInformacion, setAnimacionModalInformacion] = useState(false);
    const [modalOpcionBoton, setModalOpcionBoton] = useState(null);
    let LeftContent = null;
    let RightContent = null;
    const navigate = useNavigate();

    useEffect(() => {
        if(modalInformacion){
            setTimeout(() => {
                setAnimacionModalInformacion(true);
            }, 300);
        }
    }, [modalInformacion,animacionModalInformacion]);

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
        const handleEsc = (e) => {
        if (e.key === "Escape") {
            if (modalInformacion) {
                setModalInformacion(false);
                setActiveModal(false);
                
            } else {
                navigate("/proyectos");
            }
        }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [navigate,modalInformacion,activeModal]);

    const toggleModalInformacion = (id) =>{
        if(id === 1) {
            setModalInformacion(true)
            setModalOpcionVista(false);
        }
        if(id === 2){
            setModalInformacion(false)
            setActiveModal(false);
            setAnimacionModalInformacion(false);
        }
    }

    const toggleModalOpcionNavegacion = () => {
        setModalOpcionBoton(null)
        if(modalOpcionVista){
            setModalOpcionVista(false)
        }
        setModalOpcionNavegacion(!modalOpcionNavegacion);
    }

    
    const toggleModalBoton = (index) => {
        if(modalOpcionNavegacion){
            setModalOpcionNavegacion(false)
        }
    setModalOpcionBoton((prev) => (prev === index ? null : index));

    };

    const toggleModalOpcionVista = () => {
        setModalOpcionBoton(null)
        if(modalOpcionNavegacion){
            setModalOpcionNavegacion(false)
        }
        setModalOpcionVista(!modalOpcionVista);
    }

    const ActiveChat = (id) => {
        if(id === 1){
            setModalOpcionNavegacion(false);
            setModalOpcionVista(false);
            setModalInformacion(false)
            setActiveModal(false);
            setAnimacionModalInformacion(false);
        }
        if (id === 2){
            setModalOpcionNavegacion(false);
            setModalOpcionVista(false);
        }
    }

    // Determinar contenido según la ruta
    if (path.startsWith("/proyectos")) {
        LeftContent = <BotonesProyecto toggleModalOpcion={toggleModalOpcionNavegacion} modalOpcionNavegacion={modalOpcionNavegacion} ActiveChat={ActiveChat} toggleModalBoton={toggleModalBoton} modalOpcionBoton={modalOpcionBoton} setModalOpcionBoton={setModalOpcionBoton} />;
        RightContent = path.split("/").length === 3 ? (
        <VistaProyectos chatId={path.split("/")[2]} ImgPerfil={ImgPerfil} modalOpcionVista={modalOpcionVista} toggleModalOpcionVista={toggleModalOpcionVista} ActiveChat={ActiveChat} modalInformacion={modalInformacion} activeModal={activeModal} toggleModalInformacion={toggleModalInformacion} divRef={divRef} ModalRef={ModalRef} tamañoImg={tamañoImg} ArrojarImg={ArrojarImg} setArrojarImg={setArrojarImg} useEffect={useEffect} animacionModalInformacion={animacionModalInformacion} />
        ) : (
        <Blanco />
        );
    } else if (path.startsWith("/sobre-mi")) {
        LeftContent = <NavEstados />;
        RightContent = <EstadoDerecho />;
    } else if (path.startsWith("/contacto")) {
        LeftContent = <Contacto/>;
        RightContent = <VistaDerecho/>;
    } else if (path.startsWith("/ajustes")) {
        LeftContent = <AjusteIzquierdo ImgNaranja={ImgNaranja} />;
        RightContent = <AjusteDerecho/>;
    } else if (path.startsWith("/perfil")) {
        LeftContent = <PerfilIzquierdo ImgNaranja={ImgNaranja}/>;
        RightContent = <PerfilDerecho/>;
    }
    

    return (
        <>
            <div>
                <Sidebar ActiveChat={ActiveChat} ImgNaranja={ImgNaranja} />
                {/* Navegacion de pagina, proyectos, sobre mi, contacto */}

                <div className='ml-16 h-screen bg-neutral-900 flex overflow-x-auto overflow-y-hidden'>
                    <div className="w-[clamp(340px,35%,570px)] min-w-[400px] border-r border-r-neutral-700">
                        <div>{LeftContent}</div>
                    </div>

                    <div className="flex-1 min-w-[420px] overflow-hidden">
                        <div>{RightContent}</div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Interfaz;        