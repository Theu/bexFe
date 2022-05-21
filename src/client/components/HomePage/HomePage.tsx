import React from 'react';
import { isMobile } from '../../helpers/isMobile';
import { useWindowSize } from '../../hooks/detectWindowSizes';
import Card from './Card/Card';
import { Container } from './HomePage.styles';

interface Props {
    tours: any
}
export const HomePage: React.FC<Props> = ({ tours }) => {
    const [width] = useWindowSize();
    const columns = isMobile(width) ? 1 : 5;

    return (
        <Container>
            <div style={{ columnCount: columns }}>
                {tours?.map((card: any, index: any) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </Container>
    );
};

export default HomePage;
