export const fetchVideos = query => dispatch => {
    //here you would use axios to fetch some data
    const response = [
        {id: `${query}-1`}, 
        {id: `${query}-2`}, 
        {id: `${query}-3`},
    ];

    dispatch({
        type: 'FETCH_VIDEOS',
        payload: response
    });
};

// 16: Create named actions and export them
// Go to /src/App.js