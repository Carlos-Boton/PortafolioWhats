import { ChevronDownIcon, VideoCameraIcon, EllipsisVerticalIcon, ArrowLeftIcon, MagnifyingGlassIcon, PlusCircleIcon, CheckCircleIcon, UserPlusIcon, ArrowRightStartOnRectangleIcon, CheckIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, ArrowDownTrayIcon, ArrowTurnUpRightIcon, FaceSmileIcon, StarIcon, XMarkIcon, FolderIcon, BellIcon, ClockIcon, PencilIcon, PhotoIcon, ShieldCheckIcon, LockClosedIcon, HeartIcon, NoSymbolIcon, HandThumbDownIcon, TrashIcon, DocumentIcon, PaperAirplaneIcon, PlusIcon } from '@heroicons/react/24/outline';
import distribuidor from '../../../../assets/Distribuidor.png';
import sidebar from '../../../../assets/sidebar.png';
import inicio from '../../../../assets/InicioSesion.png';
import ciclo from '../../../../assets/ciclos.png';
import Tecnm from '../../../../assets/Tecnm.jpg';
import Img1 from "../../../../assets/anaranjado.webp";
import Img2 from "../../../../assets/rojo.webp";
import Img3 from "../../../../assets/verde.webp";
import Img4 from "../../../../assets/azul.webp";
import Img5 from "../../../../assets/morado.webp";
import { useState, useEffect } from 'react';
import ModalImg from './modalImg';
import { div } from 'framer-motion/client';

