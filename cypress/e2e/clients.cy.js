describe('Client API', () => {
    it('should return all clients', () => {
      cy.request('/clients').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an('array');
      });
    });
  
    // it('should return a client by ID', () => {
    //   const id = '1';
    //   cy.request(`/clients/${id}`).then((res) => {
    //     expect(res.status).to.eq(200);
    //     expect(res.body).to.have.property('id', id);
    //   });
    // });
  
    // it('should return 404 for invalid client ID', () => {
    //   cy.request({
    //     url: '/clients/non-existing-id',
    //     failOnStatusCode: false
    //   }).then((res) => {
    //     expect(res.status).to.eq(404);
    //     expect(res.body).to.have.property('error', 'Client not found');
    //   });
    // });
  });
  