import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Panier = () => {
    const navigate = useNavigate()
    const [liste, setListe] = useState(JSON.parse(localStorage.getItem("Panier")) ? JSON.parse(localStorage.getItem("Panier")) : [])
    const [form, setForm] = useState({nom : "", email : "", postal : "", commentaire : ""})
    let [resultat, setResultat] = useState([])

                
    function handleClick(id){
        const clonePanier = liste.filter(liste => { return liste.id !== id });
        setListe(clonePanier);
    }

    function viderTout() {
        setListe([])
        localStorage.removeItem("Panier")
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setForm({...form, [name] : value})
    }

    function handleSubmit(e){
        console.log(liste)
        console.log(form)
        e.preventDefault();
        if(form.nom.length > 0 && form.email.length && form.postal.length && form.commentaire.length > 0){
            resultat = [liste, form]
            localStorage.setItem("BonCde", JSON.stringify(resultat))
            console.log(resultat)
            setForm({nom : "", email : "", postal : "", commentaire : ""}) //remise à zero
            navigate('/boncde')
        }else {
            alert("veuillez compléter les champs du formulaire")
        }
        
    }


    return<div>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">Nom</td>
                    <td scope="col">Prix</td>
                    <td scope="col">Action</td>
                </tr>
                {liste.map((items, index) => {
                    return <tr key={index}> 
                        <th scope="row">{items.id}</th>
                        <td >{items.produit}</td>
                        <td >{items.prix}</td>
                        <td ><button className="btn btn-primary" onClick={() => handleClick(items.id)}>supprimer</button></td>
                    </tr>  
                })}
            </tbody>   
        </table>
        <button className="btn btn-primary" onClick={viderTout}>Vider panier</button>
        <div>
            <form onSubmit={handleSubmit}>
                <input className="form-control" placeholder="Votre nom" type="text" name="nom" value={form.nom} onChange={handleChange} />
                <input  className="form-control" placeholder="Votre e-mail" type="text" name="email" value={form.email} onChange={handleChange} />
                <input className="form-control" placeholder="Votre adresse" type="text" name="postal" value={form.postal} onChange={handleChange} />
                <textarea className="form-control my-3" placeholder="Commentaires" name="commentaire" value={form.commentaire} onChange={handleChange} />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    </div>
}