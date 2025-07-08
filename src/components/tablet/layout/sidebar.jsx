import { BriefcaseIcon, UserIcon, EnvelopeIcon, Cog6ToothIcon  } from '@heroicons/react/24/outline';
import { Link,useLocation  } from "react-router-dom";

const Sidebar = ({ActiveChat,ImgNaranja}) =>{
    const location = useLocation();

    return (
        <>
            <div
            onClick={() => ActiveChat(2)}
            className={`flex flex-col justify-between items-center border-r border-r-neutral-600 fixed w-[65px] text-center bg-zinc-800 top-0 left-0 h-screen shadow-md z-50`}
            >
                {/* Botones de la parte de arriba */}
                <div>
                    {/* Botones de opciones -portafolio-sobremi-contacto */}
                    <ul className='mt-4'>
                        <li className="relative group inline-block">
                            <Link
                                to="/proyectos"
                                className={`p-2 m-1 rounded-full flex items-center justify-center
                                ${location.pathname.startsWith("/proyectos") ? "bg-neutral-700 text-white pointer-events-none" : "text-neutral-400 hover:bg-neutral-700"}
                                `}
                            >
                                <BriefcaseIcon className="h-6 w-6" strokeWidth={2} />
                            </Link>

                            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-sm text-black bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Proyectos
                            </div>
                        </li>
                        <li className="relative group inline-block z-50">
                            <Link
                                to="/sobre-mi"
                                className={`p-2 m-1 rounded-full flex items-center justify-center
                                ${location.pathname.startsWith("/sobre-mi") ? "bg-neutral-700 text-white" : "text-neutral-400 hover:bg-neutral-700"}
                                `}
                            >
                                <UserIcon className="h-6 w-6" strokeWidth={2} />
                            </Link>
                            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-sm text-black bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Sobre Mi
                            </div>
                        </li>
                        <li className="relative group inline-block z-50">
                            <Link
                                to="/contacto"
                                className={`p-2 m-1 rounded-full flex items-center justify-center
                                ${location.pathname.startsWith("/contacto") ? "bg-neutral-700 text-white" : "text-neutral-400 hover:bg-neutral-700"}
                                `}
                            >
                                <EnvelopeIcon className="h-6 w-6" strokeWidth={2} />
                            </Link>
                            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-sm text-black bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Contacto
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Botones de la parte de abajo */}
                <div>
                    {/* Botones de opciones - */}
                    <ul className='mb-4'>
                        <hr className='border-neutral-600 m-2'/>
                        <li className="relative group inline-block">
                            <Link
                                to="/ajustes"
                                className={`p-2 m-1 rounded-full flex items-center justify-center
                                ${location.pathname.startsWith("/ajustes") ? "bg-neutral-700 text-white" : "text-neutral-400 hover:bg-neutral-700"}
                                `}
                            >
                                <Cog6ToothIcon className="h-6 w-6" strokeWidth={2} />
                            </Link>
                            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-sm text-black bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Ajustes
                            </div>
                        </li>
                        <li className="relative group inline-block">
                            <Link
                                to="/perfil"
                                className={`p-1 m-1 rounded-full flex items-center justify-center
                                ${location.pathname.startsWith("/perfil") ? "bg-neutral-700 text-white" : "text-neutral-400 hover:bg-neutral-700"}
                                `}
                            >
                                <img src={ImgNaranja} alt="" className='w-8' />
                            </Link>
                            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-sm text-black bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Perfil
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;