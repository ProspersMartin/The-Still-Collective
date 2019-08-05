import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Session } from "bc-react-session";

// Session.start({
// 	payload: {
// 		name: [],
// 		price: []
// 	},
// 	expiration: 86400000
// });

export class Services extends React.Component {
	render() {
		return (
			<div>
				<div className="container rounded-0 bg-red">
					<div className="row">
						<div className="col-md-4">
							<h2 className="text-center maintitle1">Strategy</h2>
							<p className="servicep">
								We help you build trust with your customers, through a comprehensive layout of your
								business objectives and how to execute them.
							</p>

							<Context.Consumer>
								{({ store, action }) => {
									return store.serviceCatalog
										.filter(s => s.service_type == "Strategy")
										.map((item, index) => {
											return (
												<Link
													to={"/single-service/" + item.id}
													key={index}
													style={{ textDecoration: "none" }}>
													<div className="card col-12 my-4 servicecard2">
														{/* This is where the onClick will be set for the selection of the package. */}
														<div className="card-body">
															<p className="card-text servicetext">
																{item.service_name}{" "}
															</p>

															<p className="card-text servicetext">$ {item.price}</p>
														</div>
													</div>
												</Link>
											);
										});
								}}
							</Context.Consumer>
						</div>

						<div className="col-md-4">
							<h2 className="text-center maintitle2">Identity</h2>
							<p className="servicep">
								Design, Logos, and Websites - The visuals of your business, essential for Branding so
								that people know who you are.
							</p>
							<Context.Consumer>
								{({ store, action }) => {
									return store.serviceCatalog
										.filter(s => s.service_type == "Identity")
										.map((item, index) => {
											return (
												<Link
													to={"/single-service/" + item.id}
													key={index}
													style={{ textDecoration: "none" }}>
													<div key={index} className="card col-12 my-4 servicecard2">
														{/* This is where the onClick will be set for the selection of the package. */}
														<div className="card-body">
															<p className="card-text servicetext">{item.service_name}</p>
															<p className="card-text servicetext">$ {item.price}</p>
														</div>
													</div>
												</Link>
											);
										});
								}}
							</Context.Consumer>
						</div>

						<div className="col-md-4">
							<h2 className="text-center maintitle3">Marketing</h2>
							<p className="servicep">
								A successful business is one that has its name out there. Need help spreading the word?
								We&apos;ve got you covered.
							</p>
							<Context.Consumer>
								{({ store, action }) => {
									return store.serviceCatalog
										.filter(s => s.service_type == "Marketing")
										.map((item, index) => {
											return (
												<Link
													to={"/single-service/" + item.id}
													key={index}
													style={{ textDecoration: "none" }}>
													<div key={index} className="card col-12 my-4 servicecard2">
														{/* This is where the onClick will be set for the selection of the package. */}
														<div className="card-body">
															<p className="card-text servicetext">{item.service_name}</p>
															<p className="card-text servicetext"> $ {item.price}</p>
														</div>
													</div>
												</Link>
											);
										});
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>

				<div className="container rounded-0 my-5 bg-red">
					<h1 className="text-center p-3 servicepackages">sTill Packages</h1>
					<div className="card-deck">
						<div className="card bg-details1">
							{/* This is where the onClick will be set for the selection of the package. */}
							<div className="card-body ">
								<h5 className="card-title stillp ">sTill Standard</h5>
								<hr />
								<p className="card-text li">This package includes:</p>

								<ul className="li">
									<li>Logo Design</li>
									<li>Re-Branding</li>
									<li>Website Design</li>
									<li>Objective Planning</li>
								</ul>
								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
						<div className="card bg-details2">
							<div className="card-body">
								<h5 className="card-title stillp ">Supreme Collective</h5>
								<hr />
								<p className="card-text li">Our Collective Package entails the following services.</p>
								<ul className="li">
									<li>Logo Design</li>
									<li>Re-Branding</li>
									<li>Website Design</li>
									<li>Objective Planning</li>
									<li>4 Consultation / Progress Meetings</li>

									<li>Advertising</li>
									<li>SEO</li>
									<li>Social Media Management</li>
									<li>Content Development</li>
									<li>Photography</li>
								</ul>

								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
						<div className="card bg-details3">
							<div className="card-body">
								<h5 className="card-title stillp"> sTill Savage</h5>
								<hr />
								<p className="card-text li">The Platinum Package includes:</p>
								<ul className="li">
									<li>Logo Design</li>
									<li>Re-Branding</li>
									<li>Website Design</li>
									<li>Objective Planning</li>
									<li>4 Consultation / Progress Meetings</li>
									<li>Marketing</li>
									<li>Advertising</li>
									<li>SEO</li>
									<li>Social Media Management</li>
								</ul>
								<p className="card-text">
									<small className="text-muted" />
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="my-5 text-center">
					<Button className="mx-3 " variant="light" size="lg">
						<Link to="/checkout">Proceed to Checkout</Link>
					</Button>
				</div>
			</div>
		);
	}
}
// onClick={() => {
// let { payload } = Session.get();
// Session.setPayload({ name: item.name, price: item.price });
// // let session = Session.get();
// alert(
// 	Session.get().payload.name +
// 		" " +
// 		Session.get().payload.price
// );
//<div key={index}
//onClick={() => actions.goToCheckout()}
//className="card col-12 my-4 servicecard2 card-click">
//<div className="card-body">
//	<p className="card-text servicetext">{item.name}</p>
//	<p className="card-text servicetext">{item.price}</p>
//</div>
//</div>
