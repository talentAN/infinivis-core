import { parseBin } from './parseBin';

//field, as, extent, maxbins
test('parse bin', () => {
  expect(parseBin({}, {} as any)).toStrictEqual({});

  expect(
    parseBin(
      {},
      {
        type: 'bin',
        field: 'binCol',
        as: 'binColAs',
        extent: [0, 100],
        maxbins: 25,
      }
    )
  ).toStrictEqual({
    having: [`(binColAs >= 0 AND binColAs < 25) OR binColAs IS NULL)`],
    select: [
      `CASE WHEN binCol >= 100 THEN 24 else cast((cast(binCol AS float) - 0) * 0.25 AS int) end AS binColAs`,
    ],
    where: [`((binCol >= 0 AND binCol <= 100) OR (binCol IS NULL))`],
  });
});
