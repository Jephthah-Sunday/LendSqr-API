describe('GET /decisioning/models/:id/settings', () => {
 
    it('should return status 200 and fetch details of a specific decision model', () => {
      cy.request({
        method: 'GET',
        url: `https://adjutor.lendsqr.com/v2/decisioning/models/11799/settings`,
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Successful');
        expect(response.body.data.id).to.eq(11799);
        expect(response.body.data).to.have.property('name');
      });
    });
  
    it('should return 404 for an invalid decision model ID', () => {
      cy.request({
        method: 'GET',
        url: `https://adjutor.lendsqr.com/v2/decisioning/models/21799/settings`,
        failOnStatusCode: false,
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(404);
        expect(response.body.message).to.eq('Decision model not found');
      });
    });
  
    it('should return error for unauthorized access', () => {
      cy.request({
        method: 'GET',
        url: `https://adjutor.lendsqr.com/v2/decisioning/models/11799/settings`,
        failOnStatusCode: false
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq("We couldn't verify your access. Please check your authorization");
      });
    });
  });
  