// import { Notify } from "bc-react-notifier";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			strategyCardContent: [
				{
					title: "Corporate Re-Branding",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
					header: "",
					info: ""
				},
				{
					title: "Web Design",
					image:
						"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/759968/settings_images/5IbPvI1gRqqi3sgZUpJ5_MORE_LOGO_AllTeal300-01.png",

					info: ""
				},
				{
					title: "Social Media Managment",
					image: "https://www.canny-creative.com/wp-content/uploads/2019/02/digital-marketing-tools.jpg",
					info: ""
				}
			],

			termsNConditions: [
				{
					header: "Refunds:",
					tcSectionBody:
						"Your satisfaction is our #1 priority. If you are not happy with your purchase for any reason, please contact us within 30 days for a full refund."
				},

				{
					header: "Privacy Policy:",
					tcSectionBody:
						'Last updated: November 10, 2015 sTill Collective ("us”, “we”, or “our”) operates the sTillCollective.com website (the “Service”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service. We will not use or share your information with anyone except as described in this Privacy Policy. We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at http://www.sTillCollective.com'
				},
				{
					header: "Information Collection And Use:",
					tcSectionBody:
						"While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address and other information (“Personal Information”)."
				},
				{
					header: "Log Data:",
					tcSectionBody:
						"We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics."
				},
				{
					header: "Cookies:",
					tcSectionBody:
						"Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.\
						We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."
				}
			],
			serviceCatalog: [],
			shoppingBag: [],
			client: [],
			tempLoggedUser: null,
			token: null
		},

		actions: {
			logoutClient: id => {
				setStore({ tempLoggedUser: null, token: null });
			},
			authenticateLogin: (email, password, history) => {
				const store = getStore();
				const url = process.env.HOST + "/login";
				let loggedUser = store.client.find(item => {
					return item.email == email;
				});

				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt, tempLoggedUser: loggedUser });
							history.push("/dashboard");
						}
					})
					.then(changeStatus => {
						fetch(`${process.env.HOST}/client/${loggedUser.client_id}`, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								authorization: "Bearer " + store.token
							},
							body: JSON.stringify({
								client_login_status: true
							})
						});
					})
					.then(getClientBack => {
						const url = process.env.HOST + "/client";
						fetch(url, {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(response => response.json())
							.then(data => {
								const store = getStore();
								setStore({ client: data });
							})
							.catch(error => console.error("Error: It didn't work. Try again", error));
					})
					.catch(error => console.error("Error: It didn't work. Try again", error));
				setStore({ tempLoggedUser: loggedUser });
			},

			createClient: (name, email, password, history) => {
				const url = process.env.HOST + "/client";
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						name: name,
						email: email,
						password: password
					})
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log("Account Successfully Created", data);
						history.push("/dashboard");
					})
					.catch(error => console.error("Error: This didn't work. Try again", error));
			},

			addToShoppingBag: item => {
				const store = getStore();
				setStore({ shoppingBag: store.shoppingBag.concat([item]) });
			},
			deleteFromShoppingBag: i => {
				const store = getStore();
				const newBag = store.shoppingBag.filter((item, index) => i !== index);
				setStore({ shoppingBag: newBag });
			},

			getServices: () => {
				fetch(`${process.env.HOST}/services`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ serviceCatalog: data });
					})
					.catch(error => console.error("Error: It didn't work. Try again", error));
			},

			getClients: () => {
				fetch(`${process.env.HOST}/client`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ client: data });
					})
					.catch(error => console.error("Error: It didn't work. Try again", error));
			},

			// const store = getStore();
			// store.shoppingBag.push(item.name,item.price);
			// fetch( , {
			// 	method: "POST"
			// }).then(() => {
			// 	fetch(url)
			// 		.then(response => response.json())
			// 		.then(updatedData => {
			// 			store.cart = updatedData.reverse();
			// 			setStore({ store, cart });
			// 		});

			generateOrder: cvv => {
				const store = getStore();
				const url = process.env.HOST + "/orders";
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						cvv: cvv,
						items: store.shoppingBag
					})
				});
				// .then(resp => resp.json())
				// .then(data => {
				// 	console.log("Account Successfully Created", JSON.stringify(data));
				// 	history.push("/dashboard");
				// })
				// .catch(error => console.error("Error:", error));
			}
		}
	};
};

export default getState;
