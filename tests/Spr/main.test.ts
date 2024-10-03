// Importing necessary modules
import { SendNotification, EmailService } from '../../Solid/5.Dip/main';

describe('SendNotification', () => {
  let sendMailService: EmailService;
  let sendNotification: SendNotification;

  beforeEach(() => {
    sendMailService = new EmailService();
    sendNotification = new SendNotification(sendMailService);
  });

  test('should send notification using EmailService', () => {
    const message = 'Hello, this is a notification!';

    sendMailService.sendEmail = jest.fn();

    sendNotification.sendNotification(message);

    expect(sendMailService.sendEmail).toHaveBeenCalledWith(message);
  });
});
