import {CheckCircleIcon,StarIcon,UserPlusIcon,ArrowRightStartOnRectangleIcon} from '@heroicons/react/24/outline';

const ModalOpcionNavegacion = ({setOpcionNavegacion,opcionNavegacion}) => {

    return (
        <>
            <div
            className={`${
            opcionNavegacion ? "translate-x-0" : "-translate-x-full"
            } fixed inset-0 z-40`}
            onClick={() => setOpcionNavegacion(false)}
            // Cierra el sidebar cuando se hace clic fuera de él
            ></div>
            <div className="absolute top-[55px] left-[clamp(300px,35%,570px)] w-[230px] max-h-[270px] bg-neutral-800 rounded-xl p-2 flex flex-col z-50">
                {/* Botones del menú */}
                <button className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <UserPlusIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Nuevo grupo</p>
                </button>
                <button className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <StarIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Mensajes destacados</p>
                </button>
                <button className="w-full text-neutral-400 hover:bg-neutral-700 rounded-lg p-2 flex">
                    <CheckCircleIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Seleccionar chats</p>
                </button>
                <hr className="border-neutral-600 m-1" />
                <button className="w-full text-neutral-400 hover:text-red-300 hover:bg-pink-950 hover:bg-opacity-50 rounded-lg p-2 flex">
                    <ArrowRightStartOnRectangleIcon className='w-6 mr-2' strokeWidth={2}/>
                    <p className="text-start" >Cerrar sesión</p>
                </button>
            </div>
        </>
    )
}

export default  ModalOpcionNavegacion