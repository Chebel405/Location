import React from 'react'
import { ClientData } from '../service/ClientData'
import { useState } from 'react'
import { Vehicule } from '../components/Vehicule'

export const VehiculeList = () => {

    const [vehicules, setVehicules] = useState(ClientData)

    const supprimer = (id) => {
        setVehicules((vehicules) => { return vehicules.filter(vehicule => vehicule.id !== id) })
    }

    return (
        <>
            {vehicules.map((vehicule, index) => { return <Vehicule key={index} vehicule={vehicule} supprimer={supprimer} /> })}
        </>
    )



}
