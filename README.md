# parseName

旧姓併記に対応した名前パーサー

## Installation

```bash
npm install @toriyama/parsename
```

## Usage

```javascript
import { parseName } from "@toriyama/parsename";
console.log(parseName("岡本(大貫) かの子(カノ)"));
```

```javascript
{
	surname: "岡本",
	formerSurname: "大貫",
	givenName: "かの子",
	alternativeGivenName: "カノ"
}
```

## Author

Torichan([@CoconMap](https://twitter.com/coconmap))
