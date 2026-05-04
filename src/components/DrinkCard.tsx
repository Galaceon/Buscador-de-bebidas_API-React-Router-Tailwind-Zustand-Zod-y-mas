import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"


type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className="shadow-xl rounded-2xl overflow-hidden">
            <div className="overflow-hidden">
                <img className="hover:scale-115 transition-transform hover:rotate-2" src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`}></img>
            </div>

            <div className="p-7">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    Ver Receta
                </button>
            </div>
        </div>
    )
}
