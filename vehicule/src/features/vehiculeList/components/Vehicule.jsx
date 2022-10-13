import { Button } from 'bootstrap';
import React from 'react'
//import { VehiculeData } from '../service/VehiculeData'
import { LeButton } from './LeButton';


export const Vehicule = (props) => {

    const supprimer = () => {
        return null;
    }
    return (
        <>

            <p>{props.vehicule.id}</p>
            <p>{props.vehicule.nom}</p>
            <p>{props.vehicule.prenom}</p>
            <p>{props.vehicule.dateNaissance}</p>
            <p>{props.vehicule.tel}</p>
            <p>{props.vehicule.location}</p>
            <LeButton handleClick={supprimer}>Supprimer</LeButton>
        </>

    );
};
