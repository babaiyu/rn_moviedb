import useHome from 'hooks/useHome';
import useDetail from 'hooks/useDetail';
import useSearch from 'hooks/useSearch';

describe('Hooks test', () => {
  test('useHome', () => {
    expect(useHome);
  });

  test('useDetail', () => {
    expect(useDetail);
  });

  test('useSearch', () => {
    expect(useSearch);
  });
});
