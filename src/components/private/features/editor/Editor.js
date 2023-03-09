import React, { useCallback, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useQuery } from 'react-query';
import _ from 'lodash';

import { Ingredient, Loader } from './../../../../components/ui/UI';
import { getIngredients } from './../../../../assets/scripts/Services';

import './Editor.scss';



const Editor = () => {
    const bunBottom = { id: null, name: 'bun bottom', src: 'bun_bottom.png'};
    const bunTop = { id: null, name: 'bun top', src: 'bun_top.png'};


    
    const [ingredients, setIngredients] = useState(localStorage.getItem('ingredients') !== null ? JSON.parse(localStorage.getItem('ingredients')) : []);

    useEffect(() => {
        localStorage.setItem('ingredients', JSON.stringify(ingredients));
    }, [ingredients]);

    const { data, isError, isLoading } = useQuery('ingredients', getIngredients);

    const navigate = useNavigate();

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
        return (
            <Loader />
        );
    }
    if (isError) {
        navigate('/signin', {replace: true});
    }

    return (
        <div className="editor">
            <div className="burger">
                <div>
                    <div className="burger__container">
                        {
                            ([bunBottom, ...ingredients, bunTop]).map((ingredient, index) => (
                                <Ingredient {...ingredient} index={index} key={ingredient.name + index} onClick={removeIngredient} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="chalkboard">
                <div className="chalkboard__container">
                    <div>
                        <h2>Burger-Builder</h2>
                        <ul className="chalkboard__ingredients-list">
                            {
                                (Object.keys((_.groupBy(ingredients, 'name')))).map((ingredientName, index) => {
                                    return (
                                        <li key={ingredientName}><p className="chalkboard__ingredient-item"><span>{(ingredients.filter(ingredient => ingredient.name === ingredientName)).length}</span> {ingredientName}</p></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <p className="chalkboard__instructions"># Choose the ingredients for your <del>nasty</del> Burger</p>
                </div>
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