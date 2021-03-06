const c = "бвгджзклмнпрстфхцчшщ"
const v = "аеиоуэюя"
const lnTails = ["ов", "ин", "ев"]
const posTails = ["ер", "ор", "ист", "ик"]
const cityTails = ["дар", "град", "рск", "йск", "во", "хабль", "бург"]
const e = "abcdefghijklmnopqrstuvwxyz"

const randomChar = (s: string) => {
	const position = Math.trunc(Math.random() * s.length)
	return s.slice(position, position + 1)
}

const randomTail = (tails: string[]) => {
	const position = Math.trunc(Math.random() * tails.length)
	return tails[position]
}

const firstName = () => {
	const sylls = Math.trunc(Math.random() * 3 + 1)
	let name = ""
	for (let s = 0; s < sylls; s++) {
		name =
			name +
			(s === 0 ? randomChar(c).toUpperCase() : randomChar(c)) +
			randomChar(v)
	}
	name = name + randomChar(c)
	return name
}

const lastName = () => {
	const sylls = Math.trunc(Math.random() * 4 + 1)
	let name = ""
	for (let s = 0; s < sylls; s++) {
		name =
			name +
			(s === 0 ? randomChar(c).toUpperCase() : randomChar(c)) +
			randomChar(v)
	}
	name = name + randomChar(c)
	name = name + randomTail(lnTails)
	return name
}

const middleName = () => {
	return lastName() + "ич"
}

const phone = () => {
	return (
		"+7" +
		String(Math.trunc(Math.random() * 19) + 881) +
		String(Math.trunc(Math.random() * 10000000)).padStart(7, "0")
	)
}

const position = () => {
	const sylls = Math.trunc(Math.random() * 4 + 1)
	let string = ""
	for (let s = 0; s < sylls; s++) {
		string = string + randomChar(c) + randomChar(v)
	}
	return string + randomTail(posTails)
}

const email = () => {
	let string = ""
	for (let s = 0; s < Math.trunc(Math.random() * 6 + 1); s++) {
		string = string + randomChar(e)
	}
	string = string + '@'
	for (let s = 0; s < Math.trunc(Math.random() * 6 + 1); s++) {
		string = string + randomChar(e)
	}
	string = string + '.ru'
	return string
}

const city = () => {
	const sylls = Math.trunc(Math.random() * 4 + 1)
	let city = ""
	for (let s = 0; s < sylls; s++) {
		city =
			city +
			(s === 0 ? randomChar(c).toUpperCase() : randomChar(c)) +
			randomChar(v)
	}
	city = city + randomTail(cityTails)
	return city
}

export { firstName, lastName, middleName, phone, position, email, city }
export default { firstName, lastName, middleName, phone, position, email, city }
