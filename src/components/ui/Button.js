import styled from 'styled-components';



const StyledButton = styled.button`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: inherit;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 2px;
    cursor: pointer;
    transition: color 200ms linear, filter 200ms linear;
    &:hover {
        filter: brightness(0.9);
        color: inherit;
        transition: color 200ms linear, filter 200ms linear;
    }
`;

const Button = (props) => {
    return <StyledButton>{props.children}</StyledButton>;
};

export default Button;