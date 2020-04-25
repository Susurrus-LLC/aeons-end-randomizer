const start = 2019
const now = new Date().getFullYear()

const years = () => {
  if (start === now) {
    return start
  } else {
    return `${start}–${now}`
  }
}

const version = '1.0.1'
const author = `Ian A.${String.fromCharCode(160)}Cook`
const authorUrl = 'https://github.com/nai888'
const ghUrl = 'https://github.com/Susurrus-LLC/aeons-end-randomizer'

export default { years, version, author, authorUrl, ghUrl }
