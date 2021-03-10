function handleFedexPriceLogic(req, res) {
	// basic if statements until it's ironed out
	console.log(req.query);
	const type = req.query.type;
	const weight = req.query.weight;
	const zone = req.query.zone;
	let cost = "";
	if (type === "Letters (Stamped)") {
		if (weight <= 1) {
			cost = "$0.55"
		} else if (weight <= 2) {
			cost = "$0.75"
		} else if (weight <= 3) {
			cost = "$0.95"
		} else {
			cost = "$1.15"
		}
	} else if (type === "Letters (Metered)") {
		if (weight <= 1) {
			cost = "$0.51"
		} else if (weight <= 2) {
			cost = "$0.71"
		} else if (weight <= 3) {
			cost = "$0.91"
		} else {
			cost = "$1.11"
		}
	} else if (type === "Large Envelopes (Flats)") {
		if (weight <= 1) {
			cost = "$1.00"
		} else if (weight <= 2) {
			cost = "$1.20"
		} else if (weight <= 3) {
			cost = "$1.40"
		} else if (weight <= 4) {
			cost = "$1.60"
		} else if (weight <= 5) {
			cost = "$1.80"
		} else if (weight <= 6) {
			cost = "$2.00"
		} else if (weight <= 7) {
			cost = "$2.20"
		} else if (weight <= 8) {
			cost = "$2.40"
		} else if (weight <= 9) {
			cost = "$2.60"
		} else if (weight <= 10) {
			cost = "$2.80"
		} else if (weight <= 11) {
			cost = "$3.00"
		} else if (weight <= 12) {
			cost = "$3.20"
		} else if (weight <= 13) {
			cost = "$3.40"
		}
	} else if (type === "First-Class Package Service—Retail") {
		let initCost = 0;
		if (weight <= 4) {
			// only handling for zone one because I'm bored
			initCost = 4;
		} else if (weight <= 8) {
			initCost = 4.80;
		} else if (weight <= 12) {
			initCost = 5.50;
		} else {
			initCost = 6.25;
		}
		cost = initCost;
		cost.toString();
	}
	const params = {price: cost}
	res.render("price", params);
}

module.exports = {
	handleFedexPriceLogic
}