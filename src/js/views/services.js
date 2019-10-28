import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Session } from "bc-react-session";

export class Services extends React.Component {
	render() {
		return (
			<div>
				<div className="service_page_header text-center mb-5">Services</div>
				<div className="container rounded-0 bg-red">
					<div className="row">
						<div className="col-md-4">
							<h2 className="maintitle1 text-center">
								<span id="strategy_SServ">s</span>
								<span id="strategy_TServ">T</span>
								<span id="strategy_rategyServ">rategy</span>
							</h2>
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
							<h2 className="maintitle2 text-center">
								<span id="identity_IdenServ">Iden</span>
								<span id="identity_TServ">T</span>
								<span id="identity_ityServ">ity</span>
							</h2>
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
							<h2 className="maintitle3 text-center">
								<span id="marketing_MarkeServ">Marke</span>
								<span id="marketing_TServ">T</span>
								<span id="marketing_ingServ">ing</span>
							</h2>
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
					<h1 className="servicepackages text-center p-3">
						<span id="still_sServPacks">s</span>
						<span id="still_TServPacks">T</span>
						<span id="still_illServPacks">ill</span> <span id="packagesServPacks">Packages</span>
					</h1>
					<div className="card-deck">
						<div className="card bg-details1">
							{/* This is where the onClick will be set for the selection of the package. */}
							<div className="card-body ">
								<h5 className="card-title stillp text-center">
									<span id="still_sStndrPack">s</span>
									<span id="still_TStndrPack">T</span>
									<span id="still_illStndrPack">ill</span> <span id="standard_sStndrPack">s</span>
									<span id="standard_TStndrPack">T</span>
									<span id="standard_andardPack">andard</span>
								</h5>
								<hr />
								<p className="card-text li">The Standard package includes:</p>

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
								<h5 className="card-title stillp text-center">
									<span id="supreme_suprmPack">Supreme</span>{" "}
									<span id="Collective_collecSuprmPack">Collec</span>
									<span id="Collective_TsuprmPack">T</span>
									<span id="Collective_iveSuprmPack">ive</span>
								</h5>
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
								<h5 className="card-title stillp text-center">
									<span id="still_sSvgPack">s</span>
									<span id="still_TSvgPack">T</span>
									<span id="still_illSvgPack">ill</span> <span id="savage_SvgPack">Savage</span>
								</h5>
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
					<Link to="/checkout">
						<Button className="mx-3" id="proceed2ChkOut" variant="secondary" size="lg">
							Proceed to Checkout
						</Button>
					</Link>
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
