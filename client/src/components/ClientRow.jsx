import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'

export default function ClientRow({ client }) {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },

        // Si borro un cliente desde el front, la vista no se actualiza
        // automaticamente. Entonces tengo que volver a pedir los
        // clientes (GET_CLIENTS) o usar cache (mejor opcion)

        // Con GET_CLIENTS
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }]

        // Con Cache
        // update(cache, { data: { deleteClient } }) {
        //     const { clients } = cache.readQuery({ query: GET_CLIENTS });
        //     cache.writeQuery({
        //         query: GET_CLIENTS,
        //         data: {
        //             clients: clients.filter(client => client.id !== deleteClient.id)
        //         }
        //     });
        // }
    });

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button
                    className='btn btn-danger btn-sm'
                    onClick={deleteClient}
                >
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}
