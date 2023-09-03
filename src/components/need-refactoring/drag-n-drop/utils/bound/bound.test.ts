import {
  isLinesCrossing,
  isBoundsCrossing,
  getASupersetBRatio,
  IncorrectPointsError,
} from './bound';

describe('isLineCrossing', () => {
  it('A ⊃ B', () => {
    expect(isLinesCrossing(-10, 10, -5, 5)).toEqual(true);
    expect(isLinesCrossing(-10, 0, -5, 5)).toEqual(true);
    expect(isLinesCrossing(0, 20, 5, 10)).toEqual(true);
  });

  it('A ⊂ B', () => {
    expect(isLinesCrossing(-5, 5, -10, 10)).toEqual(true);
    expect(isLinesCrossing(-5, 5, -10, 0)).toEqual(true);
    expect(isLinesCrossing(5, 10, 0, 20)).toEqual(true);
  });

  it('A = B', () => {
    expect(isLinesCrossing(0, 5, 0, 5)).toEqual(true);
  });

  it('A ⊇ B Left', () => {
    expect(isLinesCrossing(0, 5, 0, 10)).toEqual(true);
    expect(isLinesCrossing(0, 5, 1, 10)).toEqual(true);
  });

  it('A ⊇ B Right', () => {
    expect(isLinesCrossing(0, 5, -5, 0)).toEqual(true);
    expect(isLinesCrossing(0, 5, -5, 1)).toEqual(true);
  });

  it('A ⊅ B & A ⊄ B', () => {
    expect(isLinesCrossing(0, 5, 6, 10)).toEqual(false);
    expect(isLinesCrossing(6, 10, 0, 5)).toEqual(false);
  });

  it('Incorrect points', () => {
    expect(() => isLinesCrossing(10, 0, 0, 10)).toThrow(IncorrectPointsError);
    expect(() => isLinesCrossing(0, 10, 10, 0)).toThrow(IncorrectPointsError);
  });
});


describe('isBoundsCrossing', () => {
  it('□1 ⊃ □2', () => {
    expect(isBoundsCrossing(
      { x: 0, y: 0, w: 30, h: 30 },
      { x: 10, y: 10, w: 10, h: 10 },
    )).toEqual(true);
  });

  it('□1 ⊂ □2', () => {
    expect(isBoundsCrossing(
      { x: 10, y: 10, w: 10, h: 10 },
      { x: 0, y: 0, w: 30, h: 30 },
    )).toEqual(true);
  });

  it('□1 = □2', () => {
    expect(isBoundsCrossing(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 0, y: 0, w: 10, h: 10 },
    )).toEqual(true);
  });

  it('□1 ⊅ □2 & □1 ⊄ □2', () => {
    expect(isBoundsCrossing(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 20, y: 0, w: 10, h: 10 },
    )).toEqual(false);

    expect(isBoundsCrossing(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 5, y: 20, w: 10, h: 10 },
    )).toEqual(false);
  });
});


describe('getASupersetBRatio', () => {
  it('1', () => {
    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 0, y: 0, w: 10, h: 10 },
    )).toEqual(1);
  });

  it('0.5', () => {
    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 5, y: 0, w: 10, h: 10 },
    )).toEqual(0.5);

    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 20, h: 10 },
      { x: 10, y: 0, w: 10, h: 10 },
    )).toEqual(0.5);
  });

  it('0.25', () => {
    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 5, y: 5, w: 10, h: 10 },
    )).toEqual(0.25);

    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 20, h: 10 },
      { x: 10, y: 5, w: 10, h: 10 },
    )).toEqual(0.25);

    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 20, h: 10 },
      { x: 5, y: 5, w: 10, h: 10 },
    )).toEqual(0.25);
  });

  it('0', () => {
    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 10, h: 10 },
      { x: 20, y: 0, w: 10, h: 10 },
    )).toEqual(0);
  });

  it('Zero bound', () => {
    expect(getASupersetBRatio(
      { x: 0, y: 0, w: 0, h: 0 },
      { x: 0, y: 0, w: 10, h: 10 },
    )).toEqual(0);
  });
});
