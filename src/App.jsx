import React from "react";

import github from "./images/icons/github.png";
import twitter from "./images/icons/twitter.svg";

import "./App.scss";

function App() {
	return (
		<>
			<section className="main">
				<main className="content">
					<h1 className="content__title">Alain Tran</h1>
					<h2 className="content__subtitle">Frontend Developer</h2>
					<ul className="content__list">
						<li className="list__item">
							<a
								className="item__link"
								href="https://github.com/alaincodes"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={github} alt="" />
							</a>
						</li>
						<li className="list__item">
							<a
								className="item__link"
								href="https://twitter.com/alaincodes"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={twitter} alt="" />
							</a>
						</li>
					</ul>
				</main>
			</section>
		</>
	);
}

export default App;
