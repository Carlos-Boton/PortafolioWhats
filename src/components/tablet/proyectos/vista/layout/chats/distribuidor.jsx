import { div } from "framer-motion/client";

const Distribuidor = ({CheckIcon,ArrojarImg,toggleModalImg}) => {

    const mensajes = [
    { tipo: "rec", hora:"12:00 p.m." , tipoContenido : "tex" , contenido: "Hola, ¿cómo estás?"},
    { tipo: "env", hora:"12:05 p.m." , tipoContenido : "tex" , contenido: "Bien, ¿y tú?"},
    { tipo: "rec", hora:"12:09 p.m." , tipoContenido : "tex" , contenido: "Todo bien, gracias por preguntar 😊"},
    { tipo: "env", hora:"12:12 p.m." , tipoContenido : "tex" , contenido: "Genial, y dime ¿que me cuentas?"},
    { tipo: "rec", hora:"12:18 p.m." , tipoContenido : "tex" , contenido: "Bueno, venia a preguntar ¿comó vas con el proyecto"},
    { tipo: "env", hora:"12:25 p.m." , tipoContenido : "tex" , contenido: "Ya lo tengo, ya lo tengo"},
    { tipo: "env", hora:"12:25 p.m." , tipoContenido : "tex" , contenido: "Aqui te paso unas imagenes"},
    { tipo: "env", hora:"12:26 p.m.." , tipoContenido : "img" , contenido: ArrojarImg },
    { tipo: "rec", hora:"12:35 p.m." , tipoContenido : "tex" , contenido: "vaya, vaya"},
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "tex" , contenido: `Las Tecnologias que complementa la aplicacion son:
        -HTML
        -CSS
        -JavaScript
        -Libreria React
        -TailwindCss
        -Firebase
        -Autenticathor Firebase`    
    },
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "tex" , contenido: "Aqui te paso el link"},
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "tex" , contenido: "El sistema es de prueba, asi que no afecta al sistema que ya esta en funcionamiento"},
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "link" , contenido: "https://sistema-prueba-venta.vercel.app/login", informacion:`
        distribuidor-2brsu6956-carlos-daniel-francisco-boton-projects.vercel.app
        https://distribuidor-2brsu6956-carlos-daniel-francisco-botons-projects.vercel.app/login
        distribuidor-2brsu6956-carlos-daniel-francisco-botons-projects.vercel.app`},
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "tex" , contenido: `El correo del sistema es:
            sistemaprueba@gmail.com`},
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "tex" , contenido: `y te paso la contraseña es:
            sistemaprueba1234&`},
    ];

    return(
        <>
            
            <div className="p-4">
                {mensajes.map((msg, i) => {
                    const siguiente = mensajes[i + 1];
                    const anterior = mensajes[i - 1];
                    const esPrimeroDelGrupo = !anterior || anterior.tipo !== msg.tipo;
                    const mismoTipo = siguiente && siguiente.tipo === msg.tipo;

                    const espacioEntre = mismoTipo ? "mb-1" : "mb-3";

                    return (
                        <div
                        key={i}
                        className={`flex w-[clamp(260px,80%,770px)] ${
                            msg.tipo === "env" ? "justify-end ml-auto" : "justify-start"
                        } ${espacioEntre}`}
                        >
                            <div
                                className={`rounded-lg text-white relative ${
                                msg.tipo === "env"
                                    ? `bg-green-800 ${msg.tipoContenido === "img" ? ("min-w-80 h-[354px] px-1 py-1") : ("px-1 py-1")}`
                                    : `bg-neutral-800 ${msg.tipoContenido === "img" ? ("min-w-80 h-[354px] px-1 py-1") : ("px-1 py-1")}`
                                }`}
                            >
                                {esPrimeroDelGrupo && (
                                    <div className={`w-0 h-0 absolute top-0 border-l-[9px] border-r-[9px] rounded-xl border-t-[10px] border-l-transparent border-r-transparent ${msg.tipo === "env" ? "border-t-green-800 -right-2" : "-left-2 border-t-neutral-800"}`}></div>
                                )}
                                {msg.tipoContenido === "tex" && (
                                    <div className="text-sm whitespace-pre-line mx-3 my-1">       
                                        <p className="inline">{msg.contenido}</p>
                                        <span className="w-16 relative h-2 inline-block rounded-full align-middle"></span>
                                    </div>
                                )}
                                {msg.tipoContenido === "link" && (
                                    <a href={msg.contenido} target="_blank" rel="noopener noreferrer">
                                        <div className="bg-green-900 whitespace-pre-ine w-full px-3 py-1 rounded-md text-sm">
                                            <p className="inline">{msg.informacion}</p>
                                        </div>
                                        <div className="text-sm whitespace-pre-ine mx-3 my-1">
                                            <p className="inline text-green-400 underline hover:no-underline ">{msg.contenido}</p>
                                            <span className="w-16 relative h-2 inline-block rounded-full align-middle"></span>
                                        </div>
                                    </a>
                                )}
                                {msg.tipoContenido === "img" && (() => {

                                    const imagenes = msg.contenido || [];
                                    const total = imagenes.length;
                                    const visibles = imagenes.slice(0, 4);

                                    const getImageClass = (index) => {
                                        if (total === 1) return "col-span-2 row-span-2 h-[345px]";
                                        if (total === 2) return "col-span-2 h-[170px]";
                                        if (total === 3) {
                                            if (index === 0 || index === 1) return "col-span-1 h-[170px]"; // dos arriba
                                            if (index === 2) return "col-span-2 h-[170px]"; // uno abajo
                                        }
                                            
                                        return "col-span-1 h-[170px] mb-1"; // para 4 o más
                                    };
                                    
                                    return (
                                        <div className="grid grid-cols-2 gap-1">
                                            {visibles.map((imagen, i) => (
                                                <div
                                                    key={i}
                                                    className={`relative overflow-hidden rounded-md bg-green-800 ${getImageClass(i)}`}
                                                >
                                                    <button
                                                        onClick={() => toggleModalImg(0, i)}
                                                    >
                                                        <img
                                                            src={imagen}
                                                            alt="imagen"
                                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                                        />
                                                        {/* Overlay si es la última y hay más de 4 */}
                                                        {i === 3 && total > 4 && (
                                                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-bold">
                                                                +{total - 4}
                                                            </div>
                                                        )}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}

                                <div className="h-6 absolute inline-block -bottom-1 right-0 flex mr-1">
                                    <p className="text-neutral-300 text-xs">{msg.hora}</p>
                                    {msg.tipo === "env" && (
                                        <>  
                                            <CheckIcon className='w-3 text-sky-300 p-0 m-0' strokeWidth={3} />
                                            <CheckIcon className='w-3 text-sky-300 p-0 -ml-2 ' strokeWidth={3} /> 
                                        </>
                                    )}
                                </div>
                            </div>
                        
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}

export default Distribuidor;