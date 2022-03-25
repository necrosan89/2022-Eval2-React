import { Link } from "react-router-dom"

export const Menu = () => {
    return<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 class="navbar-brand">Mini E-Commerce </h1>
        <ul>
            <li>
                <Link to="/">Catalogue</Link>
            </li>
            <li>
                <Link to="/Panier">Panier</Link>
            </li>
        </ul>
    </nav>   
}