import { IMock } from '../../../../../tests/types';

import { getColumnDefBranchesMock } from './mocks/getColumnDefBranches.mock';
import { getColumnDefDepthMock } from './mocks/getColumnDefDepth.mock';
import { getGrownColumnDefMock } from './mocks/getGrownColumnDef.mock';
import { convertColumnDefToArraysMock } from './mocks/convertColumnDefToArrays.mock';

const mocks: IMock[] = [
  getColumnDefBranchesMock,
  getColumnDefDepthMock,
  getGrownColumnDefMock,
  convertColumnDefToArraysMock,
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
