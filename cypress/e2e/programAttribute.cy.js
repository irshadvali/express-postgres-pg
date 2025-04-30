describe('Program Attribute API', () => {
    it('should return all attributes', () => {
      cy.request('/program-attributes').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an('array');
      });
    });
  
    // it('should return a program attribute by ID', () => {
    //   const id = '1';
    //   cy.request(`/program-attributes/${id}`).then((res) => {
    //     expect(res.status).to.eq(200);
    //     expect(res.body).to.have.property('id', id);
    //   });
    // });
  
    // it('should return 404 for invalid attribute ID', () => {
    //   cy.request({
    //     url: '/program-attributes/non-existing-id',
    //     failOnStatusCode: false
    //   }).then((res) => {
    //     expect(res.status).to.eq(404);
    //     expect(res.body).to.have.property('error', 'ProgramAttribute not found');
    //   });
    // });
  });
  