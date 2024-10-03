import {
  PaymentProcessor,
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
  handlePayment,
  handleCashPayment,
} from '../../Solid/3.Lsp/main';

describe('PaymentProcessor', () => {
  test('should process payment correctly', () => {
    const paymentProcessor = new PaymentProcessor();
    console.log = jest.fn();

    paymentProcessor.processPayment(100);

    expect(console.log).toHaveBeenCalledWith('Processing payment of $100');
  });
});

describe('CreditCardPayment', () => {
  test('should process credit card payment correctly', () => {
    const creditCardPayment = new CreditCardPayment();
    console.log = jest.fn();

    creditCardPayment.processPayment(100);

    expect(console.log).toHaveBeenCalledWith(
      'Processing credit card payment of $100'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Validating credit card details...'
    );
    expect(console.log).toHaveBeenCalledWith('Charging the credit card...');
  });
});

describe('PayPalPayment', () => {
  test('should process PayPal payment correctly', () => {
    const payPalPayment = new PayPalPayment();
    console.log = jest.fn();

    payPalPayment.processPayment(200);

    expect(console.log).toHaveBeenCalledWith(
      'Processing PayPal payment of $200'
    );
    expect(console.log).toHaveBeenCalledWith('Redirecting to PayPal...');
    expect(console.log).toHaveBeenCalledWith(
      'Completing PayPal transaction...'
    );
  });
});

describe('CashPayment', () => {
  test('should process cash payment correctly and throw an error', () => {
    const cashPayment = new CashPayment();

    console.log = jest.fn();
    console.error = jest.fn();

    handleCashPayment(cashPayment, 50);

    expect(console.log).toHaveBeenCalledWith('Processing cash payment of $50');
    expect(console.error).toHaveBeenCalledWith(
      new Error('Cannot process cash payment online!')
    );
  });
});

describe('handlePayment', () => {
  test('should handle payment with CreditCardPayment', () => {
    const creditCardPayment = new CreditCardPayment();
    console.log = jest.fn();

    handlePayment(creditCardPayment, 100);

    expect(console.log).toHaveBeenCalledWith(
      'Processing credit card payment of $100'
    );
  });

  test('should handle payment with PayPalPayment', () => {
    const payPalPayment = new PayPalPayment();
    console.log = jest.fn();

    handlePayment(payPalPayment, 200);

    expect(console.log).toHaveBeenCalledWith(
      'Processing PayPal payment of $200'
    );
  });
});
