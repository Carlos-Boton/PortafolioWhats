import { ChevronDownIcon, VideoCameraIcon, EllipsisVerticalIcon, ArrowLeftIcon, MagnifyingGlassIcon, PlusCircleIcon, CheckCircleIcon, UserPlusIcon, ArrowRightStartOnRectangleIcon, CheckIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, ArrowDownTrayIcon, ArrowTurnUpRightIcon, FaceSmileIcon, StarIcon, XMarkIcon, FolderIcon, BellIcon, ClockIcon, PencilIcon, PhotoIcon, ShieldCheckIcon, LockClosedIcon,MapPinIcon,PhoneIcon,EnvelopeIcon,CodeBracketIcon} from '@heroicons/react/24/solid';


const Contacto = () => {

    return(
        <>
            <div className="h-screen w-full">

                <div className="h-16 flex items-center justify-between text-white mx-4">
                    <div>
                        <h3 className="font-semibold text-xl">Contacto</h3>
                    </div>
                </div>

                <div className='w-full mt-10 px-2'>
                    <div className='w-full h-16 hover:bg-neutral-800 rounded-xl flex text-neutral-400 items-center px-2'>
                        <MapPinIcon className='w-5 mr-2'/>
                        <p className='text-white font-bold' >San Francisco de Campeche, Campeche</p>
                    </div>
                    <div className='w-full h-16 hover:bg-neutral-800 rounded-xl flex text-neutral-400 items-center px-2'>
                        <PhoneIcon className='w-5 mr-2'/>
                        <p className='text-white font-bold'>+52 981 177 15 71</p>
                    </div>
                    <div className='w-full h-16 hover:bg-neutral-800 rounded-xl flex text-neutral-400 items-center px-2'>
                        <EnvelopeIcon className='w-5 mr-2'/>
                        <p className='text-white font-bold'>carldfco@gmail.com</p>
                    </div>
                    <div className='w-full h-16 hover:bg-neutral-800 rounded-xl flex text-neutral-400 items-center px-2'>
                        <CodeBracketIcon className='w-5 mr-2'/>
                        <p className='text-white font-bold'>Git Hub</p>
                    </div>
                </div>


                <div className='flex justify-center mt-6'>
                    <LockClosedIcon className='w-3 text-neutral-400 mx-1' />
                    <div className='text-neutral-400 text-xs text-center flex'>Tendra mas actuzaliciones de estado este <p className='ml-1 text-green-500 font-bold'>portafolio</p> </div>
                </div>

            </div>
        </>
    )
}
export default Contacto;