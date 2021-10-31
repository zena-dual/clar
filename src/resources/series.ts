export const seriesList = [
  'tasogare',
  'eden',
  'ilis',
  'siren',
  'kimiSen',
  'encore',
  'nazeBoku',
  'worldEnemy',
  'homakou',
] as const;
export type Series = typeof seriesList[number];

export const useSeriesDisplayName = (): ((series: Series) => string) => {
  const displayName: { [key in Series]: string } = {
    tasogare: '黄昏色の詠使い',
    eden: '氷結鏡界のエデン',
    ilis: '不完全神性機関イリス',
    siren: 'S.I.R.E.N.',
    kimiSen: 'キミと僕の最後の戦場、あるいは世界が始まる聖戦',
    encore: '世界の終わりの世界録',
    nazeBoku: 'なぜ僕の世界を誰も覚えていないのか？',
    worldEnemy: 'ワールドエネミー',
    homakou: 'ほま高登山部ダイアリー',
  };

  return (series: Series) => displayName[series];
};
