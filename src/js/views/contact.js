import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Contact extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					{/* Look into what the following "/action="action_page.php"" does/ means; 
					this another thing that Tiarra worked on so I have to go back and check it. */}
					{/*  */}
					<form action="/action_page.php">
						<label>Full Name</label>
						<input type="text" id="fname" name="fullname" placeholder="Your Name.." />
						{/*  */}

						<label>Email</label>
						<input type="email" id="email" name="email" placeholder="Your Email" />

						<label>Project Ideas</label>
						<textarea id="subject" name="subject" placeholder="Write something.." />
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}
