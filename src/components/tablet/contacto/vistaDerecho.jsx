import { ChatBubbleLeftEllipsisIcon} from '@heroicons/react/24/solid';

const vistaDerecho = () => {
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[420px]">
                <ChatBubbleLeftEllipsisIcon className='w-20 text-neutral-600 mb-6'/>
                <h3 className="text-3xl text-white mb-2">Mis Contacos</h3>
                <h4 className="text-neutral-400 text-sm text-center">Para comunicarse, estan mis contactos a lado izquiero, los contactos estan actulizados</h4>
            </div>
        </div>
    )
}
export default vistaDerecho;