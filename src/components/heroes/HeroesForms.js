import React,{useState, useEffect} from "react";
import * as  HeroesServer from "./HeroesServer";

const Heroe = () => {
    //  ESTADOS
    // HOOK useState
    const initialState={
        id: 0,
        nombre: '',
        edad: 0,
        universo: 0
    };

    const[heroe, setHeroe] = useState(initialState);

    // FUNCION PARA OBTENER NUESTRO HEROE
    // Es asincrona porque debemos esperar la respuesta del servidor
    const getHeroe = async() => {
        try{
            const res = await HeroesServer.getHeroe();
            const data = await res.json();
            const { id, nombre, edad, universo } = data.heroe;
            setHeroe({id, nombre, edad, universo});
        }catch(error){
            console.log(error)

        }
    }

    
    const handleInputChange = (e) => {
        // Va a utilizar el metodo de acceso a todos los elementos del heroe (por eso se ponen lo tres puntos)
        // El parametro e.target.name son las columnas de las key
        // El parametro e.target.value son las columnas de las values
        // Para cada para cada uno de los elementos heroes va a recorrer las dos listas (key y value)
        // Captura los valores del input y los guarda (graba) en el elemento heroe
        setHeroe({...heroe,[e.target.name]: e.target.value});

    }

    // EFECTO
    // HOOK va a generer ese cambio de estado en esos componentes
    useEffect(()=>{},[]);

    // RENDER o HTML o RETURN

    return(
                <div>
                    <div className="col-md3 mx-auto">
                    <section className="container">
                        <div>
                            <div>
                            <h1 className="fw-light">Héroe</h1>
                            </div>
                        </div>
                    </section>
                    
                        <form>
                            <div className="container mb-3">
                                <div className="container mb-4">
                                    <label className="form-label">Nombre del heroe: </label>
                                    <input type="text" name='nombre' id='nombre' placeholder="Nombre" value={heroe.nombre} onChange={handleInputChange}></input>
                                </div>
                                <hr></hr>
                                <div className="container mb-4">
                                    <label className="form-label">Edad del heroe: </label>
                                    <input type="number" name='edad' id='nombre' placeholder="Edad" value={heroe.edad} onChange={handleInputChange}></input>
                                </div>

                            </div>
                        </form>
                    </div>            
                </div>
            );
};

export default Heroe;