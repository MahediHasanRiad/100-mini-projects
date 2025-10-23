import styled from "styled-components";

export const Button = styled.button`
    font-size: 1rem;
    letter-spacing: 2px;
    color: white;
    background-color: ${props => props.disabled ? '#cccccc' : '#0d6efd'};
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    transition: all 0.3s;

    &:hover:not(:disabled) {
        background-color: #0b5ed7;
    }
`;