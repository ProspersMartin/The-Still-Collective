import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	render() {
		let path = window.location.pathname;

		return (
			<nav className="navbar navbar-expand-md navbar-light">
				<Context.Consumer>
					{({ store, actions }) => (
						<div
							className={path == "/" ? "fadein navbar-collapse collapse" : "navbar-collapse collapse"}
							id="collapsingNavbar">
							<ul className="navbar-nav">
								<li className="nav-item mr-4">
									<Link to="/" className="stillLogoNav">
										<div>
											<span id="still_sNav">s</span>
											<span id="still_TNav">T</span>
											<span id="still_illNav">ill</span>
										</div>
									</Link>
								</li>
							</ul>
							<ul className="navbar-nav ml-auto ">
								<li className="nav-item mr-4">
									<Link to="/portfolio" className="navbarlink">
										<div>
											<span id="portfolio_porNav">Por</span>
											<span id="portfolio_TNav">T</span>
											<span id="portfolio_folioNav">folio</span>
										</div>
									</Link>
								</li>
								<li className="nav-item mr-4">
									<Link to="/Services" className="navbarlink" id="servicesNav">
										Services
									</Link>
								</li>
								<li className="nav-item mr-5">
									{!store.token ? (
										<Link to="/login" className="navbarlink">
											<div>
												<span id="collective_collecNav">The Collec</span>
												<span id="collective_TNav">T</span>
												<span id="collective_iveNav">ive </span>
												<span id="collective_loginNav"> Login</span>
											</div>
										</Link>
									) : (
										<Link to="/login" className="navbarlink">
											<span
												className="navbarlink"
												onClick={() => {
													actions.logoutClient(
														store.tempLoggedUser.client_id,
														this.props.history
													);
												}}
												id="collective_logoutNav">
												Logout
											</span>
										</Link>
									)}
								</li>
								<li className="nav-item mr-4">
									{" "}
									<Link to="/cart">
										<i className="fas fa-shopping-cart" style={{ color: "white" }} />
										<span className="badge badge-light">{store.shoppingBag.length}</span>
									</Link>
								</li>
							</ul>
						</div>
					)}
				</Context.Consumer>
			</nav>
		);
	}
}

Navbar.propTypes = {
	history: PropTypes.object
};
