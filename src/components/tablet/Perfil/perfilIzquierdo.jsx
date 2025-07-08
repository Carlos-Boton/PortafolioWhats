import {MagnifyingGlassIcon,KeyIcon,LockClosedIcon,ChatBubbleLeftIcon,BellIcon,QuestionMarkCircleIcon,CalculatorIcon,ArrowRightEndOnRectangleIcon,PencilIcon} from '@heroicons/react/24/outline';

const PerfilIzquierdo = ({ImgNaranja}) => {
    return(
        <div className="w-full h-screen">
            <div className=" h-14 flex items-center px-4">
                <h3 className="text-xl font-semibold text-white mb-2">Perfil</h3>
            </div>

            <div className='px-4 my-10 flex items-center justify-center'>
                <div className='w-32 h-32 rounded-xl hover:bg-neutral-800' >
                    <img src={ImgNaranja} alt="perfil" />
                </div>
            </div>

            <div className='h-full w-full px-8'>
                <h3 className='text-neutral-400 mb-4'>Tu nombre</h3>
                <div className='flex justify-between text-white mb-6'>
                    <h3>Carlos Daniel</h3>
                    <PencilIcon className="w-6 text-neutral-400" strokeWidth={2} />
                </div>
                <h3 className='text-neutral-400 text-sm mb-10'>Este no es tu nombre de usauario o PIN. Este nombre será visivle para tus contactos de WhatsApp?</h3>
                <h3 className='text-neutral-400 mb-4'>Info.</h3>
                <div className='flex justify-between text-white mb-6'>
                    <h3>¡Hola! Estoy usando WhatsApp.</h3>
                    <PencilIcon className="w-6 text-neutral-400" strokeWidth={2} />
                </div>
            </div>
        </div>
    )
}
export default PerfilIzquierdo;