/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface PrintMachine {
  print(document: string): void;
}

interface ScanMachine {
  scan(document: string): void;
}

interface FaxMachine {
  fax(document: string): void;
}

export class OldFashionedPrinter
  implements PrintMachine, ScanMachine, FaxMachine
{
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    throw new Error('Scan not supported');
  }

  fax(document: string): void {
    throw new Error('Fax not supported');
  }
}

const printer = new OldFashionedPrinter();
printer.print('Document 1');

try {
  printer.scan('Document 2'); // Lỗi: Scan not supported
} catch (error) {
  console.error(error);
}
try {
  printer.fax('Document 3'); // Lỗi: Fax not supported
} catch (error) {
  console.error(error);
}
