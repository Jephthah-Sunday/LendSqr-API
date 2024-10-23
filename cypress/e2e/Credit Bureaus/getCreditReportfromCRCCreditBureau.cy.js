describe('GET /creditbureaus/crc/:bvn', () => {
    it('should return status 200 and valid credit report', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/creditbureaus/crc/22227628441',
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body.data.nano_consumer_profile.consumer_details.name).to.eq('CHIMEZIE JEPHTHAH SUNDAY');
        expect(response.body.message).to.eq('Successful');
      });
    });
  
    it('should return error for invalid BVN', () => {
      cy.request({
        method: 'GET',
        url: 'https://adjutor.lendsqr.com/v2/creditbureaus/crc/22227628442',
        failOnStatusCode: false,
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq('The CRC credit bureau has no data for the provided bvn.');
      });
    });
  });
  