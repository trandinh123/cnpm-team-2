import styled from "styled-components";

export const Setting = styled.div`
    width: 175px;
    background-color: white;
    border-radius: 4px;
    position: absolute;
    bottom: 67px;
    left: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-item: center;
    padding: 8px 0px ;
    
`;

export const Wrapper = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding: 6px 16px;
    cursor: pointer;
    &:hover{
        background-color: #f3f5f6;
    }
    
`

export const Text = styled.p`
    margin: 0;
    padding: 0;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;


`
