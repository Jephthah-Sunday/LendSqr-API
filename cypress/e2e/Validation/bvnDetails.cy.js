describe('PUT /verification/bvn/:bvn', () => {
    it('should return status 200 and BVN details on valid OTP', () => {
      cy.request({
        method: 'PUT',
        url: 'https://adjutor.lendsqr.com/v2/verification/bvn/22227628441',
        body: { otp: '623553' },
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}`  }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body.data.bvn).to.eq('22227628441');
        expect(response.body.message).to.eq('Successful');
      });
    });
  
    it('should return error for invalid OTP', () => {
      cy.request({
        method: 'PUT',
        url: 'https://adjutor.lendsqr.com/v2/verification/bvn/22222222222',
        body: { otp: 'abc' },
        failOnStatusCode: false,
        headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}`  }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq('Invalid OTP');
      });
    });
  });
  