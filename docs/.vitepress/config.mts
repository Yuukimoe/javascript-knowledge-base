import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JavaScript knowledge base",
  description: "placeholder...",
  base: '/javascript-knowledge-base/',
  head: [
    ['link', { rel: 'icon', href: '/javascript-knowledge-base/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/m03uk1/javascript-knowledge-base/' },
      { text: 'Notion', link: 'https://m03uk1.notion.site/JavaScript-81ba996ec3b4418185d9442a347aa24a' }
    ],

    sidebar: [
      {
        text: 'Introduction to JavaScript',
        items: [
          { text: 'What is JavaScript?', link: '/01-introduction-to-java-script/01-introduction-to-java-script' },
          { text: 'History of JavaScript', link: '/01-introduction-to-java-script/02-history-of-java-script' },
          { text: 'How to run JavaScript?', link: '/01-introduction-to-java-script/03-how-to-run-java-script' },
        ]
      },
      {
        text: 'All About Variables',
        items: [
          { text: 'Variable Declarations', link: '/02-all-about-variables/01-variable-declarations' },
          { text: 'Hoisting', link: '/02-all-about-variables/02-hoisting' },
          { text: 'Variable Naming Rules', link: '/02-all-about-variables/03-variable-naming-rules' },
          { text: 'Variable Scopes', link: '/02-all-about-variables/04-variable-scopes' },
        ]
      },
      {
        text: 'Data Types',
        items: [
          { text: 'Primitive Types', link: '/03-data-types/01-primitive-types' },
          { text: 'Object', link: '/03-data-types/02-object' },
          { text: 'typeof operator', link: '/03-data-types/03-typeof-operator' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/m03uk1/javascript-knowledge-base/' },
    // ]
  }
})
