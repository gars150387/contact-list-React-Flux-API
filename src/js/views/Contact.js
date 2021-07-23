import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "../component/Card.js";
import { Modal } from "../component/Modal";

export const Contact = () => {
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contact" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
                        {Store.data && store.data.map((element, index)=> (
						<Card key={index} element={element} index={index} onDelete={() => setState({ showModal: true })} />
                        ))}
						{/* <Card />
						<Card />
						<Card /> */}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
