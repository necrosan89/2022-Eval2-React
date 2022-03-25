 import { useState } from "react";
import React from "react";

export const Acceuil = () => { 

    const [catalogue,setCatalogue] = useState([{id : 1, produit : "Produit 1", desc : "Desc 1", prix : "40€"}, {id : 2, produit : "Produit 2", desc : "Desc 2", prix : "30€"},{id : 3, produit : "Produit 3", desc : "Desc 3", prix : "20€"},{id : 4, produit : "Produit 4", desc : "Desc 4", prix : "10€"}]);
    const [panier, setPanier] = useState([]) 
    
    if (localStorage.getItem("BonCde")) {
        localStorage.setItem("Panier",JSON.stringify([]))
        localStorage.removeItem("BonCde")
    }

    function handleClick(id){
        console.log(catalogue)
        const clonePanier = catalogue.filter( catalogue => {return catalogue.id === id});
        panier.push(clonePanier.pop())
        console.log(panier)
        if (!localStorage.getItem("Panier")) {
            localStorage.setItem("Panier",JSON.stringify([]))
        }
        localStorage.setItem("Panier", JSON.stringify(panier))
        //console.log(localStorage.getItem("Panier"))
    }


    return<div className="row">
            {catalogue.map((items, index) => {
                return <article className="col-lg-3 card"  key={index}> 
                    <h1 className="card-header">{items.produit}</h1>
                    <div className="card-body">{items.desc}</div> 
                    <div className="card-text"><button className="btn btn-primary" onClick={() => handleClick(items.id)}>Ajouter</button> 
                    <p>{items.prix}</p></div>
                </article>  
            })}       
        </div>

}