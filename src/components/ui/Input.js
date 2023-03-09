import React from 'react';
import styled from 'styled-components';



const StyledInput = styled.input`
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
`;

const Input = React.forwardRef((props, ref) => {
    return <StyledInput {...props} ref={ref} />;
});

export default Input;