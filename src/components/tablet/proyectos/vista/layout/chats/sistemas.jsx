
const Sistemas = ({CheckIcon,ArrojarImg,toggleModalImg}) => {

    const mensajes = [
    { tipo: "env", hora:"2:35 p.m." , tipoContenido : "tex" , contenido: "¡Hola! ¡Hola!, adivina que compañero."},
    { tipo: "rec", hora:"2:36 p.m." , tipoContenido : "tex" , contenido: "¿Que paso? cuentame."},
    { tipo: "env", hora:"2:39 p.m." , tipoContenido : "tex" , contenido: "Pues resulta que antier entregue mi proyecto al tecnologico"},
    { tipo: "env", hora:"2:39 p.m." , tipoContenido : "tex" , contenido: "Trabaje con mi equipo para poder lograr que funcione el sistema"},
    { tipo: "rec", hora:"2:41 p.m." , tipoContenido : "tex" , contenido: "asi? y dime, de que trata dichoso sistema"},
    { tipo: "env", hora:"2:42 p.m." , tipoContenido : "tex" , contenido: "Bueno, bueno no quiero darte mucho contexto, pero basicamente solucionaba la perdida de puntos de los alumnos que hacian sus actividades extraescolares"},
    { tipo: "env", hora:"2:43 p.m." , tipoContenido : "tex" , contenido: "Tiene control de usuario para el acceso a cada usuario, el admin, el maestro y los alumnos"},
    { tipo: "env", hora:"2:43 p.m." , tipoContenido : "tex" , contenido: "los alumnos podian ver cuanto es son los puntos que acomulaban despues de cada semestre, algo que le quitaba tiempo al admin, o encargado de todas las areas, ya que los alumnos acudian a el para ver el progreso de sus puntos"},
    { tipo: "rec", hora:"2:45 p.m." , tipoContenido : "tex" , contenido: "Wow, Wow, mas despacio compañero"},
    { tipo: "env", hora:"2:48 p.m." , tipoContenido : "tex" , contenido: "Ja, ja, disculpa compañero es que me emocione por que comentaron que posiblemente lo utilizen en el tecnologico"},
    { tipo: "env", hora:"2:49 p.m." , tipoContenido : "tex" , contenido: "aqui te paso unas imagenes"},
    { tipo: "env", hora:"2:49 p.m." , tipoContenido : "img" , contenido: ArrojarImg },
    { tipo: "rec", hora:"2:52 p.m." , tipoContenido : "tex" , contenido: "Genial compañero, espero y si lo usen, mejoraria el area extraescolares ahorrando mucho trabajo al encargado"},
    { tipo: "env", hora:"2:54 p.m." , tipoContenido : "tex" , contenido: "Claro, claro compañero. por cierto"},
    { tipo: "env", hora:"2:55 p.m." , tipoContenido : "tex" , contenido: `Aqui te desglozo lo que complemente en el sistema:
        -Conexion de la base de datos
        -Peticiones a la base de datos, CRUD
        -Control de usuario Admin, Maestros, Alumnos
        -Proteccion de rutas con el sistema de autenticacion`    
    },
    { tipo: "env", hora:"12:37 p.m." , tipoContenido : "tex" , contenido: "Aqui te paso el el documento para que lo veas"},
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
                                            
                                        return "col-span-1 h-[170px]"; // para 4 o más
                                    };
                                    
                                    return (
                                        <div className="grid grid-cols-2 gap-1">
                                            {visibles.map((imagen, i) => (
                                                <div
                                                    key={i}
                                                    className={`relative overflow-hidden rounded-md bg-white ${getImageClass(i)}`}
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

export default Sistemas;