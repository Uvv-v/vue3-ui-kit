import { IMock } from '../../../../../../tests/types';
import { convertColumnDefToArrays } from '../../../utils/converter';

export const convertColumnDefToArraysMock: IMock<typeof convertColumnDefToArrays> = {
  name: 'convertColumnDefToArrays',
  func: convertColumnDefToArrays,
  tests: [
    {
      name: '#1 (depth: 2)',
      params: [{
        label: 'Root',
        children: [
          {
            label: 'A',
            children: [{ label: 'A1', key: 'A1' }],
          },
          { label: 'B', key: 'B' },
          { label: 'C', key: 'C' },
        ],
      }],
      result: [
        [{ label: 'Root', colspan: 3 }],
        [{ label: 'A' }, { colspan: 2 }],
        [{ label: 'A1', key: 'A1' }, { label: 'B', key: 'B' }, { label: 'C', key: 'C' }],
      ],
    },
    {
      name: '#2 (depth: 3)',
      params: [{
        label: 'Root',
        children: [
          {
            label: 'A',
            children: [{ label: 'A1', key: 'A1' }],
          },
          { label: 'B', key: 'B' },
          {
            label: 'C',
            children: [
              {
                label: 'C1',
                children: [{ label: 'C11', key: 'C11' }],
              },
              {
                label: 'C2',
                children: [{ label: 'C21', key: 'C21' }],
              },
            ],
          },
        ],
      }],
      result: [
        [{ label: 'Root', colspan: 4 }],
        [{ label: 'A' }, {}, { label: 'C', colspan: 2}],
        [{ colspan: 2 }, { label: 'C1'}, { label: 'C2'}],
        [
          { label: 'A1', key: 'A1' },
          { label: 'B', key: 'B' },
          { label: 'C11', key: 'C11' },
          { label: 'C21', key: 'C21' },
        ],
      ],
    },
  ],
};
