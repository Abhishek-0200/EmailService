const EmailService = require('./EmailService');

const emailService = new EmailService();

// Dummy request
// emailService.sendEmail({
//   requestId: 'req-123',
//   to: 'user@example.com',
//   subject: 'Test Email',
//   body: 'This is a test email.'
// });


(function () {
    for(let i =0;i<5;i++)
{

    
    

    emailService.sendEmail( {
       requestId: `requestedId-${i+1}`,
  to: `user${i}example.com`,
  subject: 'Test Email',
  body: ` this is test email ${i}`  
    })
}
})();