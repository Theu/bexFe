import styled from 'styled-components';
import { baseOcra } from '../../../../styles/variables';

export const ArrowContainer = styled.a`
    display: flex;
    position: absolute;
    top: 44%;
    right: 25px;
    ${(props) => (props.direction === 'right' ? `right: 5px` : `left: 5px`)};
    width: 20px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: white;
    opacity: 70%;
    border-radius: 5px;
    cursor: pointer;
    transition: transform ease-in 0.1s;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        background-color: ${baseOcra};
    }
`;
