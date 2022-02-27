import { IMock } from '@tests/types';
import { convertColumnDefToArrays } from '@/components/table/utils/converter';

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
        [{ label: 'Root' }, { label: 'Root' }, { label: 'Root' }],
        [{ label: 'A' }, {}, {}],
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
        [{ label: 'Root' }, { label: 'Root' }, { label: 'Root' }, { label: 'Root' }],
        [{ label: 'A' }, {}, { label: 'C'}, { label: 'C'}],
        [{}, {}, { label: 'C1'}, { label: 'C2'}],
        [
          { label: 'A1', key: 'A1' },
          { label: 'B', key: 'B' },
          { label: 'C11', key: 'C11' },
          { label: 'C21', key: 'C21' }],
      ],
    },
  ],
};
