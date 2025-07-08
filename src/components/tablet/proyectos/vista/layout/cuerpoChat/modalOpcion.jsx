import { useState, useEffect } from "react";

const ModalOpcion = ({iconsModalOpcion,modalOpcionVista,toggleModalOpcionVista,toggleModalInformacion}) => {

    const [Icono1,Icono2,Icono3,Icono4,Icono5,Icono6,] = iconsModalOpcion;
    const [hijos, setHijos] = useState([false, false, false, false, false, false]);

    useEffect(() => {
        if (modalOpcionVista) {
            const nuevosHijos = [...hijos];
            const timeouts = [];

            for (let i = 0; i < 6; i++) {
            const timeout = setTimeout(() => {
                nuevosHijos[i] = true;
                setHijos([...nuevosHijos]);
            }, (i + 1) * 50);
            timeouts.push(timeout);
            }

            // Limpieza si el modal se cierra antes de terminar
            return () => timeouts.forEach(clearTimeout);
        } else {
            // Si el modal se cierra, reseteamos todos los hijos a false
            setHijos([false, false, false, false, false, false]);
        }
    }, [modalOpcionVista]);

    return(
        <>
            <div
            className={`${
            modalOpcionVista ? "translate-x-0" : "-translate-x-full"
            } fixed inset-0 z-20`}
            onClick={toggleModalOpcionVista}
            // Cierra el sidebar cuando se hace clic fuera de él
            ></div>

            <div className={`absolute overflow-hidden top-[55px] right-[27px] bg-neutral-800 rounded-xl  flex flex-col z-50 ${modalOpcionVista ? ("transition-all duration-200 ease-in-out p-2 w-[250px] h-[425px]") : ("transition-all duration-100 ease-in-out w-0 h-0")}`}>
                {/* Botones del menú */}
                <button
                onClick={() => toggleModalInformacion(1)}
                className={`whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${hijos[0] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono1 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Info. del contacto</p>
                </button>
                
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${hijos[0] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono2 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Seleccionar Mensajes</p>
                </button>
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${hijos[0] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono3 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Silenciar Notificaciones</p>
                </button>
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${hijos[1] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono3 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Mensaje temporales</p>
                </button>
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${hijos[1] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono3 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Añadir a Favoritos</p>
                </button>
                <button
                className={`whitespace-nowrap w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex ${hijos[1] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono4 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Cerrar chat</p>
                </button>
                <hr className="border-neutral-600 m-1" />
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-30 rounded-lg p-2 flex ${hijos[2] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono5 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start " >Reportar</p>
                </button>
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-30 rounded-lg p-2 flex ${hijos[3] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono6 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Bloquear</p>
                </button>
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-30 rounded-lg p-2 flex ${hijos[4] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono5 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start " >Vaciar chat</p>
                </button>
                <button className={`whitespace-nowrap w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-30 rounded-lg p-2 flex ${hijos[5] ? ("transition-all duration-100 ease-in-out opacity-100") : ("opacity-0")}`}>
                    <Icono6 className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Eliminar chat</p>
                </button>
            </div>
        </>
    )
}

export default ModalOpcion;