import { Chant } from './chant';

export type Sentence = {
  id: number;
  chantId: Chant['id'];
  text: string;
  textJapanese: string;
  page: number;
};

const addChantId = (
  chantId: Sentence['chantId'],
  sentences: Omit<Sentence, 'id' | 'chantId'>[],
): Omit<Sentence, 'id'>[] => sentences.map((sentence) => ({ ...sentence, chantId }));

export const sentences: Sentence[] = [
  ...[
    {
      text: 'Isa Yer she riena xeoi pel',
      textJapanese: '夜色の鈴を鳴らせましょう',
      page: 12,
    },
    {
      text: 'miqvy elmei nehhe virgia-c-fifsia',
      textJapanese: '私が愛（のぞ）むのはあなただけ',
      page: 12,
    },
    {
      text: 'zette ovan Yer be zarabearc solituqs',
      textJapanese: 'だからこそ　独りで静かに泣くのでしょうか',
      page: 14,
    },
    {
      text: 'Lears neckt ele ravience Shadir',
      textJapanese: '何処にもいない　至小夜（ちいさなあなた）',
      page: 14,
    },
    {
      text: 'Isa jes qusi xin fears toga peg ilmei shel',
      textJapanese: 'この夜（ばしょ）に　貴女（わたし）は孤独（ひとり）',
      page: 14,
    },
    {
      text: 'jes kless qusi medolia lef cirkus, medolia lef zarabel',
      textJapanese: 'その旋律は　心の奏（ゆらぎ）　涙の音色（おどり）',
      page: 14,
    },
    {
      text: 'Hir sinka I, bekwist WeR muas ririsia harmone lef twispel',
      textJapanese: 'それは世界を濡らす　凍（いと）しい夜の一滴（うた）なのだから',
      page: 14,
    },
    {
      text: 'Yer she saria stig lef xeoi peg pel',
      textJapanese: '夜色の紡吟（ちかい）をあなたのもとへ',
      page: 14,
    },
    {
      text: 'U da lostasia dremren Isa da boema foton doremren',
      textJapanese: '忘れられた子よ　さあ　生まれ落ちた子よ',
      page: 14,
    },
    {
      text: 'O univa sm thes hypne',
      textJapanese: '微睡（ゆりかご）の中へお帰りなさい',
      page: 14,
    },
    {
      text: 'ende Years besti',
      textJapanese: 'そして　わたしは',
      page: 14,
    },
  ].map((sentence) => ({ ...sentence, chantId: 1 })),
].map((sentence, index) => ({ ...sentence, id: index + 1 }));
