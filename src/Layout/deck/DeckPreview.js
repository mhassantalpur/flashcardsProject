import React from "react";
import Buttons from "../comp/Buttons";

/**
 * A DeckPreview component will show the name and description 
 * of a deck, as well as actions you can take with it.
 */
function DeckPreview({ deck, removeDeck }) {
	return (
		<div className="card mt-2" id={`deck-${deck.id}`}>
			<div className="card-body">
				<p className="card-subtitle mb-2 text-muted float-right">{deck.cards.length} cards</p>
				<h4 className="card-title">{deck.name}</h4>
				<p className="card-text">{deck.description}</p>
				<Buttons names={["view", "study", "delete-deck"]} deckId={deck.id} removeDeck={removeDeck} />
			</div>
		</div>
	);
}

export default DeckPreview;