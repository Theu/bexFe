import styled from 'styled-components';

export const ArrowContainer = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    right: 25px;
    ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
    height: 20px;
    width: 20px;
    justify-content: center;
    background: white;
    opacity: 30%;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
        transform: scale(1.1);
    }
    img {
        transform: translateX(
            ${(props) => (props.direction === 'left' ? '-2' : '2')}px
        );
        &:focus {
            outline: 0;
        }
    }
`;
