import { IMock } from '@tests/types';
import { getColumnDefBranches } from '@/components/table/utils/converter';

export const getColumnDefBranchesMock: IMock<typeof getColumnDefBranches> = {
  name: 'getColumnDefBranches',
  func: getColumnDefBranches,
  tests: [
    {
      name: '#1 (depth: 2)',
      params: [{
        label: 'Root',
        children: [
          { label: 'A', key: 'A' },
          { label: 'B', key: 'B' },
          { label: 'C', key: 'C' },
        ],
      }],
      result: [
        {
          label: 'Root',
          children: [
            { label: 'A', key: 'A' },
          ],
        },
        {
          label: 'Root',
          children: [
            { label: 'B', key: 'B' },
          ],
        },
        {
          label: 'Root',
          children: [
            { label: 'C', key: 'C' },
          ],
        },
      ],
    },
    {
      name: '#2 (depth: 3)',
      params: [{
        label: 'Root',
        children: [
          {
            label: 'A',
            children: [
              { label: 'A1', key: 'A1' },
              { label: 'A2', key: 'A2' },
            ],
          },
          { label: 'B', key: 'B' },
        ],
      }],
      result: [
        {
          label: 'Root',
          children: [
            {
              label: 'A',
              children: [
                { label: 'A1', key: 'A1' },
              ],
            },
          ],
        },
        {
          label: 'Root',
          children: [
            {
              label: 'A',
              children: [
                { label: 'A2', key: 'A2' },
              ],
            },
          ],
        },
        {
          label: 'Root',
          children: [
            { label: 'B', key: 'B' },
          ],
        },
      ],
    },
  ],
};
