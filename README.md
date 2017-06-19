# nrdb
NPM module for asynchronously querying the public endpoints of the NetrunnerDB API.

## Installation
```
npm install --save nrdb
// OR
yarn add nrdb
```

## Example usage

```javascript
var nrdb = require('nrdb')

// Print all cards on the latest MWL.
nrdb.mwl()
.then(data => {
  let cards = data[data.length-1].cards

  for(let each in cards) {
    nrdb.card(each)
    .then((data) => {
      let card = data[0]

      let mwlstars = (cards[each] === 3) ? "***" : "*"

      console.log(`${card.title} ${mwlstars}`)
    })
  }
})
```

## Implemented routes

See docs for each of those in the [NRDB API documentation](https://netrunnerdb.com/api/doc)

- `card(id)`
- `cards`
- `cycle(code)`
- `cycles`
- `decklist(id)`
- `decklistByDate(date)` (`date` is either a date string formatted with `YYYY-MM-DD` or a Date object)
- `faction(code)`
- `factions`
- `mwl`
- `pack(code)`
- `packs`
- `prebuilts`
- `side(code)`
- `sides`
- `type(code)`
- `types`
