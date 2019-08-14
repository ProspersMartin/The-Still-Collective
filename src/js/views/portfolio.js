import React from "react";
import "../../styles/index.scss";

export class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<div className="portfolio_page_header text-center">
					<span id="portfolio_Ppage">Por</span>
					<span id="portfolio_TPpage">T</span>
					<span id="portfolio_Ppage">folio</span>
				</div>
				<div className="portfolio_page_description text-center mt-2 mb-5">
					<h1>Among the services The sTill Collective offers, the following are our premier services.</h1>
				</div>
				<div className="jumbotron mt-5 mb-5">
					<div className="row">
						<div className="col-4">
							<h1 className="display-4 Portfoliohead">
								Corporate <br />
								Rebranding
							</h1>
							<p className="lead">
								Is your company struggling to connect with the needs of its customers? Does your brand
								or company message convey something different than that of your products or services?
								Has your company&apos;s ability to match current industry standards and trends? If the
								answer is Yes to any of these questions, your brand may be in need of a Corporate
								overhaul. Corporate Rebranding can be a massive undertaking. and can mean the difference
								between whether your business ends up closing its doors, or sees success for aeons to
								come. We got you covered.
								{/* Skip steps to save time and/or money, but take it from the experts: cutting corners will
								only cost you in the long run */}
							</p>
							<hr className="my-4" />
							<p />
						</div>
						<div className="col-4">
							<h1 />
						</div>

						<div className="col-4">
							<img
								className="card-img-top"
								src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
								// src="https://d2w9rnfcy7mm78.cloudfront.net/1473357/original_9b105ddf959b3c3b1ce4b55fc7ed5939.png?1512137762"
								alt="Card image cap"
							/>
						</div>
					</div>
				</div>
				<div className="jumbotron col-md-12 mb-5">
					<div className="row">
						<div className="col-4">
							<img
								className="card-img-top"
								src="https://www.sharplaunch.com/wp-content/uploads/2016/02/commercial-real-estate-website-design-responsive-image.png"
								alt="Card image cap"
							/>
						</div>
						<div className="col-4">
							<h1 />
						</div>
						<div className="col-4">
							<h1 className="display-4 Portfoliohead">Website Design</h1>
							<p className="lead" />A website cannot succeed solely through compelling design or
							thought-provoking content. It needs to have a style that feeds into your website’s user
							experience and functionality while being easy to understand at first glance.
							<hr className="my-4" />
							<p />
						</div>
					</div>
				</div>
				<div className="jumbotron mb-5">
					<div className="row">
						<div className="col-4">
							<h1 className="display-4">Social Media Managment</h1>
							<p className="lead">
								Have a Strategy. Having the right social media strategy is key to the success of many
								modern businesses.
							</p>
							<hr className="my-4" />
							<p />
						</div>
						<div className="col-4">
							<h1 />
						</div>
						<div className="col-4">
							<img
								className="card-img-top"
								src="https://www.myadminsupport.co.uk/wp-content/uploads/2012/04/My-Admin-Support-Social-Media-Management-resized.jpg"
								alt="Card image cap"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
