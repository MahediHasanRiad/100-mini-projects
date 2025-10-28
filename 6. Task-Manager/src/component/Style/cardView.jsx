import styled from "styled-components";

export const CardView = styled.section`
    display: flex;
    justify-content: space-between;
    border: 0.1px solid #bed7c1ae;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    opacity: ${props => props.isSelect ? 0.6 : 1};

    /* Apply to all text inside */
    * {
        text-decoration: ${props => props.isSelect ? 'line-through' : 'none'};
    }
`