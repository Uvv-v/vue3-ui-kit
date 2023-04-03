import { IMock } from '../../../../../../tests/types';
import { convertColumnTreeToArrays } from '../../../utils/converter';

export const convertColumnTreeToArraysMock: IMock<typeof convertColumnTreeToArrays> = {
  name: 'convertColumnDefToArrays',
  func: convertColumnTreeToArrays,
  tests: [
    {
      name: '#1',
      params: [{ label: 'A', key: 'a' }],
      result: [[{ label: 'A', key: 'a', colspan: 1, rowspan: 1 }]],
    },
    {
      name: '#2',
      params: [[{ label: 'A', key: 'a' }, { label: 'B', key: 'b' }]],
      result: [[
        { label: 'A', key: 'a', colspan: 1, rowspan: 1 },
        { label: 'B', key: 'b', colspan: 1, rowspan: 1 },
      ]],
    },
    {
      name: '#3',
      params: [{
        label: 'A',
        key: 'a',
        children: [
          { label: 'B', key: 'b' },
          { label: 'C', key: 'c' },
        ],
      }],
      result: [
        [{ label: 'A', key: 'a', colspan: 2, rowspan: 1 }],
        [
          { label: 'B', key: 'b', colspan: 1, rowspan: 1 },
          { label: 'C', key: 'c', colspan: 1, rowspan: 1 },
        ],
      ],
    },
    {
      name: '#4',
      params: [[
        {
          label: 'A',
          key: 'a',
          children: [
            { label: 'B', key: 'b' },
            { label: 'C', key: 'c' },
          ],
        },
        {
          label: 'Z',
          key: 'z',
        },
      ]],
      result: [
        [
          { label: 'A', key: 'a', colspan: 2, rowspan: 1 },
          { label: 'Z', key: 'z', colspan: 1, rowspan: 2 },
        ],
        [
          { label: 'B', key: 'b', colspan: 1, rowspan: 1 },
          { label: 'C', key: 'c', colspan: 1, rowspan: 1 },
        ],
      ],
    },
    {
      name: '#5',
      params: [[
        {
          label: 'A',
          key: 'a',
          children: [
            { label: 'A1', key: 'a1' },
            { label: 'A2', key: 'a2' },
          ],
        },
        {
          label: 'B',
          key: 'b',
          children: [
            { label: 'B1', key: 'b1' },
            {
              label: 'B2',
              key: 'b2',
              children: [
                { label: 'B21', key: 'b21' },
                { label: 'B22', key: 'b22' },
              ],
            },
          ],
        },
      ]],
      result: [
        [
          { label: 'A', key: 'a', colspan: 2, rowspan: 1 },
          { label: 'B', key: 'b', colspan: 3, rowspan: 1 },
        ],
        [
          { label: 'A1', key: 'a1', colspan: 1, rowspan: 2 },
          { label: 'A2', key: 'a2', colspan: 1, rowspan: 2 },
          { label: 'B1', key: 'b1', colspan: 1, rowspan: 2 },
          { label: 'B2', key: 'b2', colspan: 2, rowspan: 1 },
        ],
        [
          { label: 'B21', key: 'b21', colspan: 1, rowspan: 1 },
          { label: 'B22', key: 'b22', colspan: 1, rowspan: 1 },
        ],
      ],
    },
  ],
};
