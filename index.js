const EmailService = require('./EmailService');

const emailService = new EmailService();



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