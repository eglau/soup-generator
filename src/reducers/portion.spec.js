import portion from './portion';

describe('portion reducer', () => {
  it('should handle initial state', () => {
    expect(portion(undefined, {})).toBe(2);
  });
  it('should handle SET_PORTION_SIZE action', () => {
    expect(portion(1, { type: 'SET_PORTION_SIZE', size: 3})).toBe(3);
  });
});