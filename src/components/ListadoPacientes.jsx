import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10 font-black italic">Administra tus <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span></p>
            {pacientes.map(paciente =>
              <Pacientes 
                key={paciente.id}
                paciente={paciente}
                setPaciente= {setPaciente}
                eliminarPaciente= {eliminarPaciente}
              />
            )}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10 font-black italic">Comienze agregando pacientes <span className="text-indigo-600 font-bold text-xl">y aparecerán aquí</span></p>
          </>
        )}
        
        
    </div>
    
  )
}
export default ListadoPacientes
