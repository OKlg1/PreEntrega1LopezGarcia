import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around p-4">
            <image src="/img/logo-bt.png" alt="" style={{ width: 150px }} />
            <div>
                <button className="btn btn-success mx-2">Home</button>
                <button className="btn btn-success mx-2">Productos</button>
                <button className="btn btn-success mx-2">Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}