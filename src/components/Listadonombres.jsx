import React, {useState} from 'react'
import uniqid from 'uniqid'

 const Listadonombres = () => {

    const [nombre, setNombre] = useState('')

    const [listanombres, setListaNombres] = useState([]) 

    const addNombre = (e)=>{
        e.preventDefault()
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...listanombres, nuevoNombre])
    }







  return (
    <div>
        <h2>Aplicación de CRUD BÁSICA</h2>
        <div className="row">
            <div className="col">Listado de nombres</div>
            <div className="col">
                <h2>Formulario para añadir nombres</h2>
                <form onSubmit={(e)=>addNombre(e)} className="form-group">
                    <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder="Introduce el nombre" />
                    <input className="btn btn-info btn-block" type="submit" value="Registrar Nombre" />
                </form>
            </div>

        </div>
    </div>
  )
}

export default Listadonombres