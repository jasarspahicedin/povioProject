### Start Cypress

After you clone this project on your localy machine, just run: npm i from root folder

Install Cypress by runing:
npm install cypress

from root:
`node_modules\.bin\cypress open`

then select test which you want to run
![cypress main window](https://i.ibb.co/k1hm2Lq/Screenshot-2020-02-24-at-15-26-39.png)

### Run from console

from root:
`npm run test`

run healthCheck test:
`npm run health-check`

run single test:
`node_modules\.bin\cypress -- --spec "cypress\integration\createProposal.specs.js"`

find more options [here](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)

### Run Prettier
npm run format

#### Fixtures

All test data should be added in `cypress/fixtures` folder like a .json file, then we can use it like a requrie()

```javascript
const data = require('../../fixtures/example.json');
```

or with cy.fixture like it is described [here](https://docs.cypress.io/api/commands/fixture.html#Syntax)

#### Selectors

We can use CSS selectors or xpath selectors, css are default selectors, so if we want to use xpath we have to use it like:

```javascript
cy.xpath('//span[text()="Postpone"]');
```

some selectors are more stable then other, please try to not use selectors which are depended to parent elements
for example, if we use selector `body > div > div > div > div.proposal-tool-header > div.button-section > div > button`,
this mean if we move this button from one parent element, our test will failed.

Also tag elements are not stable `button`, if we add one more button to the page cypress can click wrong one.

Best selector will be if wee add a custom attribute like `data-cy=submit` so we can add a ids for automation,
Refer a following table for css selectors:

| Selector                            | Recommended | Notes                                                           |
| ----------------------------------- | ----------- | --------------------------------------------------------------- |
| cy.get('button').click()            | Never       | Worst - too generic, no context.                                |
| cy.get('.btn.btn-large').click()    | Never       | Bad. Coupled to styling. Highly subject to change.              |
| cy.get('#main').click()             | Sparingly   | Better. But still coupled to styling or JS event listeners.     |
| cy.get('[name=submission]').click() | Sparingly   | Coupled to the name attribute which has HTML semantics.         |
| cy.contains('Submit').click()       | Depends     | Much better. But still coupled to text content that may change. |
| cy.get('[data-cy=submit]').click()  | Always      | Best. Isolated from all changes.                                |

### Best Practices

Cypress official best practices can be found [here](https://docs.cypress.io/guides/references/best-practices.html)
