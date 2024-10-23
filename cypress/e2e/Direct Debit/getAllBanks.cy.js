describe('GET /direct-debit/banks', () => {
    it('should return status 200 and fetch the list of banks', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/banks',
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Successful');
        expect(response.body.data).to.be.an('array');
      });
    });
  
    it('should return error for unauthorized access', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/banks',
        failOnStatusCode: false,
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq("We couldn't verify your access. Please check your authorization");
      });
    });
  });
  