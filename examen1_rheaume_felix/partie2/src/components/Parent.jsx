import React, {useState}from "react";
import Enfant from "./Enfant.jsx";

function Parent(){
    const [sommeParent, setSommeParent] = useState(0);
    const [sommeEnfant, setSommeEnfant] = useState(0);

    const ajouterParent = (nombre) => {
        setSommeParent(sommeParent + nombre);
    };

    const ajouterEnfant = (nombre) => {
        setSommeEnfant(sommeEnfant + nombre);
    };

    return (
        <div>
            <button onClick={() => ajouterParent(1)}>+ 1 Parent</button>
            <label htmlFor="parentSommeParent">Parent somme Parent : </label>
            <input readOnly id="parentSommeParent" value={sommeParent}/>

            <label htmlFor="parentSommeEnfant">Parent somme Enfant : </label>
            <input readOnly id="parentSommeEnfant" value={sommeEnfant}/>

            <label htmlFor="parentSommeTotal">Parent somme Total : </label>
            <input readOnly id="parentSommeTotal" value={sommeParent + sommeEnfant}/>
            <br/>
            <Enfant ajouter={ajouterEnfant} sommeParent={sommeParent} sommeEnfant={sommeEnfant}/>
        </div>
    )
}

export default Parent;