import styled from "styled-components";

export const SelectField = styled.select`
    border: ${props => props.error ? '0.1rem solid #e82a2aff' : '0.1rem solid #efefef'}
`

export const Error = styled.div`
    color: '#ff0000',
    font-size: '0.8rem'
`
