export interface IBound {
  x: number,
  y: number,
  w: number,
  h: number,
}

export class IncorrectPointsError extends Error {
  constructor() {
    super('IncorrectPoints');
  }
}

export const isLinesCrossing = (aLeft: number, aRight: number, bLeft: number, bRight: number): boolean => {
  if (aLeft > aRight || bLeft > bRight) throw new IncorrectPointsError();

  if ((bLeft >= aLeft && bLeft <= aRight) || (bRight >= aLeft && bRight <= aRight)) return true;
  return (aLeft >= bLeft && aLeft <= bRight) || (aRight >= bLeft && aRight <= bRight);
};

export const isBoundsCrossing = (bound1: IBound, bound2: IBound): boolean => {
  return isLinesCrossing(
      bound1.x, bound1.x + bound1.w,
      bound2.x, bound2.x + bound2.w,
    ) && isLinesCrossing(
      bound1.y, bound1.y + bound1.h,
      bound2.y, bound2.y + bound2.h,
    );
};

export const getASupersetBRatio = (boundA: IBound, boundB: IBound): number => {
  if (!isBoundsCrossing(boundA, boundB)) return 0;

  const xCross = Math.min(boundA.x + boundA.w, boundB.x + boundB.w) - Math.max(boundA.x, boundB.x);
  const yCross = Math.min(boundA.y + boundA.h, boundB.y + boundB.h) - Math.max(boundA.y, boundB.y);

  return (xCross * yCross) / (boundA.w * boundB.h);
};
