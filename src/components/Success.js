import React from 'react';

export default function Success(props) {
	console.log("props = ", props);
	console.log("data = ", props.location.state.data);
	const data = props.location.state.data;
    return (
        <div>
            <h2>Success</h2>
            <pre>{ JSON.stringify(data, null, 2) }</pre>
        </div>
    );
}
