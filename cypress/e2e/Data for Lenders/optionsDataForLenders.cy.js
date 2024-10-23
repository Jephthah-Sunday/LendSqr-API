describe('GET /data/options', () => {
    it('should return status 200 and fetch available data options', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/data/options',
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body.success).to.eq(true);
        expect(response.body.data).to.be.an('array');
        expect(response.body.data[0]).to.have.property('name');
        expect(response.body.data[0]).to.have.property('description');
        expect(response.body.data[0]).to.have.property('path');
      });
    });
  
    it('should return error for unauthorized access', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/data/options',
        failOnStatusCode: false
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq("We couldn't verify your access. Please check your authorization");
      });
    });
  });
  