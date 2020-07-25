export const getClientWidth = (payload) => ({
    type: 'GET_WIDTH',
    clientWidth: payload,
});

export const getClientHeight = (payload) => ({
    type: 'GET_HEIGHT',
    clientHeight: payload,
});

export const getClientScreen = (payload) => {
    console.log('------------------------------------');
    console.log('payload :>> ', payload);
    console.log('------------------------------------');

    return {
        type: 'GET_SCREEN',
        clientScreen: payload,
    };
};
