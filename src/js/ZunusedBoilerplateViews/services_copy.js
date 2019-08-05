// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/Card";

// import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";
// import "../../styles/index.scss";

// export class Services extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="container rounded-0">
// 					<div>
// 						<h2>What your brand needs– How you want.</h2>
// 						<p id="servicesSectionBlurb">
// 							Are you missing the feature that is going to take your brand to the next level? We can help
// 							with that. The sTill Collective offers on demand access to a wide range of highly
// 							experienced professionals in their respective fields and beyond. And you don&apos;t even
// 							need to leave your office.
// 						</p>
// 						<p id="servicesSectionBlurb">Choose from these options (select all that apply):</p>
// 					</div>
                    
// 					<Context.Consumer>
// 						{({ store }) => {
// 							return (
// 								<div className="row">
// 									<div className="col-sm-6">
// 										<div className="card">
// 											<div className="card-body">
// 												<h3>{store.services[0].title}</h3>
// 												<p className="card-text">{store.services[0].shortdescription}</p>
                                                

// 												<a href="#" className="btn btn-primary">
// 													Juuuuust $ {store.services[0].cost}
// 												</a>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							);
// 						}}
// 					</Context.Consumer>

// 					<div className="mb-2 d-flex justify-content-center">
// 						<h3>Strategy</h3>
// 					</div>
// 					<div className="row d-flex justify-content-center m-auto">
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Organizational Analysis
// 						</Button>
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Action Planning
// 						</Button>
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Corporate Re-Branding
// 						</Button>
// 					</div>
// 					<div className="mb-2 mt-5 d-flex justify-content-center">
// 						<h3>Identity</h3>
// 					</div>
// 					<div className="row d-flex justify-content-center m-auto">
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Logo Design
// 						</Button>
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Website Design
// 						</Button>
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Product Design
// 						</Button>
// 					</div>
// 					<div className="mb-2 mt-5 d-flex justify-content-center">
// 						<h3>Marketing</h3>
// 					</div>
// 					<div className="row d-flex justify-content-center m-auto">
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Advertising
// 						</Button>
// 						<Button className="mx-5" variant="primary" size="lg">
// 							SEO
// 						</Button>
// 						<Button className="mx-5" variant="primary" size="lg">
// 							Social Media Management
// 						</Button>
// 					</div>
// 					<div className="mb-5" />
// 				</div>
// 				<div className="container my-5">
// 					<div className="card-deck">
// 						<div className="card">
// 							<img src="" className="card-img-top" alt="..." />
// 							<div className="card-body">
// 								<h5 className="card-title">sTill Standard</h5>
// 								<p className="card-text" />
// 								This package includes:
// 								<ul>
// 									<li>Logo Design</li>
// 									<li>Re-Branding</li>
// 									<li>Website Design</li>
// 									<li>Objective Planning</li>
// 								</ul>
// 								<p className="card-text">
// 									<small className="text-muted" />
// 								</p>
// 							</div>
// 						</div>
// 						<div className="card">
// 							<img
// 								src={
// 									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7_OHpyvDWvYNiQkJ9rYs798JMRXnQaC7nOw1zMelWMHEa8YAMQ"
// 								}
// 								className="card-img-top"
// 								alt="..."
// 							/>
// 							<div className="card-body">
// 								<h5 className="card-title">Supreme Collective Package</h5>
// 								<p className="card-text">Our Collective Package entails the following services.</p>
// 								<ul>
// 									<li>Logo Design</li>
// 									<li>Re-Branding</li>
// 									<li>Website Design</li>
// 									<li>Objective Planning</li>
// 									<li>4 Consultation / Progress Meetings</li>

// 									<li>Advertising</li>
// 									<li>SEO</li>
// 									<li>Social Media Management</li>
// 									<li>Content Development</li>
// 									<li>Photography</li>
// 								</ul>

// 								<p className="card-text">
// 									<small className="text-muted" />
// 								</p>
// 							</div>
// 						</div>
// 						<div className="card">
// 							<img src="..." className="card-img-top" alt="..." />
// 							<div className="card-body">
// 								<h5 className="card-title">Savvy Package</h5>
// 								<p className="card-text">The Platinum Package includes:</p>
// 								<ul>
// 									<li>Logo Design</li>
// 									<li>Re-Branding</li>
// 									<li>Website Design</li>
// 									<li>Objective Planning</li>
// 									<li>4 Consultation / Progress Meetings</li>
// 									<li>Marketing</li>
// 									<li>Advertising</li>
// 									<li>SEO</li>
// 									<li>Social Media Management</li>
// 								</ul>
// 								<p className="card-text">
// 									<small className="text-muted" />
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="my-5">
// 					<Button className="mx-5" variant="primary" size="lg">
// 						<Link to="/login">Let&apos;t Optimize Your Brand</Link>
// 					</Button>
// 				</div>
// 			</div>
// 		);
// 	}
// }
