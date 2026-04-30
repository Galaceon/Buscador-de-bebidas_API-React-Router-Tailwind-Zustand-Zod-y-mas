import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/public/logo.svg" alt="logotipo" />
                    </div>

                    <nav className="flex gap-6">
                        <Link to="/" className="text-white uppercase font-bold">Inicio</Link>
                        <Link to="/favoritos" className="text-white uppercase font-bold">Favoritos</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
