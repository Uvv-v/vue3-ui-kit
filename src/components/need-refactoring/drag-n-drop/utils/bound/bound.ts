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

export const isLinesCrossing = (leftA: number, rightA: number, leftB: number, rightB: number): boolean => {
  if (leftA > rightA || leftB > rightB) throw new IncorrectPointsError();

  if ((leftB >= leftA && leftB <= rightA) || (rightB >= leftA && rightB <= rightA)) return true;
  return (leftA >= leftB && leftA <= rightB) || (rightA >= leftB && rightA <= rightB);
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
  if (boundA.w * boundA.h === 0) return 0;

  const crossingX = Math.min(boundA.x + boundA.w, boundB.x + boundB.w) - Math.max(boundA.x, boundB.x);
  const crossingY = Math.min(boundA.y + boundA.h, boundB.y + boundB.h) - Math.max(boundA.y, boundB.y);

  return (crossingX * crossingY) / (boundA.w * boundA.h);
};
