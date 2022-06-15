import React from 'react'
function Pacientes({paciente, setPaciente, eliminarPaciente}) {
    const {id,nombre,propietario,email,alta,sintomas} = paciente;

    const handleEliminar= () =>{
      eliminarPaciente(id);
    }
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del Propietario: <span className="font-normal normal-case">{propietario}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Dirección de Correo: <span className="font-normal normal-case">{email}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: <span className="font-normal normal-case">{alta}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas de la mascota: <span className="font-normal normal-case">{sintomas}</span></p>
        <div className='flex justify-between mt-10'>
          <button type='button' onClick={() => setPaciente(paciente)} className='py-2 px-10 rounded-lg bg-indigo-600 text-white font-bold uppercase hover:bg-indigo-700 transition-all'>Editar</button>
          <button type='button' onClick={() => handleEliminar()} className='py-2 px-10 rounded-lg bg-red-600 text-white font-bold uppercase hover:bg-red-700 transition-all'>Eliminar</button>
        </div>
    </div>
  )
}

export default Pacientes
