import './IngredientList.css';
import React from 'react';

function IngredientList(props) {
    // Crear los elementos de la lista usando map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            // Retorna el HTML deseado para cada ingrediente
            <li 
                key={index} 
                className={ingredient.prepared ? 'prepared' : ''} 
                onClick={() => props.onClick(index)}
            >
                {ingredient.name}
            </li>
        );
    });

    // Retorna el HTML para el componente
    // ingredientListItems se renderizará como elementos li
    return (
        <ul>
            {ingredientListItems}
        </ul>
    );
}

export default IngredientList;
