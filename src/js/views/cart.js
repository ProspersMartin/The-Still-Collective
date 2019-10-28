import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const makeExcerpt = (content, limit) => {
	var result = "";
	("");
	var contentarr = content.split(" ");
	if (limit > contentarr.length) limit = contentarr.length;
	for (var i = 0; i < limit; i++) {
		result = " " + result + " " + contentarr[i];
	}
	if (limit < contentarr.length) result = result + "...";
	return result;
};

export class Cart extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="card shopping-cart">
								<div className="card-header text-light">
									<div className="clearfix" />
								</div>
								<div className="card-body">
									{/* PRODUCT */}
									{store.shoppingBag.map((item, index) => {
										return (
											<div key={index} className="row">
												<div className="col-4 text-md-left">
													<h4 className="product-name">
														<strong>{item.service_name}</strong>
													</h4>
													<h5 className="product-description">
														<small>{makeExcerpt(item.description, 10)}</small>
													</h5>
												</div>
												<div className="col-6  text-md-right row">
													<div
														className="col-3 col-sm-3 col-md-6 text-md-right"
														style={{ paddingTop: "5px" }}>
														<h6>
															<strong>${item.price + ".00"} </strong>
														</h6>
													</div>
													<div className="col-2 col-sm-2 col-md-2 text-right">
														<button
															type="button"
															className="btn btn-outline-danger btn-xs"
															onClick={() => {
																actions.deleteFromShoppingBag(index);
															}}>
															<i className="fa fa-trash" aria-hidden="true" />
														</button>
													</div>
												</div>
											</div>
										);
									})}

									<hr />
									{/* END PRODUCT */}
									{/* PRODUCT */}
								</div>
								<div className="card-footer">
									<div className="pull-right" style={{ margin: "10px" }}>
										<Link to="/checkout">
											<button className="btn btn-dark">Checkout</button>
										</Link>
										<div className="pull-right" style={{ margin: "5px" }}>
											Total price:{" "}
											<b>${store.shoppingBag.reduce((total, item) => total + item.price, 0)}</b>
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
