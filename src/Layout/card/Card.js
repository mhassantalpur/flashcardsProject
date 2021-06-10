import React from "react";

/**
 * A Card component is used during a Study session. 
 * It shows the front side and can be flipped to the back.
 */
function Card({ deck, cardNum, flipped, flip, next }) {
	return (
		<div className="card mt-2" id={`card-${deck.id}`}>
			<div className="card-body">
				<h4 className="card-title">Card {cardNum + 1} of {deck.cards.length}</h4>
				<p className="card-text">{deck.cards[cardNum][flipped ? "back" : "front"]}</p>
				<button type="button" className="btn btn-secondary mr-2" onClick={flip}>
					Flip
				</button>
				{flipped &&
					<button type="button" className="btn btn-primary mr-2" onClick={next}>
						Next
					</button>
				}
			</div>
		</div>
	);
}

export default Card;