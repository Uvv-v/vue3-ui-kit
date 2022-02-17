import { TColumn, TColumnTreeDef } from '@/components/table/types';
import { convertTreeToArrays } from '@/components/table/utils/convertor';

const convertorMocks: { tree: TColumnTreeDef, arrays: TColumn[][] }[] = [
  {
    tree: {
      children: [
        {
          label: 'A',
          key: 'A',
          children: [],
        },
        {
          label: 'B',
          key: 'B',
          children: [],
        },
        {
          label: 'C',
          key: 'C',
          children: [],
        },
      ],
    },
    arrays: [],
  },
  {
    tree: {
      children: [
        {
          label: 'A',
          key: 'A',
          children: [],
        },
        {
          label: 'B',
          key: 'B',
          children: [],
        },
        {
          label: 'C',
          key: 'C',
          children: [],
        },
      ],
    },
    arrays: [],
  },
];

it('convertor', () => {
  convertorMocks.forEach((el) => {
    expect(convertTreeToArrays(el.tree)).toEqual(el.arrays);
  });
});
