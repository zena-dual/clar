export const posList = [
  // 助動詞
  'auxiliaryVerb',
  // 副詞
  'adverb',
  // 形容詞
  'adjective',
  // 冠詞
  'article',
  // 接続詞
  'conjunction',
  // 名詞
  'noun',
  // 前置詞
  'preposition',
  // 代名詞
  'pronoun',
  // 動詞
  'verb',
  // その他
  'other',
];

export type Pos = typeof posList[number];

export const usePosDisplayName = (): ((pos: Pos) => string) => {
  const displayName: { [key in Pos]: string } = {
    auxiliaryVerb: '助動詞',
    adverb: '副詞',
    adjective: '形容詞',
    article: '冠詞',
    conjunction: '接続詞',
    noun: '名詞',
    preposition: '前置詞',
    pronoun: '代名詞',
    verb: '動詞',
    other: 'その他',
  };

  return (pos: Pos) => displayName[pos];
};
