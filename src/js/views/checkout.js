import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Checkout extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container mb-4" id="stillCheckOut">
							<div className="py-1 text-center">
								<div className="stillLogoChkOut">
									<span id="sChkOut">s</span>
									<span id="stillTChkOt">T</span>
									<span id="illChkOut">ill</span>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 order-md-2 mb-4">
									{/* Checkout Cart End */}
									<h4 className="d-flex justify-content-between align-items-center mb-3">
										<span className="text-muted">Your cart</span>
										<span className="badge badge-secondary badge-pill">
											{store.shoppingBag.length}
										</span>
									</h4>

									<ul className="list-group mb-3">
										{store.shoppingBag.map((item, index) => {
											return (
												<li
													key={index}
													className="list-group-item d-flex justify-content-between lh-condensed">
													<div>
														<h6 className="product-name my-0">{item.service_name}</h6>
													</div>
													<span className="text-muted">${item.price}</span>
												</li>
											);
										})}
										<li className="list-group-item d-flex justify-content-between">
											<span>Total (USD)</span>
											<strong>
												${store.shoppingBag.reduce((total, item) => total + item.price, 0)}
											</strong>
										</li>
									</ul>

									{/* Checkout Cart End */}
									<form className="card p-2">
										<div className="input-group">
											<input type="text" className="form-control mt-0" />
											<div className="input-group-append">
												<button type="submit" className="btn btn-secondary">
													Redeem
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-md-8 order-md-1">
									<h4 className="mb-3">Billing address</h4>
									<form className="needs-validation" noValidate>
										<div className="row">
											<div className="col-md-6 mb-3">
												<label htmlFor="firstName">First name</label>
												<input type="text" className="form-control" id="firstName" />
												<div className="invalid-feedback">Valid first name is required.</div>
											</div>
											<div className="col-md-6 mb-3">
												<label htmlFor="lastName">Last name</label>
												<input type="text" className="form-control" id="lastName" />
												<div className="invalid-feedback">Valid last name is required.</div>
											</div>
										</div>

										<div className="mb-3">
											<label htmlFor="email">Email</label>
											<input type="email" className="form-control" id="email" />
											<div className="invalid-feedback">
												Please enter a valid email address for shipping updates.
											</div>
										</div>
										<div className="mb-3">
											<label htmlFor="address">Address</label>
											<input type="text" className="form-control" id="address" required />
											<div className="invalid-feedback">Please enter your shipping address.</div>
										</div>

										<div className="row">
											<div className="col-md-5 mb-3">
												<label htmlFor="country">Country</label>
												<select className="custom-select d-block w-100" id="country" required>
													<option value>Choose...</option>
													<option>United States</option>
												</select>
												<div className="invalid-feedback">Please select a valid country.</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="state">State</label>
												<select className="custom-select d-block w-100" id="state" required>
													<option value>Choose...</option>
													<option>California</option>
												</select>
												<div className="invalid-feedback">Please provide a valid state.</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="zip">Zip</label>
												<input type="text" className="form-control" id="zip" required />
												<div className="invalid-feedback">Zip code required.</div>
											</div>
										</div>
										<hr className="mb-4" />

										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="save-info" />
											<label className="custom-control-label" htmlFor="save-info">
												Save this information for next time
											</label>
										</div>
										<hr className="mb-4" />
										<h4 className="mb-3">Payment</h4>
										<div className="d-block my-3">
											<div className="custom-control custom-radio">
												<input
													id="credit"
													name="paymentMethod"
													type="radio"
													className="custom-control-input"
													defaultChecked
													required
												/>
												<label className="custom-control-label" htmlFor="credit">
													Credit card
												</label>
											</div>
											<div className="custom-control custom-radio">
												<input
													id="debit"
													name="paymentMethod"
													type="radio"
													className="custom-control-input"
													required
												/>
												<label className="custom-control-label" htmlFor="debit">
													Debit card
												</label>
											</div>
											<div className="custom-control custom-radio">
												<input
													id="paypal"
													name="paymentMethod"
													type="radio"
													className="custom-control-input"
													required
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6 mb-3">
												<label htmlFor="cc-name">Name on card</label>
												<input type="text" className="form-control" id="cc-name" required />
												<small className="text-muted">Full name as displayed on card</small>
												<div className="invalid-feedback">Name on card is required</div>
											</div>
											<div className="col-md-6 mb-3">
												<label htmlFor="cc-number">Credit card number</label>
												<input type="text" className="form-control" id="cc-number" required />
												<div className="invalid-feedback">Credit card number is required</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 mb-3">
												<label htmlFor="cc-expiration">Expiration</label>
												<input
													type="text"
													className="form-control"
													id="cc-expiration"
													required
												/>
												<div className="invalid-feedback">Expiration date required</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="cc-expiration">CVV</label>
												<input type="text" className="form-control" id="cc-cvv" required />
												<div className="invalid-feedback">Security code required</div>
											</div>
										</div>
										<hr className="mb-4" />
										<div
											className="btn btn-dark btn-lg btn-block"
											onClick={() => {
												let cvv = document.querySelector("#cc-cvv").value;
												actions.generateOrder(cvv);
											}}>
											Complete Purchase
										</div>
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
