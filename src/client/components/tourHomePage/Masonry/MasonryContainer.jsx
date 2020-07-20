import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { tourMock } from '../../../../server/tourMock';
import styles from './masonryContayner.module.scss';
import './styles.css';

// Jesse Korzan
// copyright 2018 Klue Labs
// CSS column-count masonry w/ left-right reflow
// special thx to NickB
//
// kick ass out there, ppl 1:1

const Card = (props) => (
    <Link key={`${props.card.tourCover.tourUrl}`} to={`${props.card.tourCover.tourUrl}`}>
        <div className={styles.card}>
            <img
                src={props.card.tourCover.coverImg}
                className={styles.image}
            />
            <div className={styles.cardText}>
                <h1>{props.card.tourCover.titleTest}</h1>
                <p>{props.card.tourCover.tourCard}</p>
            </div>
        </div>
    </Link>
);

const Layout = (props) => (
    // Masonry layout of cards
    // column-count : X
    <div
        className={`layout` + `${props.style}`}
        style={{ columnCount: props.columns }}
    >
        {props.cards.map((card, index) => (
            <Card
                key={index}
                card={card}
                active={props.active}
                handleClickCard={props.handleClickCard}
            />
        ))}
    </div>
);

class MasonryContainer extends Component {
    constructor() {
        super();
        this.state = {
            layout: 'masonry',
            columns: 5,
            maxCards: 20,
        };
    }
    componentDidMount() {
        this.fetchEr();

        // cheap responsive approach -- if you want
        window.addEventListener("resize", () => {
            let winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (winWidth <= 414) {
                this.reorder(this.state.cardsOG, 1);
            }
            else if (winWidth > 414 && winWidth <= 980 ) {
                this.reorder(this.state.cardsOG, 2);
            } else {
                this.reorder(this.state.cardsOG, 5);
            }
        })

    }
    fetchEr = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((result) => {
                this.reorder(
                    result.slice(0, this.state.maxCards),
                    this.state.columns,
                );
                this.setState({
                    cardsOG: result.slice(0, this.state.maxCards),
                });
            })
            .catch((e) => e);
    };
    reorder = (arr, columns) => {
        // READ HERE
        // this is the magic
        // re-order the array so the "cards" read left-right
        // cols === CSS column-count value

        const cols = columns;
        const out = [];
        let col = 0;
        while (col < cols) {
            for (let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined) out.push(_val);
            }
            col++;
        }
        const toursForCard = Object.values(tourMock);
        this.setState({ cards: toursForCard, columns: columns });
    };
    handleButtonClick = (layout, columns) => {
        this.setState({
            layout: layout,
            columns: columns,
        });
        this.reorder(this.state.cardsOG, columns);
    };
    handleClickCard = (card) => {
        this.setState({
            cardActive: this.state.cardActive !== card ? card : false,
        });
    };
    render() {
        let CARDS = this.state.cards;

        return (
            <div>
                <div className="layout--wrapper">
                    {CARDS && (
                        <Layout
                            style={this.state.layout}
                            columns={this.state.columns}
                            cards={CARDS}
                            active={this.state.cardActive}
                            handleClickCard={this.handleClickCard}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default MasonryContainer;
