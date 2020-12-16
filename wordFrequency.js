const removeWords = ["aboard",
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "amid",
  "among",
  "around",
  "as",
  "at",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "between",
  "beyond",
  "but",
  "by",
  "concerning",
  "considering",
  "despite",
  "down",
  "during",
  "except",
  "following",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "minus",
  "near",
  "next",
  "of",
  "off",
  "on",
  "onto",
  "opposite",
  "out",
  "outside",
  "over",
  "past",
  "per",
  "plus",
  "regarding",
  "round",
  "save",
  "since",
  "than",
  "through",
  "till",
  "to",
  "toward",
  "under",
  "underneath",
  "unlike",
  "until",
  "up",
  "upon",
  "versus",
  "via",
  "with",
  "within",
  "without",
  "and", "the", "to", "of", "a", "for", "", "is", "are", "can", "were", "that", "you"]



const skills = ["javascript", 'react', 'node', 'express', 'ruby', 'rails', 'python', 'bootcamp', 'sql', 'psql', 'mongodb', 'airtable', 'artist', 'art', 'api', 'html', 'css', 'html5', 'css3', 'git', 'github']

const text = document.querySelector('.string-form')
const btn = document.querySelector('button')


const removeRes = () => {
  const counts = document.querySelectorAll('.count')
  counts.forEach(count => {
    count.remove()
  })

  const words = document.querySelectorAll('.word')
  words.forEach(word => {
    word.remove()
  })
}


const parse = () => {
  const regex = /\s|\n|\W+/g
  const wordsArr = text.value.split(regex) // splitting by spaces, newlines, and chars that aren't words
  const wordsObj = {}
  removeRes()

  wordsArr.forEach(w => {
    const cleanWord = w.toLowerCase()

    if (!removeWords.includes(cleanWord)) {
      if (wordsObj[cleanWord]) wordsObj[cleanWord] += 1
      else wordsObj[cleanWord] = 1
    }
  })
  const uniqueWordsArr = []
  for (let key in wordsObj) {
    uniqueWordsArr.push([key, wordsObj[key]])
  }

  const orderedWords = uniqueWordsArr.sort((a, b) => b[1] - a[1])

  displayWordFreq(orderedWords) // display unique ordered words
  const impFreq = orderedWords.filter(arr => arr[1] > 3 || skills.includes(arr[0]))
  displayImpFreq(impFreq)
}


const displayWordFreq = (order) => {
  const results = document.querySelector('.all-words-results')

  const wordCount = order.length
  const h3 = document.createElement('h3')

  h3.className = "count"
  h3.textContent = `Word Count (unique): ${wordCount}`
  results.appendChild(h3)

  order.forEach(arr => {
    const results = document.querySelector('.all-words-results')

    const name = document.createElement('h4')
    const frequency = document.createElement('p')
    const li = document.createElement('li')

    li.className = 'word' // for styling
    if (arr[1] > 3) li.classList.add('important')
    if (skills.includes(arr[0])) li.classList.add('skill')
    name.textContent = arr[0]
    frequency.textContent = `(${arr[1]})`

    li.appendChild(name)
    li.appendChild(frequency)
    results.appendChild(li)
  })

}

const displayImpFreq = (order) => {

  const results = document.querySelector('.freq-words-results')

  const wordCount = order.length
  const h3 = document.createElement('h3')

  h3.className = "count"
  h3.textContent = `Word Count (unique): ${wordCount}`
  results.appendChild(h3)

  order.forEach(arr => {
    const results = document.querySelector('.freq-words-results')

    const name = document.createElement('h4')
    const frequency = document.createElement('p')
    const li = document.createElement('li')

    li.className = 'word' // for styling
    if (arr[1] > 3) li.classList.add('important')
    if (skills.includes(arr[0])) li.classList.add('skill')
    name.textContent = arr[0]
    frequency.textContent = `(${arr[1]})`

    li.appendChild(name)
    li.appendChild(frequency)
    results.appendChild(li)
  })

}

btn.addEventListener('click', parse)
