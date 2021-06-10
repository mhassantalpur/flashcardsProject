import React from "react";
import DeckPreview from "./DeckPreview";
import Buttons from "../comp/Buttons";

/**
 * A DeckList component contains a list of DeckPreview components.
 */
function DeckList({ decks, removeDeck }) {
	const decksJSX = decks.map((deck) => <DeckPreview key={deck.id} deck={deck} removeDeck={removeDeck} />);

	return (
		<div id="deck-list">
			<Buttons names={["add-deck"]} />
			{decksJSX}
		</div>
	);
}

export default DeckList;