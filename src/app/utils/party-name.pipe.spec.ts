import { PartyNamePipe } from './party-name.pipe';

describe('PartyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PartyNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform to party name', () => {
    const pipe = new PartyNamePipe();
    expect(pipe.transform('D')).toBe('Democrat');
    expect(pipe.transform('R')).toBe('Republican');
  });
});
