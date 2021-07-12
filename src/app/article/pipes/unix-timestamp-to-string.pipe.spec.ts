import { UnixTimestampToStringPipe } from './unix-timestamp-to-string.pipe';

describe('UnixTimestampToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new UnixTimestampToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
