import { IMock } from '../../../../../tests/types';

import { convertColumnTreeToArraysMock } from './mocks/convertColumnTreeToArrays.mock';

const mocks: IMock[] = [
  convertColumnTreeToArraysMock,
];

mocks.forEach((mock) => {
  describe(mock.name, () => {
    mock.tests.forEach((test) => {
      it(test.name, () => {
        expect(mock.func(...test.params)).toEqual(test.result);
      });
    });
  });
});
