import React from "react";

//include images into your bundle
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar
				Bootstrap="Star Boostrap"
				Principal="Home"
				About="About"
				Services="Services"
				Contact="Contact"
			/>
			<Jumbotron
				titlejumbo="A Warm Welcome!"
				descriptionjumbo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis ilo aspernatur vitae fugiat numquam repeliat."
				buttonURLjumbo="#"
				buttonLabeljumbo="Call to action!"
			/>
			<div className="d-flex justify-content-center">
				<Card
					imageUrlcard="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
					titlecard="Card Title"
					descriptioncard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					buttonUrlcard="#"
					buttonLabelcard="Find Out More!"
				/>
				<Card
					imageUrlcard="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
					titlecard="Card Title"
					descriptioncard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					buttonUrlcard="#"
					buttonLabelcard="Find Out More!"
				/>
				<Card
					imageUrlcard="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
					titlecard="Card Title"
					descriptioncard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					buttonUrlcard="#"
					buttonLabelcard="Find Out More!"
				/>
				<Card
					imageUrlcard="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
					titlecard="Card Title"
					descriptioncard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
					buttonUrlcard="#"
					buttonLabelcard="Find Out More!"
				/>
			</div>
			<Footer Copy="Copyright @" Web=" Your Website 2019" />
		</div>
	);
}
