import React from "react";
import Buttons from "../comp/Buttons";

/**
 * A NotEnoughCards component is displayed when a user tries to study a deck
 * with too little cards.
 */
function NotEnoughCards({ length, id }) {
	return (
		<div id="card-error">
			<h3>Not enough cards.</h3>
			<p>You need at least 3 cards to study. There are {length} cards in this deck.</p>

			<Buttons names={["add-card"]} deckId={id} />
		</div>
	);
}

export default NotEnoughCards;