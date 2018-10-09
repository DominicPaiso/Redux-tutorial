const initialState = {
    all: [],
    selected: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_VIDEOS':
            return { ...state, all: payload };

        case 'SELECT_VIDEOS':
            return { ...state, selected: state.all[payload] };

        default:
            return state;
    }
};

// 10. Create initialState for reducer and set up action switch case
// Go to /src/App.js