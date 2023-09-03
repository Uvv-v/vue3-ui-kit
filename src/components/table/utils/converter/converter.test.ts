import { convertColumnTreeToArrays } from './converter';

describe('convertColumnDefToArrays', () => {
  it('Simple single column', () => {
    const input = { label: 'A', key: 'a' };
    const output = [[{ label: 'A', key: 'a', colspan: 1, rowspan: 1 }]];
    expect(convertColumnTreeToArrays(input)).toEqual(output);
  });

  it('Simple double columns', () => {
    const input = [{ label: 'A', key: 'a' }, { label: 'B', key: 'b' }];
    const output = [[
      { label: 'A', key: 'a', colspan: 1, rowspan: 1 },
      { label: 'B', key: 'b', colspan: 1, rowspan: 1 },
    ]];
    expect(convertColumnTreeToArrays(input)).toEqual(output);
  });

  it('Nested columns', () => {
    const input = {
      label: 'A',
      key: 'a',
      children: [
        { label: 'B', key: 'b' },
        { label: 'C', key: 'c' },
      ],
    };
    const output = [
      [{ label: 'A', key: 'a', colspan: 2, rowspan: 1 }],
      [
        { label: 'B', key: 'b', colspan: 1, rowspan: 1 },
        { label: 'C', key: 'c', colspan: 1, rowspan: 1 },
      ],
    ];
    expect(convertColumnTreeToArrays(input)).toEqual(output);
  });

  it('Nested columns with not nested', () => {
    const input = [
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
    ];
    const output = [
      [
        { label: 'A', key: 'a', colspan: 2, rowspan: 1 },
        { label: 'Z', key: 'z', colspan: 1, rowspan: 2 },
      ],
      [
        { label: 'B', key: 'b', colspan: 1, rowspan: 1 },
        { label: 'C', key: 'c', colspan: 1, rowspan: 1 },
      ],
    ];
    expect(convertColumnTreeToArrays(input)).toEqual(output);
  });

  it('More nesting...', () => {
    const input = [
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
    ];
    const output = [
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
    ];
    expect(convertColumnTreeToArrays(input)).toEqual(output);
  });
});
