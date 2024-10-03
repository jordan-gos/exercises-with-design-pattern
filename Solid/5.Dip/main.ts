/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface SendMailService {
  sendEmail(message: string): void;
}

export class EmailService implements SendMailService {
  sendEmail(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

export class SendNotification {
  private sendMailService: SendMailService;

  constructor(sendMailService: SendMailService) {
    this.sendMailService = sendMailService;
  }

  sendNotification(message: string): void {
    this.sendMailService.sendEmail(message);
  }
}

const emailService = new EmailService();
const notification = new SendNotification(emailService);
notification.sendNotification('Hello, this is a notification!');
