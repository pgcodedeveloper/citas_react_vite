import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes,setPacientes,paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  },[paciente]);

  const generarId= () =>{
    const random= Math.random().toString(36).substr(2);
    const fecha= Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, propietario, email, alta, sintomas].includes("")){
      setError(true);
      return;
    }
    setError(false);

    const objPacientes= {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas
    };
    if(paciente.id){
      objPacientes.id= paciente.id;
      const pacientesActualizado= pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPacientes : pacienteState);
      setPacientes(pacientesActualizado);
      setPaciente({});
    }
    else{
      objPacientes.id= generarId();
      setPacientes([...pacientes,objPacientes]);
    }
    
    limpiarStates();
  };

  function limpiarStates(){
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10 font-black italic">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input type="text" value={nombre} onChange={ (e) => setNombre(e.target.value)} placeholder="Nombre de la mascota" id="nombre" className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"/>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
            <input type="text" value={propietario} onChange={(e) => {setPropietario(e.target.value)}} placeholder="Nombre del Propietario" id="propietario" className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Direccion de Correo</label>
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="E-Mail de contacto" id="email" className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
            <input type="date" value={alta} onChange={(e) => {setAlta(e.target.value)}} id="alta" className="rounded-md border-2 w-full p-2 mt-2 placeholder-indigo-600"/>
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas de la Mascota</label>
            <textarea id="sintomas" value={sintomas} onChange={(e) => {setSintomas(e.target.value)}} placeholder="Describe los síntomas de la mascota" className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"></textarea>
          </div>

          <input type="submit" className="bg-indigo-600 w-full rounded-lg p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
        </form>
    </div>
  )
}
export default Formulario

