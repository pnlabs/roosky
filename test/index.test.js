const roosky = require("../lib/roosky")

const RegExp = /^[АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯабвгдежзиклмнопрстуфхцчшщэюя]+$/

describe("Test", () => {
	it("should be a not empty string", () => {
		expect(roosky.firstName()).not.toBeNull()
		expect(roosky.lastName()).not.toBeNull()
		expect(roosky.middleName()).not.toBeNull()
		expect(roosky.position()).not.toBeNull()
    })
    it("should be contained correct russian letters", () => {
        expect(roosky.firstName()).toMatch(RegExp)
        expect(roosky.lastName()).toMatch(RegExp)
        expect(roosky.middleName()).toMatch(RegExp)
        expect(roosky.position()).toMatch(RegExp)
    })
	it("should be a correct phone number", () => {
		expect(roosky.phone().length).toEqual(12)
		expect(roosky.phone()).toMatch(/^\+78/)
	})
})
