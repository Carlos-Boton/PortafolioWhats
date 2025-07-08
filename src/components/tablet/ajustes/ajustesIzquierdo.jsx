import {MagnifyingGlassIcon,KeyIcon,LockClosedIcon,ChatBubbleLeftIcon,BellIcon,QuestionMarkCircleIcon,CalculatorIcon,ArrowRightEndOnRectangleIcon} from '@heroicons/react/24/outline';

const AjusteIzquierdo = ({ImgNaranja}) => {
    return(
        <div className="w-full h-screen">
            <div className=" h-14 flex items-center px-4">
                <h3 className="text-xl font-semibold text-white mb-2">Ajustes</h3>
            </div>

            <div className="px-4 pt-2 pb-3 mb-2">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4 text-neutral-200" strokeWidth={3} />
                    <input
                    className="pl-9 pr-2 rounded-full bg-neutral-700 w-full h-10 text-white placeholder-neutral-400
                    focus:outline-none focus:border-2 focus:border-green-500 focus:bg-zinc-900"
                    type="text"
                    placeholder="Buscar en los ajustes"
                    />
                </div>
            </div>

            <div className='px-4 mb-2'>
                <div className='w-full h-24 flex items-center rounded-xl hover:bg-neutral-800' >
                    <div className='h-full w-24 p-3' >
                        <img src={ImgNaranja} alt="perfil" />
                    </div>
                    <div>
                        <h3 className='text-white text-start'>Carlos Daniel</h3>
                        <h3 className='text-neutral-400 text-start text-sm'>¡Hola! Estoy usando WhatsApp.</h3>
                    </div>
                </div>
            </div>

            <hr className='mx-6 border border-neutral-700 mb-3' />

            <div className='w-full h-full px-4' >
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2'>
                    <div><KeyIcon className="w-6 text-neutral-400 mr-4" strokeWidth={2} /></div>
                    <div>
                        <h3 className='text-white'>Cuenta</h3>
                        <h3 className='text-neutral-400'>Notificaciones de seguridad, informacion de la cuenta</h3>
                    </div>
                </div>
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2'>
                    <div><LockClosedIcon className="w-6 text-neutral-400 mr-4" strokeWidth={2} /></div>
                    <div>
                        <h3 className='text-white'>Privacidad</h3>
                        <h3 className='text-neutral-400'>Contactos bloqueados, mensajes temporales</h3>
                    </div>
                </div>
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2'>
                    <div><ChatBubbleLeftIcon className="w-6 text-neutral-400 mr-4" strokeWidth={2} /></div>
                    <div>
                        <h3 className='text-white'>Chats</h3>
                        <h3 className='text-neutral-400'>Tema, Fondo, ajustes del chat</h3>
                    </div>
                </div>
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2'>
                    <div><BellIcon className="w-6 text-neutral-400 mr-4" strokeWidth={2} /></div>
                    <div>
                        <h3 className='text-white'>Notificaciones</h3>
                        <h3 className='text-neutral-400'>Notificaciones de mensajes</h3>
                    </div>
                </div>
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2'>
                    <div><CalculatorIcon className="w-6 text-neutral-400 mr-4 rotate-270" strokeWidth={2} /></div>
                    <div>
                        <h3 className='text-white'>Atajos del teclado</h3>
                        <h3 className='text-neutral-400'>Acciones rápidas</h3>
                    </div>
                </div>
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2'>
                    <div><QuestionMarkCircleIcon className="w-6 text-neutral-400 mr-4" strokeWidth={2} /></div>
                    <div>
                        <h3 className='text-white'>Ayuda</h3>
                        <h3 className='text-neutral-400'>Centro de ayuda, contáctanos, politica de privacidad</h3>
                    </div>
                </div>
                <div className='min-h-16 max-h-32 rounded-xl hover:bg-neutral-800 flex items-center px-4 py-2 text-red-500'>
                    <div><ArrowRightEndOnRectangleIcon className="w-6  mr-4" strokeWidth={2} /></div>
                    <div>
                        <h3 className=''>Cerrar sesión</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AjusteIzquierdo;