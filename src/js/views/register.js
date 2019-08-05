import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Register extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div className="text-center py-5 registertop">
								<h1>Join the Collective</h1>
							</div>
							<div className="d-flex justify-content-center">
								<Form>
									<Form.Group as={Row} controlId="formHorizontalName">
										<Col>
											<Form.Control type="formHorizontalName" placeholder="Name" />
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formHorizontalEmail">
										<Col>
											<Form.Control type="email" placeholder="Email" />
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formHorizontalPassword">
										<Col>
											<Form.Control type="password" placeholder="Password" />
										</Col>
									</Form.Group>
									<Form.Group as={Row}>
										<Col className="text-center">
											<Button
												onClick={() => {
													let name = document.querySelector("[type=formHorizontalName]")
														.value;
													let email = document.querySelector("[type=email]").value;
													let password = document.querySelector("[type=password]").value;
													actions.createClient(name, email, password, this.props.history);
												}}>
												Create Account
											</Button>
										</Col>
									</Form.Group>
									<Form.Group as={Row}>
										<Col className="mt-3 text-center registerbottom">
											<p>
												Already have an account? <Link to="/login">Log In</Link>.
											</p>
										</Col>
									</Form.Group>
								</Form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Register.propTypes = {
	history: PropTypes.object
};
