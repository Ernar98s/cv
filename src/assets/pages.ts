interface Ipage {
  id: number,
  text: string,
  canCopy?: boolean
}

export const pages: Ipage[] = [
  {
    id: 1,
    text: 'Name: Shandalinov Ernar Maratovich \n\nEmail: ernar98s@mail.ru \n\nMyGitHub: Github'
  },
  {
    id: 2,
    text: 'About Me \nAspiring to secure a position as a Vue.js Frontend Developer \nto leverage my skills \nin developing modern and responsive web applications \nthat enhance user experience.'
  },
  {
    id: 3,
    text: 'Work Experience Frontend Developer \n\nKMF — Almaty \nJuly, 2023 – Present \n\nDeveloped and maintained web applications using Vue 3 and Pinia. Optimized application performance,\nminimizing page load times.\nCollaborated with designers and backend developers to implement user interfaces.\nWrote unit tests using Jest and Cypress.\n------- \n\nBambiniFashion — Vienna \nJune, 2022 – June, 2023 \n\nDeveloped and maintained web store using Nuxt2 and Vuex, created features for new clients\nCollaborated with other frontend developers for better time management\n------- \n\nTheFlow — Almaty \nAugust, 2020 – June, 2022 \n\nDeveloped and maintained web platform of studying courses, \nCollaborated with backend developers and platform students, getting their feedback for optimizing the project'
  },
  {
    id: 4,
    text: 'www.google.kz',
    canCopy: true
  },
]
