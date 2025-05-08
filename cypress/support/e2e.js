Cypress.on('fail', (error, runnable) => {
    // take screenshot manually
    cy.screenshot(`${runnable.parent.title} -- ${runnable.title}`, { capture: 'runner' });
    throw error; // still fail the test
  });
  