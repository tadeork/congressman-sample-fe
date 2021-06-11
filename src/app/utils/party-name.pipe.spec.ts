import { PartyNamePipe } from './party-name.pipe';

describe('PartyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PartyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
