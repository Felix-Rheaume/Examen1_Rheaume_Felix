import React from "react";

function Enfant(props) {
    return (
        <div>
            <button onClick={() => props.ajouter(2)}>+ 2 Enfant</button>
            <label htmlFor="enfantSommeParent">Enfant somme Parent : </label>
            <input readOnly id="enfantSommeParent" value={props.sommeParent} />

            <label htmlFor="enfantSommeEnfant">Enfant somme Enfant : </label>
            <input readOnly id="enfantSommeEnfant" value={props.sommeEnfant} />

            <label htmlFor="enfantSommeTotal">Enfant somme Total : </label>
            <input readOnly id="enfantSommeTotal" value={props.sommeEnfant + props.sommeParent} />
        </div>
    );
}

export default Enfant;