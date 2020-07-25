import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from '../../../helpers/isMobile';

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
                <p className={styles.cardTitle}>{props.card.tourCover.titleTest}</p>
                <p className={styles.cardIntroText}>{props.card.tourCover.tourCard}</p>
            </div>
        </div>
    </Link>
);

const Layout = (props) => (
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
            columns: isMobile(window.screen.availWidth) ? 1 : 5,
            maxCards: 20,
            cards: Object.values(tourMock)
        };
    }

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
