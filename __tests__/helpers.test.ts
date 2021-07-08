import {maxParagraph} from '../src/helpers';

describe('Helpers unit test', () => {
  test('Max Paragraph', () => {
    const result = maxParagraph('Hello World!', 10);
    expect(result);
  });
});
