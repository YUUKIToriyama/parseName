export const parseName = (name: string) => {
	const [surname, givenName] = name.split(/ |　/);
	const regex = new RegExp("^(?<name>[^\(]+)(?<alternative>\(.*?\))$");
	const surnameResult = surname.match(regex);
	const givenNameResult = givenName.match(regex);
	return {
		surname: surnameResult.groups["name"] || "",
		formerSurname: surnameResult.groups["alternative"].replace(/\(|\)/g, "") || "",
		givenName: givenNameResult.groups["name"] || "",
		alternativeGivenName: givenNameResult.groups["alternative"].replace(/\(|\)/g, "") || ""
	}
}