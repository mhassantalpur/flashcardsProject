import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Form from "../form/Form";
import DeckView from "./DeckView";
import DeckStudy from "./DeckStudy";

/**
 * A Deck component will display deck-related pages, 
 * depending on the url.
 */
function Deck({ editDeck, removeDeck, addCard, editCard, removeCard, abortController }) {
	const { deckId } = useParams();

	return (
		<div id={`deck-${deckId}`}>
			<Switch>
				<Route path="/decks/:deckId/study">
					<DeckStudy abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId/edit">
					<Form type="deck" edit={true} editDeck={editDeck} abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId/cards/new">
					<Form type="card" edit={false} addCard={addCard} abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId/cards/:cardId/edit">
					<Form type="card" edit={true} editCard={editCard} abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId">
					<DeckView removeDeck={removeDeck} removeCard={removeCard} abortController={abortController} />
				</Route>
			</Switch>
		</div>
	);
}
export default Deck;