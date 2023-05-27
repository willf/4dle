import { FIRST_WORDS } from '../constants/firstWords'

// choose a random word from the wordlist
export const firstWord = () => {
  return FIRST_WORDS[
    Math.floor(Math.random() * FIRST_WORDS.length)
  ].toUpperCase()
}
