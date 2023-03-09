import styled from 'styled-components';



const StyledError = styled.p`
    display: block;
    width: 100%;
    text-align: center;
`;

const Error = ({children, ...props}) => {
    return <StyledError className="feedback-error" {...props}>{children}</StyledError>;
};

export default Error;