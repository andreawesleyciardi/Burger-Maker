import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import { Ingredient } from './../../../../components/ui/UI';
import { getIngredients } from './../../../../assets/scripts/Services';

import './Editor.scss';



const Editor = () => {
    const bunBottom = { id: null, name: 'bun bottom', src: 'bun_bottom.png'};
    const bunTop = { id: null, name: 'bun top', src: 'bun_top.png'};
    
    const [ingredients, setIngredients] = useState([]);

    const { data, error, isError, isLoading } = useQuery('ingredients', getIngredients);

    const addIngredient = useCallback((ingredient) => {
        setIngredients(([]).concat(ingredients, ingredient));
    });

    const removeIngredient = useCallback((ingredient, index) => {
        if (ingredient.id !== null) {
            let newIngredients = ([]).concat(ingredients);
            newIngredients.splice(index - 1, 1);
            setIngredients(newIngredients);
        }
    });

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <div className="editor">
            <div className="burger">
                <div className="burger-container">
                    {
                        ([bunBottom, ...ingredients, bunTop]).map((ingredient, index) => (
                            <Ingredient {...ingredient} index={index} key={ingredient.name + index} onClick={removeIngredient} />
                        ))
                    }
                </div>
            </div>
            <div className="chalkboard">

            </div>
            <div className="options">
                <div className="options-container">
                    {
                        (data).map((option, index) => (
                            <Ingredient {...option} index={index} key={`option-${option.name + index}`} showName={true} onClick={addIngredient} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Editor;