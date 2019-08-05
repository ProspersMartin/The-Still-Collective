import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Dashboard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (!store.token)
						return (
							<h3 className="justify-content-center">
								Access Restricted. Please Login <Link to="/login">Login</Link>
							</h3>
						);
					return (
						<div className="container">
							<div className="row">
								<div className="col">Welcome to your Still Dashboard</div>
								<header>
									<div className="logo">
										Xero
										<span>Source</span>
									</div>
								</header>
								<div className="nav-btn">Menu</div>
								<div className="container">
									<div className="sidebar">
										<nav>
											<a href="#">
												Xero
												<span>Source</span>
											</a>
											<ul>
												<li className="active">
													<a href="#">Dashboard</a>
												</li>
												<li>
													<a href="#">Followers</a>
												</li>
												<li>
													<a href="#">About</a>
												</li>
												<li>
													<a href="#">Social</a>
												</li>
												<li>
													<a href="#">Contact</a>
												</li>
											</ul>
										</nav>
									</div>

									<div className="main-content">
										<h1>Dashboard</h1>
										<p>Here you can stuff!</p>
										<div className="panel-wrapper">
											<div className="panel-head">News</div>
											<div className="panel-body">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
												culpa quia possimus molestiae id sapiente ad eveniet, aliquid, eum sint
												fuga eius, ratione suscipit ut minus voluptates dicta nesciunt.
											</div>
										</div>
										<div className="panel-wrapper">
											<div className="panel-head">News</div>
											<div className="panel-body">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
												culpa quia possimus molestiae id sapiente ad eveniet, aliquid, eum sint
												fuga eius, ratione suscipit ut minus voluptates dicta nesciunt.
											</div>
										</div>
										<div className="panel-wrapper">
											<div className="panel-head">News</div>
											<div className="panel-body">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
												culpa quia possimus molestiae id sapiente ad eveniet, aliquid, eum sint
												fuga eius, ratione suscipit ut minus voluptates dicta nesciunt. Totam
												fugiat culpa quia possimus molestiae id sapiente ad eveniet, aliquid,
												eum sint fuga eius, ratione suscipit ut minus voluptates dicta nesciunt.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Dashboard.propTypes = {
	history: PropTypes.object
};
