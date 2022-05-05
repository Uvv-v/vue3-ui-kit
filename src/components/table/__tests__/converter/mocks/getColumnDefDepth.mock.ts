import { IMock } from '../../../../../../tests/types';
import { getColumnDefDepth } from '../../../utils/converter';

export const getColumnDefDepthMock: IMock<typeof getColumnDefDepth> = {
  name: 'getColumnDefDepth',
  func: getColumnDefDepth,
  tests: [
    {
      name: '#1 (depth: 1)',
      params: [{
        label: 'Root',
        children: [
          { label: 'A', key: 'A' },
          { label: 'B', key: 'B' },
          { label: 'C', key: 'C' },
        ],
      }],
      result: 1,
    },
    {
      name: '#2 (depth: 2)',
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
      result: 2,
    },
    {
      name: '#3 (depth: 4)',
      params: [{
        label: 'L1',
        children: [{
          label: 'L2',
          children: [{
            label: 'L3',
            children: [{
              label: 'L4',
              children: [{ label: 'L5', key: 'L5' }],
            }],
          }],
        }],
      }],
      result: 4,
    },
    {
      name: '#4 (depth: 4)',
      params: [{
        label: 'Root',
        children: [
          {
            label: 'A',
            children: [
              { label: 'A1', key: 'A1' },
            ],
          },
          { label: 'B', key: 'B' },
          {
            label: 'C',
            children: [
              {
                label: 'C1',
                children: [
                  {
                    label: 'C2',
                    children: [
                      { label: 'C3', key: 'C3' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }],
      result: 4,
    },
  ],
};