const NavEstados = () => {

    const [valor, setValor] = useState(0);
    const [indicacion, setIndicacion] = useState(0);
    const [modalOpcion, setModalOpcion] = useState("")
    const [modalImagenes, setModalImagenes] = useState(false);
    const [valorIndicacion, setValorIndicacion] = useState(false)
    const [barrasActivas, setBarrasActivas] = useState([]);
    const [barrasCompletadas, setBarrasCompletadas] = useState([]);
    const tiempo = 5000;
    const iconsModalImg = [ArrowLeftIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon, FaceSmileIcon, DocumentIcon, PaperAirplaneIcon];
    const Estados = [
        {
            nombre: "Sobre mi", foto: Img1, Hora: "Desde 12/04/25 a las 1:12p.m.", valor: "text", imagenes: [
                `¡Hola! Mi nombre es Carlos Daniel Francisco Botón, desarrollador Full Stack Jr.
            Me encanda construir apps funcionales, sobre todo la logica que tienen las aplicaciones, el comprender como funciona y desarrollarlo es un reto increible`,
                "Además, estoy en constante exploración de nuevas tecnologías y herramientas. Me motiva seguir aprendiendo y uno de mis objetivos es alcanzar el conocimiento necesario para desarrollar proyectos que integren inteligencia artificial.",
                "Actualmente trabajo en Permaducto, S.A de C.v, la empresa no se especializa en desarrollo de aplicaciones, si no mas que nada en la infraestructura terrestre y mariana",
                "y me encantaria formar parte de la empresa para desarollar sistemas complejos, llendo paso a paso"
            ]
        },
        { nombre: "Distribuidor", foto: Img2, Hora: "Desde 22/03/25 a las 3:35p.m.", valor: "img", imagenes: [distribuidor, sidebar] },
        { nombre: "Sistemas", foto: Img4, Hora: "Desde 24/05/2024 a las 9:45a.m.", valor: "img", imagenes: [inicio, ciclo, Tecnm] },
        { nombre: "grupo123", foto: Img3, Hora: "Desde 17/02/2025 a las 11:25a.m.", valor: "img", imagenes: [Img1, Img2, Img3, Img4, Img5] },
    ];
    const ChecEstados = Estados.length;
    const ChecImagenesEstados = Estados[valor].imagenes.length



    useEffect(() => {
        if (!valorIndicacion) return
        setIndicacion(ChecImagenesEstados - 1)
        setValorIndicacion(false)
    }, [valorIndicacion])

    useEffect(() => {
        const total = Estados[valor]?.imagenes?.length || 0;
        setBarrasActivas(Array(total).fill(false));
        setBarrasCompletadas(Array(total).fill(false));
    }, [valor]);


    useEffect(() => {
        const timeouts = [];

        if (modalImagenes) {
            for (let i = 1; i < 2; i++) {
                const timeout = setTimeout(() => {
                    toggleArrow(1);
                }, i * tiempo);
                timeouts.push(timeout);
            }
        }

        // Función de limpieza que cancela los timeouts si el modal se cierra
        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [modalImagenes, indicacion]);

    useEffect(() => {
        if (!modalImagenes) return;

        // 🔁 Esperamos un momento para que se monte el grupo correctamente
        const timerInicio = setTimeout(() => {
            const nuevasActivas = Estados[valor].imagenes.map((_, i) => i === indicacion);
            setBarrasActivas(nuevasActivas);
        }, 100); // pequeño delay para que se monte el DOM

        // Si ya está completada, no animes nada
        if (barrasCompletadas[indicacion]) return;

        const timer = setTimeout(() => {
            setBarrasCompletadas((prev) => {
                const nuevas = [...prev];
                nuevas[indicacion] = true;
                return nuevas;
            });

            setBarrasActivas((prev) => {
                const nuevas = [...prev];
                nuevas[indicacion] = false;
                return nuevas;
            });
        }, tiempo);

        return () => clearTimeout(timer);
    }, [indicacion, modalImagenes, valor]);

    useEffect(() => {
        if (!Estados[valor]) return;

        const totalImagenes = Estados[valor].imagenes.length;

        // Reiniciar todas las barras a false
        setBarrasActivas(Array(totalImagenes).fill(false));
        setBarrasCompletadas(Array(totalImagenes).fill(false));
    }, [valor]);

    const toggleArrow = (i) => {
        if (i === 1) {
            if (indicacion < ChecImagenesEstados - 1) {
                // ✅ Marca la barra actual como completada
                setBarrasCompletadas((prev) => {
                    const nuevas = [...prev];
                    nuevas[indicacion] = true;
                    return nuevas;
                });

                // 🕒 Espera 20ms para permitir que React pinte la barra completa
                setTimeout(() => {
                    setIndicacion((prev) => prev + 1);
                }, 20); // este pequeño delay es crucial

                return;
            }

            if (valor < ChecEstados - 1) {
                setBarrasCompletadas((prev) => {
                    const nuevas = [...prev];
                    nuevas[indicacion] = true;
                    return nuevas;
                });

                setTimeout(() => {
                    setValor((prev) => prev + 1);
                    setIndicacion(0);
                }, 20);

                return;
            }

            // Final
            setBarrasCompletadas((prev) => {
                const nuevas = [...prev];
                nuevas[indicacion] = true;
                return nuevas;
            });

            setTimeout(() => {
                setModalImagenes(false);
                setIndicacion(0);
            }, 20);
        }
        if (i === 2) {
            if (valor === 0 && indicacion === 0) return;

            if (indicacion === 0) {
                setValor(valor - 1);
                setValorIndicacion(true); // asumo que esto salta al final del array anterior
            } else {
                setIndicacion(indicacion - 1);

                // 🔁 Reiniciar barra anterior si quieres que vuelva a cargarse
                setBarrasCompletadas((prev) => {
                    const nuevas = [...prev];
                    nuevas[indicacion - 1] = false;
                    return nuevas;
                });
            }
        }

    }

    const toggleXimagen = () => {
        setModalImagenes(false);
        setIndicacion(0)
        const total = Estados[valor]?.imagenes?.length || 0;
        setBarrasActivas(Array(total).fill(false));
        setBarrasCompletadas(Array(total).fill(false));
        setIndicacion(0); // por si acaso
    }

   
    const toggleModalOpcion = (valor) => {
        setModalOpcion(prev => (prev === valor ? "" : valor));
    };

    const toggleImagenes = (i) => {
        setValor(i)
        setModalImagenes(true)
    }

    return (
        <>
            <div className="h-screen w-full">

                <div className="h-16 flex items-center justify-between text-white mx-4">
                    <div>
                        <h3 className="font-semibold text-xl">Sobre MI</h3>
                    </div>
                    <div className='z-50 relative flex h-full w-24 justify-between items-center'>
                        <div
                            onClick={() => toggleModalOpcion("mas")}
                            className='flex z-50 rounded-full hover:bg-neutral-800 w-10 h-10 items-center justify-center'>
                            <PlusCircleIcon className='w-6' />
                            <div className={`absolute z-50 transition-all overflow-hidden bg-neutral-800 top-14 -left-2 rounded-xl justify-center flex flex-col px-2 text-neutral-400 ${modalOpcion === "mas" ? ("w-48 h-24") : ("w-0 h-0 ")}`}>
                                <div className='flex whitespace-nowrap h-10 items-center px-2 rounded-xl hover:bg-neutral-700'>
                                    <PhotoIcon className='w-6' />
                                    <h3 className='ml-3'>Fotos y Videos</h3>
                                </div>
                                <div className='flex whitespace-nowrap h-10 items-center px-2 rounded-xl hover:bg-neutral-700'>
                                    <PencilIcon className='w-6 h-14' />
                                    <h3 className='ml-3'>Texto</h3>
                                </div>
                            </div>

                        </div>
                        <div
                            onClick={() => toggleModalOpcion("opcion")}
                            className='flex relative rounded-full hover:bg-neutral-800 w-10 h-10 items-center justify-center'>
                            <EllipsisVerticalIcon className='w-6' />
                            <div className={`absolute z-50 transition-all overflow-hidden bg-neutral-800 -left-2 top-10 rounded-xl justify-center flex flex-col px-2 text-neutral-400 ${modalOpcion === "opcion" ? ("w-48 h-14") : ("w-0 h-0")}`}>
                                <div className='flex whitespace-nowrap h-10 items-center px-2 rounded-xl hover:bg-neutral-700'>
                                    <LockClosedIcon className='w-6' />
                                    <h3 className='ml-3'>Status Privacy</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {modalOpcion !== "" && (
                    <div
                        onClick={() => setModalOpcion("")}
                        className='absolute z-40 w-screen h-screen top-0 left-0'>
                    </div>
                )}
                <div className='h-16 flex'>
                    <div className='h-full flex items-center justify-center w-16'>
                        <div className='w-12 h-12 rounded-full bg-yellow-100 relative'>
                            <img src={Img1} alt="" />
                            <div className='absolute w-6 h-6 -bottom-1 -right-1 rounded-full border-2 border-neutral-900 bg-green-500 flex items-center justify-center'>
                                <PlusIcon className='w-3 text-white rounded-full' strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center pl-1'>
                        <h3 className='text-white'>Mi estado</h3>
                        <h3 className='text-xs text-neutral-400'>Haz clic para añadir una actualizacion de estado</h3>
                    </div>
                </div>

                <div className='h-16 flex items-end mx-6'>
                    <div>
                        <h3 className='text-green-500'>VISTO</h3>
                    </div>
                </div>

                <div className='max-h-full overflow-y-auto pt-6'>
                    {Estados.map((Img, i) => {
                        return (
                            <div key={i}
                                onClick={() => toggleImagenes(i)}
                                className='h-20 mb-1 mx-2 rounded-xl flex hover:bg-neutral-800'>
                                <div className='h-full w-20 flex items-center justify-center'>
                                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center">
                                        <div className='absolute border-2 border-neutral-400 w-full h-full rounded-full'>
                                        </div>
                                        {Img.imagenes.map((_, index) => {
                                            const total = Img.imagenes.length;
                                            const grados = Math.round(360 / total);
                                            const rotacion = (grados * index) + 270;

                                            return (
                                                <div
                                                    key={index}
                                                    className="absolute w-full h-[4px]"
                                                    style={{
                                                        transform: `rotate(${rotacion}deg)`,
                                                        background: 'linear-gradient(to right, transparent 50%, #18181b 50%)',
                                                    }}
                                                ></div>
                                            );
                                        })}

                                        {Img.valor === "img" && (
                                            <div className='w-12 h-12 rounded-full overflow-hidden flex justify-center items-center z-10'>
                                                <img src={Img.imagenes[0]} alt="" className='rounded-full w-full h-full bg-white' />
                                            </div>
                                        )}
                                        {Img.valor === "text" && (
                                            <div className='w-12 h-12 rounded-full bg-green-400 overflow-hidden flex justify-center items-center z-10 text-xs text-white'>
                                                {Img.imagenes[0]}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-white'>{Img.nombre}</h3>
                                    <h3 className='text-sm text-neutral-400'>{Img.Hora} </h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center mt-6'>
                    <LockClosedIcon className='w-3 text-neutral-400 mx-1' />
                    <div className='text-neutral-400 text-xs text-center flex'>Tendra mas actuzaliciones de estado este <p className='ml-1 text-green-500 font-bold'>portafolio</p> </div>
                </div>

            </div>


            {/* Vista del modal para ver estados */}


            {modalImagenes && (
                <ModalImg toggleXimagen={toggleXimagen} Estados={Estados} valor={valor} indicacion={indicacion} toggleArrow={toggleArrow} iconsModalImg={iconsModalImg} barrasActivas={barrasActivas} tiempo={tiempo} barrasCompletadas={barrasCompletadas} />
            )}
        </>
    )
}
export default NavEstados;