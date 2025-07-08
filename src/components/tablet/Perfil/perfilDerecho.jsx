import { UserCircleIcon} from '@heroicons/react/24/solid';

const PerfilDerecho = () => {
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[420px]">
                <UserCircleIcon className='w-20 text-neutral-600 mb-6'/>
                <h3 className="text-3xl text-white mb-2">Perfil</h3>
            </div>
        </div>
    )
}
export default PerfilDerecho;