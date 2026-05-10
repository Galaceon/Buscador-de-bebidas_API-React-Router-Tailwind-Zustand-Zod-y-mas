import { useEffect, useMemo, useState, type ChangeEvent, type SubmitEvent } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {
    const {pathname} = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state) => state.showNotification)

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        // TODO: Validar
        if(Object.values(searchFilters). includes('')) {
            showNotification({text: 'Todos los campos son obligatorios', error: true})
            return
        }

        // Consultar las recetas
        searchRecipes(searchFilters)
    }

    return (
        <header className={isHome ? "bg-[url('./public/bg.jpg')] bg-cover bg-center" : 'bg-slate-800'}>
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

                { isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes</label>

                            <input 
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none bg-slate-100"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Ginebra, Café"
                                value={searchFilters.ingredient}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-4">
                            <label 
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>

                            <select 
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-lg focus:outline-none bg-slate-100"
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value=''>Seleccione</option>
                                {categories.drinks.map(category => (
                                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                ))}
                            </select>
                        </div>

                        <input 
                            type="submit"
                            value='Buscar Recetas'
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
