# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
An Advice Generator App built with Advice slip API

### The challenge

Users should be able to: click on the dice button to genrate a new advice

- 


### Links

- Solution URL: [Add solution URL here](https://github.com/JUNNY12/frontend-mentor-advice-generator-challenge)
- Live Site URL: [Add live site URL here](https://frontend-mentor-advice-generator-challenge-seven.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

I learnt about using promises through the fetch API

To see how you can add code snippets, see below:

```js
fetch(`https://api.adviceslip.com/advice`)
    .then(data => data.json())
    .then(adviceData => {
        console.log(adviceData.slip)
        populateQuote(adviceData.slip)
    })
    .catch(err => console.log(err))
}
```

### Continued development

I would love to work more on manipulating thegit DOM


## Author
- Frontend Mentor - [@JUNNY12](https://www.frontendmentor.io/profile/JUNNY12)
- Twitter - [@juwonemmanuel6](https://www.twitter.com/juwonemmanuel6)
