import React from 'react';

export default function CurrencyBalance(props) {
	console.log("props = ", props);
	console.log("data = ", props.location.state.data);
	const data = props.location.state.data;
    return (
        <div>
            <h2>Success</h2>
            <div>The balance of TAIJI is {data['taiji']} in SHELL</div>
        </div>
    );
}
