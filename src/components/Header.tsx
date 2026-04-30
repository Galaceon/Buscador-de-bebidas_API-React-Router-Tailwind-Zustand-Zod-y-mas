import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/public/logo.svg" alt="logotipo" />
                    </div>

                    <nav className="flex gap-6">
                        <NavLink to="/" className={({isActive}) =>
                            isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"    
                        }>Inicio</NavLink>
                        <NavLink to="/favoritos" className={({isActive}) =>
                            isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"    
                        }>Favoritos</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
