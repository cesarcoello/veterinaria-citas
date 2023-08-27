const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {mascota, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?');
    
        if(respuesta){
          eliminarPaciente(id);
        }
  }

  return (
    <div className='mx-5 mb-10 bg-white shadow-md rounded-lg py-10 px-5'>
          
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Nombre: {''}
              <span className='font-normal normal-case'>{mascota}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Propietario: {''}
              <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Email: {''}
              <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
            Alta: {''}
              <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Síntomas: {''}
              <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button 
                    type='button'
                    className='py-2 px-5 text-sm sm:px-10 sm:text-base	 bg-teal-600 hover:bg-teal-700 text-white
                    font-bold uppercase rounded-lg'
                    onClick={ () => setPaciente(paciente)} >
                  Editar
                </button>

                <button 
                    type='button'
                    className='py-2 px-5  text-sm sm:px-10 sm:text-base	 bg-red-600 hover:bg-red-700 text-white
                    font-bold uppercase rounded-lg'
                    onClick={handleEliminar} >
                  Eliminar
                </button>

               

            </div>

      </div>
  )
}

export default Paciente