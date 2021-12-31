import React from 'react'

function Form() {

    
    return (
        <div>
            <form onSubmit={newOrder}>
                <h3>Formulario de contacto</h3>
                <input type='text' name='name' placeholder='Escribe tu nombre y apellido' value={formData.name}/>
                <input type='text' name='phone' placeholder='Teléfono' value={formData.phone}/>
                <input type='email' name='email' placeholder='Correo electrónico' value={formData.email}/>
            </form>
        </div>
    )
}

export default Form
