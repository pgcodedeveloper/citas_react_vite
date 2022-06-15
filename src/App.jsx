import { useState, useEffect } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css';

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  
  useEffect( () =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente= (id) =>{
    swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: "No puedes revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si eliminar!',
    }).then((res) => {
      if (res.isConfirmed) {
        const pacientesActualizado= pacientes.filter( paciente => paciente.id !== id);
        setPacientes(pacientesActualizado);
      }
    });
    
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente= {paciente}
          setPaciente={setPaciente} 
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente= {setPaciente}
          eliminarPaciente= {eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
