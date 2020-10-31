import styled from 'styled-components';
import { maxDesktop, baseOcra } from '../../styles/variables';

export const Wrapper = styled.div`
    width: ${maxDesktop}px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin: 10px 0;
    border-color: ${(props) => props.error && 'red'};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InputButton = styled.button`
    background-color: ${baseOcra};
    margin-right: 10px;
`;
