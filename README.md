<div align="center">
	<h1>Epic Games Free Games</h1>
  <a href="https://github.com/AuroPick/epic-free-games/blob/master/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/AuroPick/epic-free-games"></a>
  <a href="https://www.npmjs.com/package/epic-free-games"><img alt="npm" src="https://img.shields.io/npm/v/epic-free-games"></a>
  <a href="https://www.npmjs.com/package/epic-free-games"><img alt="npm" src="https://img.shields.io/npm/dm/epic-free-games"></a>
  </br>
  </br>
	<p><b>Get Weekly Epic Games Free Games</b></p>
</div>

## Installation

```js
npm i epic-free-games

// OR

yarn add epic-free-games
```

## Usage

```js
const { getGames } = require("epic-free-games");

// OR

import { getGames } from "epic-free-games";



getGames("JP", true).then(res => {
  // Do something
}).catch(err => {
  // Do something
});

```

## Function Parameters

| Function    | Parameter             | Parameter Values                                                                               | Default Value  |
| :---------: | :-------------------: | :--------------------------------------------------------------------------------------------: | :------------: |
| getGames    | country: `string`     | "TR", "US", "GB", "DE", "AR", "ES", "MX", "FR", "IT", "JP", "KR", "PL", "BR", "RU", "TH", "CN" | "US"           |
| getGames    | includeAll: `boolean` | true \| false                                                                                  | false          |

## Sample Output

```js
{
  currentGames: [
    {
      title: '3 out of 10: Season Two',
      id: '9fc33e99abf342138323856854e745ec',
      namespace: 'b829cfd910554ad3ad2eb3b314e2b1ef',
      description: '3 out of 10: Season Two',
      effectiveDate: '2021-04-08T15:00:00.000Z',
      offerType: 'BASE_GAME',
      expiryDate: null,
      status: 'ACTIVE',
      isCodeRedemptionOnly: false,
      keyImages: [Array],
      seller: [Object],
      productSlug: '3-out-of-10-season-2',
      urlSlug: 'mooncakegeneralaudience',
      url: null,
      items: [Array],
      customAttributes: [Array],
      categories: [Array],
      tags: [Array],
      price: [Object],
      promotions: [Object]
    }
  ],
  nextGames: [
    {
      title: "Ken Follett's The Pillars of the Earth",
      id: 'ded5930173d5495993186871fbfd329a',
      namespace: 'ce8393adfbf342ceab0a36479ffbc627',
      description: "Ken Follett's The Pillars of the Earth",
      effectiveDate: '2021-04-15T15:00:00.000Z',
      offerType: 'BASE_GAME',
      expiryDate: null,
      status: 'ACTIVE',
      isCodeRedemptionOnly: false,
      keyImages: [Array],
      seller: [Object],
      productSlug: 'ken-follets-the-pillars-of-the-earth',
      urlSlug: 'tiger-general-audience',
      url: null,
      items: [Array],
      customAttributes: [Array],
      categories: [Array],
      tags: [Array],
      price: [Object],
      promotions: [Object]
    },
    {
      title: 'Deponia: The Complete Journey',
      id: 'abdae4ebcf3e41beb6ec8040d818afcd',
      namespace: 'e5decf71f325458b92653616ee98682a',
      description: 'Deponia: The Complete Journey',
      effectiveDate: '2021-04-15T15:00:00.000Z',
      offerType: 'BASE_GAME',
      expiryDate: null,
      status: 'ACTIVE',
      isCodeRedemptionOnly: false,
      keyImages: [Array],
      seller: [Object],
      productSlug: 'deponia-the-complete-journey',
      urlSlug: 'ghoulgeneralaudience',
      url: null,
      items: [Array],
      customAttributes: [Array],
      categories: [Array],
      tags: [Array],
      price: [Object],
      promotions: [Object]
    },
    {
      title: 'The First Tree',
      id: '844f72b164ad4f5884c4feeca5561678',
      namespace: '489c2ca47aaa4190b694184b979d3b23',
      description: 'The First Tree',
      effectiveDate: '2021-04-15T15:00:00.000Z',
      offerType: 'BASE_GAME',
      expiryDate: null,
      status: 'ACTIVE',
      isCodeRedemptionOnly: false,
      keyImages: [Array],
      seller: [Object],
      productSlug: 'the-first-tree',
      urlSlug: 'the-first-tree',
      url: null,
      items: [Array],
      customAttributes: [Array],
      categories: [Array],
      tags: [Array],
      price: [Object],
      promotions: [Object]
    }
  ]
}
```
<hr/>

> If you have any questions please do not hesitate to contact me.

<hr/>

> If you want to support me, you can give a star. That makes me happy.
