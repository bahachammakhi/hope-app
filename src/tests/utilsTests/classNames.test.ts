import classNames from '../../utils/classNames';

test('Testing Classnames if its works or no !', () => {
  expect(classNames('baha', 'chammakhi')).toBe('baha chammakhi');
});
