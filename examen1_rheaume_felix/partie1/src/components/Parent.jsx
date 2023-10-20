import React from "react";
import Enfant from "./Enfant.jsx";

class Parent extends React.Component {
    state = {
        sommeParent: 0,
        sommeEnfant: 0
    }

    ajouterParent = (nombre) => {
        this.setState(() => ({
            sommeParent: this.state.sommeParent + nombre
        }));
    };

    ajouterEnfant = (nombre) => {
        this.setState(() => ({
            sommeEnfant: this.state.sommeEnfant + nombre
        }));
    };

    render() {
        return (
            <div>
                <button onClick={() => this.ajouterParent(1)}>+ 1 Parent</button>
                <label htmlFor="parentSommeParent">Parent somme Parent : </label>
                <input readOnly id="parentSommeParent" value={this.state.sommeParent}/>

                <label htmlFor="parentSommeEnfant">Parent somme Enfant : </label>
                <input readOnly id="parentSommeEnfant" value={this.state.sommeEnfant}/>

                <label htmlFor="parentSommeTotal">Parent somme Total : </label>
                <input readOnly id="parentSommeTotal" value={this.state.sommeParent + this.state.sommeEnfant}/>
                <br/>
                <Enfant ajouter={this.ajouterEnfant} sommeParent={this.state.sommeParent} sommeEnfant={this.state.sommeEnfant}/>
            </div>
        )
    }
}

export default Parent;