import styled from 'styled-components';
import PropTypes from 'prop-types';
import TestRenderer from 'react-test-renderer';



const StyledIngredient = styled.button`
    display: block;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    p {
        font-weight: 600;
        text-transform: capitalize;
        margin-top: 1rem
    }
`;

const Ingredient = ({index, onClick, showName, ...ingredient}) => {
    return (
        <StyledIngredient className={`ingredient ingredient--type-${ingredient.name.replace(/ /g,'')}`} onClick={() => { onClick(ingredient, index) } } data-id={ingredient.id} data-index={index}>
            <img src={process.env.REACT_APP_IMGS_BASE_URL + ingredient.src} alt={ingredient.name} />
            {
                showName
                &&
                    <p>{ingredient.name}</p>
            }
        </StyledIngredient>
    );
};

Ingredient.defaultProps = {
    id: null,
    name: null,
    src: null,
    index: null,
    onClick: null,
    showName: false,
};

Ingredient.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number,
    onClick: PropTypes.func,
    showName: PropTypes.bool,
};



const testIngredient = TestRenderer.create(
    <Ingredient id={1} name="burger patty" src="burger-patty.png" index={0} onClick={() => true}></Ingredient>
);

console.log(testIngredient.toJSON());

export default Ingredient;