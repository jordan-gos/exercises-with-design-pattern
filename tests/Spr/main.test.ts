// Importing necessary methods from Jest
import { OldFashionedPrinter } from '../../Solid/4.Lsp/main'; // Adjust the path as needed

describe('OldFashionedPrinter', () => {
  let printer: OldFashionedPrinter;

  beforeEach(() => {
    printer = new OldFashionedPrinter();
  });

  test('should print a document', () => {
    console.log = jest.fn();

    printer.print('Document 1');

    expect(console.log).toHaveBeenCalledWith('Printing document: Document 1');
  });

  test('should throw error when scanning', () => {
    expect(() => printer.scan('Document 2')).toThrow('Scan not supported');
  });

  test('should throw error when faxing', () => {
    expect(() => printer.fax('Document 3')).toThrow('Fax not supported');
  });
});
