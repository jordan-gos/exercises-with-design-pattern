/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

export class PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }
}

export class CreditCardPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    console.log('Validating credit card details...');
    console.log('Charging the credit card...');
  }
}

export class PayPalPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log('Redirecting to PayPal...');
    console.log('Completing PayPal transaction...');
  }
}

export class CashPayment {
  // Rename to distinguish from processPayment method above
  processCashPayment(amount: number): void {
    try {
      console.log(`Processing cash payment of $${amount}`);
      throw new Error('Cannot process cash payment online!');
    } catch (error) {
      console.error(error);
    }
  }
}

export function handlePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}

export function handleCashPayment(
  cashPayment: CashPayment,
  amount: number
): void {
  cashPayment.processCashPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
handleCashPayment(cashPayment, 50); // Output: Error: Cannot process cash payment online!
