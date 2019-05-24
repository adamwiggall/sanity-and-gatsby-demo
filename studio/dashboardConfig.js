export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce824b669ea93017c7cf24f',
                  title: 'Sanity Studio',
                  name: 'sanity-and-gatsby-demo-studio',
                  apiId: 'daa8fff1-0c27-4d2f-96bf-785c5b39fe5c'
                },
                {
                  buildHookId: '5ce824b6ee78fe01823fe020',
                  title: 'Blog Website',
                  name: 'sanity-and-gatsby-demo',
                  apiId: 'cb4b17a6-4d3f-4176-865c-760bfcb4633a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamwiggall/sanity-and-gatsby-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-and-gatsby-demo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
