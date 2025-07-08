import {InformationCircleIcon,CheckCircleIcon,ClockIcon,XCircleIcon,MinusCircleIcon,TrashIcon} from '@heroicons/react/24/outline';


const ModalOpcion = ({opcionVista,BotonNavegacion,setOpcionVista,toggleModalInformacion}) => {

    return(
        <>
            <div
            className={`${
            opcionVista ? "translate-x-0" : "-translate-x-full"
            } fixed inset-0 z-30`}
            onClick={() => setOpcionVista(false)}
            // Cierra el sidebar cuando se hace clic fuera de él
            ></div>
            <div className="absolute top-[55px] right-[27px] w-[230px] max-h-[270px] bg-neutral-800 rounded-xl p-2 flex flex-col z-50">
                {/* Botones del menú */}
                <button
                onClick={toggleModalInformacion}
                className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <InformationCircleIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Info. del contacto</p>
                </button>
                <button className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <CheckCircleIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Seleccionar Mensajes</p>
                </button>
                <button className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <ClockIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Mensaje temporales</p>
                </button>
                <button
                onClick={() =>  BotonNavegacion("blanco")}
                className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <XCircleIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Cerrar chat</p>
                </button>
                <hr className="border-neutral-600 m-1" />
                <button className="w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-50 rounded-lg p-2 flex">
                    <MinusCircleIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start " >Vaciar chat</p>
                </button>
                <button className="w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-50 rounded-lg p-2 flex">
                    <TrashIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Eliminar chat</p>
                </button>
            </div>
        </>
    )
}

export default ModalOpcion;