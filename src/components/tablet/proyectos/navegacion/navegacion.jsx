import { EllipsisVerticalIcon,ChevronDownIcon,MagnifyingGlassIcon,PlusIcon,CheckCircleIcon,UserPlusIcon,ArrowRightStartOnRectangleIcon,StarIcon} from '@heroicons/react/24/outline';
import Buscardor from "./layout/buscador";
import Encabezado from "./layout/encabezado";
import ModalOpcion from "./layout/modalOpcion";
import { Link,useParams  } from "react-router-dom";
import imgRojo from "../../../../assets/rojo.webp";
import imgAzul from "../../../../assets/azul.webp";
import imgVerde from "../../../../assets/verde.webp";
import NavBoton from "./layout/navBoton";
import Filtro from './layout/filto';
import { useState } from 'react';

const Botones = ({toggleModalOpcion,modalOpcionNavegacion,ActiveChat,toggleModalBoton,modalOpcionBoton,setModalOpcionBoton}) => {

    const iconsModalOpcionNavegacion = [CheckCircleIcon,StarIcon,UserPlusIcon,ArrowRightStartOnRectangleIcon]
    const { id } = useParams();
    const ImgPerfil = [imgRojo,imgAzul,imgVerde];
    const chats = ["distribuidor", "sistemas", "grupo123"];
    const [activeFiltro, setActiveFiltro] = useState("todos")

    return(
        <>
            <Encabezado Icono1={PlusIcon} Icono2={EllipsisVerticalIcon} toggleModalOpcion={toggleModalOpcion} modalOpcionNavegacion={modalOpcionNavegacion} />
            <ModalOpcion iconsModalOpcionNavegacion={iconsModalOpcionNavegacion} toggleModalOpcion={toggleModalOpcion} modalOpcionNavegacion={modalOpcionNavegacion} />
            <Buscardor Icono3={MagnifyingGlassIcon} ActiveChat={ActiveChat} />
            <Filtro activeFiltro={activeFiltro} setActiveFiltro={setActiveFiltro} />
            <NavBoton chats={chats} id={id} ImgPerfil={ImgPerfil} Link={Link} ActiveChat={ActiveChat} ChevronDownIcon={ChevronDownIcon} toggleModalBoton={toggleModalBoton} modalOpcionBoton={modalOpcionBoton} setModalOpcionBoton={setModalOpcionBoton} />
        </>
    )
}

export default Botones;