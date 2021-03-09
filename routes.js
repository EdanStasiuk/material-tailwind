const routes = [
  {
    name: 'Getting Started',
    path: '/documentation/quick-start',
    routes: [
      {
        path: '/documentation/quick-start',
        name: 'Quick Start',
      },
    ],
  },
  {
    name: 'CSS Components',
    path: '/documentation/css/alerts',
    routes: [
      {
        path: '/documentation/css/alerts',
        name: 'Alerts',
      },
      {
        name: 'Buttons',
        state: 'buttonsState',
        subRoutes: [
          {
            path: '/documentation/css/buttons/small/filled',
            name: 'Small Filled',
          },
          {
            path: '/documentation/css/buttons/regular/filled',
            name: 'Regular Filled',
          },
          {
            path: '/documentation/css/buttons/large/filled',
            name: 'Large Filled',
          },
          {
            path: '/documentation/css/buttons/small/outline',
            name: 'Small Outline',
          },
          {
            path: '/documentation/css/buttons/regular/outline',
            name: 'Regular Outline',
          },
          {
            path: '/documentation/css/buttons/large/outline',
            name: 'Large Outline',
          },
          {
            path: '/documentation/css/buttons/links',
            name: 'Links',
          },
        ],
      },
      {
        path: '/documentation/css/images',
        name: 'Images',
      },
      {
        name: 'Inputs',
        state: 'inputsState',
        subRoutes: [
          {
            path: '/documentation/css/inputs/small',
            name: 'Small Inputs',
          },
          {
            path: '/documentation/css/inputs/regular',
            name: 'Regular Inputs',
          },
          {
            path: '/documentation/css/inputs/large',
            name: 'Large Inputs',
          },
        ],
      },
      {
        path: '/documentation/css/labels',
        name: 'Labels',
      },
      {
        path: '/documentation/css/menus',
        name: 'Menus',
      },
      {
        path: '/documentation/css/navbars',
        name: 'Navbars',
      },
      {
        name: 'Pagination',
        state: 'paginationState',
        subRoutes: [
          {
            path: '/documentation/css/pagination/with-numbers',
            name: 'Only Numbers',
          },
          {
            path: '/documentation/css/pagination/with-previous',
            name: 'Prev and Next',
          },
          {
            path: '/documentation/css/pagination/with-first',
            name: 'First and Last',
          },
        ],
      },
      {
        path: '/documentation/css/progressbars',
        name: 'Progressbars',
      },
      {
        name: 'Typography',
        state: 'typographyState',
        subRoutes: [
          {
            path: '/documentation/css/typography/headings',
            name: 'Headings',
          },
          {
            path: '/documentation/css/typography/paragraphs',
            name: 'Paragraphs',
          },
        ],
      },
    ],
  },
  {
    name: 'React.js Components',
    path: '/documentation/react/alerts',
    routes: [
      {
        path: '/documentation/react/alerts',
        name: 'Alerts',
      },
      {
        name: 'Buttons',
        state: 'reactButtonsState',
        subRoutes: [
          {
            path: '/documentation/react/buttons/filled',
            name: 'Filled',
          },
          {
            path: '/documentation/react/buttons/outline',
            name: 'Outline',
          },
          {
            path: '/documentation/react/buttons/link',
            name: 'Link',
          },
        ],
      },
      {
        name: 'Dropdowns',
        state: 'reactDropdownsState',
        subRoutes: [
          {
            path: '/documentation/react/dropdowns/filled',
            name: 'Filled',
          },
          {
            path: '/documentation/react/dropdowns/outline',
            name: 'Outline',
          },
          {
            path: '/documentation/react/dropdowns/link',
            name: 'Link',
          },
        ],
      },
      {
        name: 'Dropups',
        state: 'reactDropupsState',
        subRoutes: [
          {
            path: '/documentation/react/dropups/filled',
            name: 'Filled',
          },
          {
            path: '/documentation/react/dropups/outline',
            name: 'Outline',
          },
          {
            path: '/documentation/react/dropups/link',
            name: 'Link',
          },
        ],
      },
      {
        path: '/documentation/react/images',
        name: 'Images',
      },
      {
        path: '/documentation/react/inputs',
        name: 'Inputs',
      },
      {
        path: '/documentation/react/labels',
        name: 'Labels',
      },
      {
        path: '/documentation/react/menus',
        name: 'Menus',
      },
      {
        path: '/documentation/react/modals',
        name: 'Modals',
      },
      {
        path: '/documentation/react/navbars',
        name: 'Navbars',
      },
      {
        path: '/documentation/react/paginations',
        name: 'Paginations',
      },
      {
        path: '/documentation/react/popovers',
        name: 'Popovers',
      },
      {
        path: '/documentation/react/progressbars',
        name: 'Progressbars',
      },
      {
        name: 'Tabs',
        state: 'reactTabsState',
        subRoutes: [
          {
            path: '/documentation/react/tabs/text',
            name: 'Text',
          },
          {
            path: '/documentation/react/tabs/icons',
            name: 'Icons',
          },
        ],
      },
      {
        path: '/documentation/react/tooltips',
        name: 'Tooltips',
      },
      {
        name: 'Typography',
        state: 'reactTypographyState',
        subRoutes: [
          {
            path: '/documentation/react/typography/headings',
            name: 'Headings',
          },
          {
            path: '/documentation/react/typography/paragraph',
            name: 'Paragraph',
          },
          {
            path: '/documentation/react/typography/leadText',
            name: 'Lead Text',
          },
          {
            path: '/documentation/react/typography/quote',
            name: 'Quote',
          },
          {
            path: '/documentation/react/typography/small',
            name: 'Small',
          },
        ],
      },
    ],
  },
];

export default routes;
