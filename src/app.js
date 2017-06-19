import fetch from 'node-fetch'

export const API = 'https://netrunnerdb.com/api/2.0/'
export const PUBLIC = API + 'public/'
export const PRIVATE = API + 'private/'

// CARD
export function card(id) {
  return get(PUBLIC + 'card/' + id)
}

export function cards() {
  return get(PUBLIC + 'cards')
}

// CYCLE
export function cycle(code) {
  return get(PUBLIC + 'cycle/' + code)
}

export function cycles() {
  return get(PUBLIC + 'cycles/')
}

// DECKLISTS
export function decklist(id) {
  return get(PUBLIC + 'decklist/' + id)
}

export function decklistByDate(date) {
  if(!date) date = new Date()

  let str

  if(typeof(date) == 'object') {
    //Lmao date conversion.
    let day = pad(date.getDate().toString())
    let month = pad((date.getMonth() + 1).toString())
    let year = pad(date.getFullYear().toString())

    str = `${year}-${month}-${day}`
  }
  else if(typeof(date) == 'string') {
    str = date
  }

  return get(PUBLIC + 'decklists/by_date/' + str)

  function pad(what) {
    if(what.length < 1) return "00" + what
    else if(what.length < 2) return "0" + what
    else return what
  }
}

// FACTION
export function faction(code) {
  return get(PUBLIC + 'faction/' + code)
}

export function factions() {
  return get(PUBLIC + 'factions')
}

// MWL
export function mwl() {
  return get(PUBLIC + 'mwl')
}

// PACK
export function pack(code) {
  return get(PUBLIC + 'pack/' + code)
}

export function packs() {
  return get(PUBLIC + 'packs')
}

// PREBUILT
export function prebuilts() {
  return get(PUBLIC + 'prebuilts')
}

// SIDE
export function side(code) {
  return get(PUBLIC + 'side/' + code)
}

export function sides() {
  return get(PUBLIC + 'sides')
}

// TYPE
export function type(code) {
  return get(PUBLIC + 'type/' + code)
}

export function types() {
  return get(PUBLIC + 'types')
}

function get(url) {
  return fetch(url)
    .then((res) => {
      if(res.ok) return res.json().then(json => json.data)

      throw new Error(res.status + ' ' +res.statusText)
    })
}
