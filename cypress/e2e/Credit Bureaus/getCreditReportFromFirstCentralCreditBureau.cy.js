describe('GET /creditbureaus/firstcentral/:bvn', () => {
    it('should return status 200 and valid credit report from FirstCentral', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/creditbureaus/firstcentral/22227628441',
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Successful');
      });
    });
  
    it('should return error for invalid BVN', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/creditbureaus/firstcentral/2222762842',
        failOnStatusCode: false,
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq('BVN must be exactly 11 characters long');
      });
    });
  });
  