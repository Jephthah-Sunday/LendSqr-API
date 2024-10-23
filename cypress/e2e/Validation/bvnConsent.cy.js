Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false;
});

describe('POST /verification/bvn/:bvn', () => {
  it('should return status 200 and OTP request message for valid contact', () => {
    cy.request({
      method: 'POST',
      url: 'https://adjutor.lendsqr.com/v2/verification/bvn/22227628441',
      body: { contact: '08086916648' },
      headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` },
      timeout: 80000
    }).then(response => {
      console.log(response)
      cy.log(`Response Time: ${response.duration} ms`);
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Please provide the otp sent to your contact details');
    });
  });

  it('should return error for invalid BVN', () => {
    cy.request({
      method: 'POST',
      url: 'https://adjutor.lendsqr.com/v2/verification/bvn/22227628442',
      body: { contact: '08086916648' },
      failOnStatusCode: false,
      headers: { Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}`},
      timeout: 80000
    }).then(response => {
      cy.log(`Response Time: ${response.duration} ms`);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Enter a valid BVN number.");
    });
  });
});

