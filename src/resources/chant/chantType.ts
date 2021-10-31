export const chantTypes = [
  // セラフェノ音語
  'ongo',
  // セラフェノ真言
  'shingon',
  // 巫女言語
  'miko',
  // 魔笛
  'mateki',
  // 召喚言語
  'summon',
  // その他
  'other',
];
export type ChantType = typeof chantTypes[number];

export const useChantTypeDisplayName = (): ((chantType: ChantType) => string) => {
  const displayName: { [key in ChantType]: string } = {
    ongo: 'セラフェノ音語',
    shingon: 'セラフェノ真言',
    miko: '巫女言語',
    mateki: '魔笛',
    summon: '召喚言語',
    other: 'その他',
  };

  return (chantType: ChantType) => displayName[chantType];
};
