import React from "react";
import Buttons from "../comp/Buttons";

/**
 * A CardView component is used when viewing a deck. 
 * It shows both sides of the card as well as buttons 
 * to delete/edit the card.
 */
function CardView({ card, removeCard }) {
	return (
		<ul className="list-group">
			<li className="list-group-item">{card.front}</li>
			<li className="list-group-item">{card.back}</li>
			<li className="list-group-item">
				<Buttons names={["delete-card", "edit-card"]} removeCard={removeCard} deckId={card.deckId} cardId={card.id}/>
			</li>
		</ul>
	);
}

export default CardView;