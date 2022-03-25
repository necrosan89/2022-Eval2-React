import { useState } from "react"

export const BonCde = () => { 
    const [full, setFull] = useState(useState(JSON.parse(localStorage.getItem("BonCde")) ? JSON.parse(localStorage.getItem("BonCde")) : []))
    
    console.log(full)


    return<>
        <h1>Bon de commande n°1</h1>
        <p>Merci de votre commande</p>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">Nom</td>
                    <td scope="col">Prix</td>
                </tr>
                {full[0][0].map((items, index) => {
                    return <tr key={index}> 
                        <th scope="row">{items.id}</th>
                        <td>{items.produit}</td>
                        <td>{items.prix}</td>
                    </tr>  
                })}
            </tbody>     
        </table>
        <div>
            <h1>Détail livraison</h1>
            <ul>
                <li>Nom : {full[0][1].nom}</li>
                <li>Email : {full[0][1].email}</li>
                <li>Address : {full[0][1].postal}</li>
                <li>Commentaire : {full[0][1].commentaire}</li>
            </ul>
        </div>
        
    </>
}