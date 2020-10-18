export const respondFrom = (screenSize) => (styles) => {
    return `@media (min-width: ${screenSize}px) {
        ${styles}
    }`;
};

export const respondUpto = (screenSize) => (styles) => {
    return `@media (max-width: ${screenSize - 1}px) {
        ${styles}
    }`;
};
