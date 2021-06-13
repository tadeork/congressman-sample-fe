import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform code gender', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform('M')).toBe('Male');
    expect(pipe.transform('F')).toBe('Female');
    expect(pipe.transform('N')).toBe('Other');
  });
});
