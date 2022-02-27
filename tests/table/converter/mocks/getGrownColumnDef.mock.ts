import { IMock } from '@tests/types';
import { getGrownColumnDef } from '@/components/table/utils/converter';

export const getGrownColumnDefMock: IMock<typeof getGrownColumnDef> = {
  name: 'getGrownColumnDefBranches',
  func: getGrownColumnDef,
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
      result: {
        label: 'Root',
        children: [
          {
            label: 'A',
            children: [{ label: 'A1', key: 'A1' }],
          },
          {
            children: [{ label: 'B', key: 'B' }],
          },
          {
            children: [{ label: 'C', key: 'C' }],
          },
        ],
      },
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
      result: {
        label: 'Root',
        children: [
          {
            label: 'A',
            children: [
              {
                children: [{ label: 'A1', key: 'A1' }],
              },
            ],
          },
          {
            children: [
              { children: [{ label: 'B', key: 'B' }] },
            ],
          },
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
      },
    },
  ],
};
