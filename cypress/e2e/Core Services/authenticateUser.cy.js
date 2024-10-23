describe('POST /customers/auth - Authenticate User', () => {
    it('should return status 200 and generate x-access-token upon successful authentication', () => {
      cy.request({
        method: 'POST',
        url: 'https://adjutor.lendsqr.com/v2/customers/auth',
        headers: {
            Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}` ,
          'Content-Type': 'application/json'
        },
        body: {
          email: 'sundaychimezie96@gmail.com', 
          password: 'P@sswor0d'     
        }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('x-access-token');
        expect(response.body.token_type).to.eq('Bearer');
      });
    });
  
    it('should return error for invalid credentials', () => {
      cy.request({
        method: 'POST',
        url: 'https://adjutor.lendsqr.com/v2/customers/auth',
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${Cypress.env('API_KEY_TWO')}`,
          'Content-Type': 'application/json'
        },
        body: {
          email: 'sunday@gmail.com', 
          password: 'Password'      
        }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq('Incorrect login credentials.');
      });
    });
  
    it('should return error for unauthorized access when Bearer token is missing', () => {
      cy.request({
        method: 'POST',
        url: 'https://adjutor.lendsqr.com/v2/customers/auth',
        failOnStatusCode: false,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
            email: 'sunday@gmail.com', 
            password: 'Password' 
        }
      }).then(response => {
        cy.log(`Response Time: ${response.duration} ms`);
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq("We couldn't verify your access. Please check your authorization");
      });
    });
  });
  