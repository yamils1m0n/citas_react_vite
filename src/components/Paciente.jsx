
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 my-10">

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario:{" "}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                rounded-lg uppercase md:px-5"
                onClick={ () => setPaciente(paciente) }
            >Editar
            </button>

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold 
                rounded-lg uppercase md:px-5"
                onClick={handleEliminar}
            >Eliminar
            </button>
        </div>

    </div>
  );
};

export default Paciente;
