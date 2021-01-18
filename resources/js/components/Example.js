import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@material-ui/core';

function Example() {
    return (
        <Button variant="contained" color="secondary">
            MatX button
        </Button>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
