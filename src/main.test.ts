import { parseName } from './main';

describe("併記なしの名前", () => {
	test("有島 武郎", () => {
		expect(parseName("有島 武郎")).toStrictEqual({
			surname: "有島",
			formerSurname: "",
			givenName: "武郎",
			alternativeGivenName: ""
		});
	});
	test("川端　康成", () => {
		expect(parseName("川端　康成")).toStrictEqual({
			surname: "川端",
			formerSurname: "",
			givenName: "康成",
			alternativeGivenName: ""
		});
	});
});

describe("併記ありの名前", () => {
	test("北(斎藤) 杜夫(宗吉)", () => {
		expect(parseName("北(斎藤) 杜夫(宗吉)")).toStrictEqual({
			surname: "北",
			formerSurname: "斎藤",
			givenName: "杜夫",
			alternativeGivenName: "宗吉"
		});
	});
	test("岡本(大貫) かの子(カノ)", () => {
		expect(parseName("岡本(大貫) かの子(カノ)")).toStrictEqual({
			surname: "岡本",
			formerSurname: "大貫",
			givenName: "かの子",
			alternativeGivenName: "カノ"
		});
	});
	test("室生 犀星(照道)", () => {
		expect(parseName("室生 犀星(照道)")).toStrictEqual({
			surname: "室生",
			formerSurname: "",
			givenName: "犀星",
			alternativeGivenName: "照道"
		});
	});
	test("佐多(窪川) 稲子", () => {
		expect(parseName("佐多(窪川) 稲子")).toStrictEqual({
			surname: "佐多",
			formerSurname: "窪川",
			givenName: "稲子",
			alternativeGivenName: ""
		});
	});
});