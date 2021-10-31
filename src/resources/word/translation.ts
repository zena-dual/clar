import { ChantType } from '../chant';
import { Pos } from './pos';
import { Surface } from './surface';

export interface Translation {
  pos: Pos;
  text: string;
  supplementation: string | null;
  chantType: ChantType;
}

export const translations: { [surface in Surface]: Translation[] } = {
  '-Oz-': [
    {
      pos: 'other',
      text: '動詞の接続',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  '-Ye-': [
    {
      pos: 'other',
      text: '動詞の接続',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  '-c-': [
    {
      pos: 'other',
      text: '動詞の接続',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  '-l-': [
    {
      pos: 'other',
      text: '形容詞の接続',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  '-s-': [
    {
      pos: 'other',
      text: '形容詞の接続',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  '/en-': [
    {
      pos: 'auxiliaryVerb',
      text: '過去の助動詞',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  '/x-': [
    {
      pos: 'auxiliaryVerb',
      text: '受動の助動詞',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  '=C': [
    {
      pos: 'auxiliaryVerb',
      text: '命令の助動詞（汎用的）',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  '=E': [
    {
      pos: 'other',
      text: '呼びかけ？',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  '=I': [
    {
      pos: 'auxiliaryVerb',
      text: '命令の助動詞（重要な名詠）',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  'Yu/': [
    {
      pos: 'auxiliaryVerb',
      text: '命令の助動詞（呼びかけの意を含む）',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  'r-': [
    {
      pos: 'auxiliaryVerb',
      text: '受動の助動詞',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'auxiliaryVerb',
      text: '受動の助動詞',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Aha: [
    {
      pos: 'pronoun',
      text: 'それら(三人称複数主格、人物を指す)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ahw: [
    {
      pos: 'pronoun',
      text: 'そこ(三人称複数主格、人物以外を指す)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  'Ao/': [
    {
      pos: 'other',
      text: 'ああ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  De: [
    {
      pos: 'auxiliaryVerb',
      text: '直後の動詞を命令形にする',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Dea: [
    {
      pos: 'other',
      text: 'ほら',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Deris: [
    {
      pos: 'conjunction',
      text: '〜だから(英語のbecause)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  E: [
    {
      pos: 'pronoun',
      text: 'あなた(二人称主格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ec: [
    {
      pos: 'pronoun',
      text: 'あなたの(二人称所有格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Eden: [
    {
      pos: 'noun',
      text: '楽園',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  Eec: [
    {
      pos: 'pronoun',
      text: 'あなたたちの(二人称複数所有格)',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  Eeo: [
    {
      pos: 'pronoun',
      text: 'あなたたちを(二人称複数目的格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Egunis: [
    {
      pos: 'noun',
      text: '隙間',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Eo: [
    {
      pos: 'pronoun',
      text: 'あなたを(二人称単数目的格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Es: [
    {
      pos: 'pronoun',
      text: 'あなたたちを(二人称複数目的格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ez: [
    {
      pos: 'pronoun',
      text: 'あなた(二人称主格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ful: [
    {
      pos: 'adjective',
      text: '赤の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  I: [
    {
      pos: 'noun',
      text: '世界',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  Ies: [
    {
      pos: 'noun',
      text: '色',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '色',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  Iesis: [
    {
      pos: 'adjective',
      text: '色の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Is: [
    {
      pos: 'verb',
      text: '巡る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Isdelis: [
    {
      pos: 'noun',
      text: '想起',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  Isis: [
    {
      pos: 'adjective',
      text: '続いている',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ivis: [
    {
      pos: 'adjective',
      text: '黄昏の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  KyelS: [
    {
      pos: 'noun',
      text: '福音',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Kyele: [
    {
      pos: 'noun',
      text: '実',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  Laspha: [
    {
      pos: 'noun',
      text: '主',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  'Maria-If': [
    {
      pos: 'other',
      text: 'さようなら',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  Miqis: [
    {
      pos: 'adjective',
      text: '現代の(Miqis I現世)',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  Miqs: [
    {
      pos: 'adverb',
      text: '今は',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Nel: [
    {
      pos: 'pronoun',
      text: '三人称主格',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  O: [
    {
      pos: 'auxiliaryVerb',
      text: '〜しなさい(命令)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  'Oe/': [
    {
      pos: 'auxiliaryVerb',
      text: '命令の助動詞',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  'Oo/': [
    {
      pos: 'other',
      text: 'ああ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Phio: [
    {
      pos: 'noun',
      text: '(セラの)塔',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Rio: [
    {
      pos: 'pronoun',
      text: '私たちを(一人称目的格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Se: [
    {
      pos: 'conjunction',
      text: 'だから(英語のso)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Sec: [
    {
      pos: 'pronoun',
      text: '私の(一人称所有格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Selahphenosias: [
    {
      pos: 'noun',
      text: 'セラフェノ真言',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Sera: [
    {
      pos: 'conjunction',
      text: 'だから(英語のso)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ses: [
    {
      pos: 'pronoun',
      text: '私に(一人称目的格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Sew: [
    {
      pos: 'pronoun',
      text: '私(一人称主格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Te: [
    {
      pos: 'auxiliaryVerb',
      text: '直後の動詞を命令形にする(虹色名詠のみ)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Tihs: [
    {
      pos: 'adjective',
      text: '第七の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Uhw: [
    {
      pos: 'pronoun',
      text: 'それ(三人称主格)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'pronoun',
      text: 'それ(三人称単数主格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Uhz: [
    {
      pos: 'pronoun',
      text: 'それ(三人称主格)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'pronoun',
      text: 'それ(三人称単数主格)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Ulma: [
    {
      pos: 'other',
      text: 'さあ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  X: [
    {
      pos: 'pronoun',
      text: '一人称主格',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  Xe: [
    {
      pos: 'pronoun',
      text: '一人称所有格',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  Ye: [
    {
      pos: 'other',
      text: '名詞を接続する',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Zalah: [
    {
      pos: 'noun',
      text: '福音',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  Zec: [
    {
      pos: 'pronoun',
      text: '一人称所有格(重要な名詠)',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  Zerah: [
    {
      pos: 'noun',
      text: '母・福音',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  Zewl: [
    {
      pos: 'pronoun',
      text: '一人称主格(重要な名詠)',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  als: [
    {
      pos: 'verb',
      text: '(als vel V) Vをやめる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  arma: [
    {
      pos: 'noun',
      text: '牙',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '牙を剥く',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '牙',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ars: [
    {
      pos: 'noun',
      text: '王',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  arsa: [
    {
      pos: 'noun',
      text: '王',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  arsei: [
    {
      pos: 'adjective',
      text: '王の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  arsia: [
    {
      pos: 'verb',
      text: '傷つける',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  arsic: [
    {
      pos: 'noun',
      text: '傷痕',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  arsicis: [
    {
      pos: 'adjective',
      text: '傷ついた',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  ascation: [
    {
      pos: 'noun',
      text: '慈愛',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  balie: [
    {
      pos: 'adjective',
      text: '沢山の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  be: [
    {
      pos: 'auxiliaryVerb',
      text: '強意の助動詞',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  bediws: [
    {
      pos: 'noun',
      text: '悲しみ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  bekwist: [
    {
      pos: 'conjunction',
      text: 'なので(順接、英語のbecause)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  belit: [
    {
      pos: 'conjunction',
      text: 'たとえ〜しても',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  besti: [
    {
      pos: 'verb',
      text: '〜である(一人称・二人称、英語のbe動詞)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  bie: [
    {
      pos: 'article',
      text: 'その(英語のthe)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  bis: [
    {
      pos: 'adjective',
      text: 'この',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  bles: [
    {
      pos: 'adjective',
      text: '勇気に満ちた',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  bloo: [
    {
      pos: 'verb',
      text: '咲く',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  bloz: [
    {
      pos: 'verb',
      text: '降る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  bluci: [
    {
      pos: 'adjective',
      text: '暗い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  bran: [
    {
      pos: 'adjective',
      text: '雄々しい',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  branous: [
    {
      pos: 'noun',
      text: '雄々しさ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  branousi: [
    {
      pos: 'adjective',
      text: '雄々しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  cain: [
    {
      pos: 'verb',
      text: '囚える',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  carla: [
    {
      pos: 'noun',
      text: '血',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  celena: [
    {
      pos: 'verb',
      text: '受け入れる',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  cera: [
    {
      pos: 'verb',
      text: '祝福する',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  chein: [
    {
      pos: 'adjective',
      text: '左の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  cia: [
    {
      pos: 'auxiliaryVerb',
      text: '強意の助動詞',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  ciel: [
    {
      pos: 'adjective',
      text: '彼方',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '彼方',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  cielis: [
    {
      pos: 'adjective',
      text: '彼方の',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'adjective',
      text: '彼方の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  cirkus: [
    {
      pos: 'noun',
      text: '心',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  clar: [
    {
      pos: 'noun',
      text: '歌・約束',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '歌う',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '約束・鍵',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  cley: [
    {
      pos: 'noun',
      text: '砂',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  clue: [
    {
      pos: 'noun',
      text: '緋',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adjective',
      text: '緋色の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  co: [
    {
      pos: 'verb',
      text: '息吹く',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '芽生え',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  coda: [
    {
      pos: 'adjective',
      text: '健やかな',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  colin: [
    {
      pos: 'adjective',
      text: '安らかな',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  cooke: [
    {
      pos: 'verb',
      text: '望む',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  copha: [
    {
      pos: 'verb',
      text: '沁みわたる',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  cori: [
    {
      pos: 'adjective',
      text: '始まりの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  corne: [
    {
      pos: 'noun',
      text: '火',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  cornis: [
    {
      pos: 'adjective',
      text: '始まりの',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  cross: [
    {
      pos: 'verb',
      text: '帰る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  'd-': [
    {
      pos: 'auxiliaryVerb',
      text: '〜し続ける',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  da: [
    {
      pos: 'auxiliaryVerb',
      text: '〜される(受動態)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dackt: [
    {
      pos: 'verb',
      text: '潰える',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  deige: [
    {
      pos: 'noun',
      text: '城',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  delis: [
    {
      pos: 'other',
      text: 'きっと',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '忘れる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  denca: [
    {
      pos: 'verb',
      text: '踊る・舞う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dess: [
    {
      pos: 'verb',
      text: '隠れる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  dewl: [
    {
      pos: 'auxiliaryVerb',
      text: '〜する必要がある(英語のhave to)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  di: [
    {
      pos: 'other',
      text: '名詞を接続する',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  dia: [
    {
      pos: 'verb',
      text: '歩く',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '歩く',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dies: [
    {
      pos: 'verb',
      text: '(意思を)曲げる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  dilna: [
    {
      pos: 'verb',
      text: '広がる',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dim: [
    {
      pos: 'verb',
      text: '笑う',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  dime: [
    {
      pos: 'verb',
      text: '笑う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dimi: [
    {
      pos: 'adjective',
      text: '黄昏の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dis: [
    {
      pos: 'preposition',
      text: '〜へ(smもquoも使えない場合)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  doremren: [
    {
      pos: 'noun',
      text: '子',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  dowa: [
    {
      pos: 'verb',
      text: '降りる',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ect: [
    {
      pos: 'verb',
      text: '踊る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ecta: [
    {
      pos: 'verb',
      text: '舞う',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  edel: [
    {
      pos: 'verb',
      text: '沁みる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  effectis: [
    {
      pos: 'noun',
      text: '剣',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  efflect: [
    {
      pos: 'noun',
      text: '盾',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  egic: [
    {
      pos: 'noun',
      text: '淵',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'noun',
      text: '底',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ei: [
    {
      pos: 'adverb',
      text: 'まだ',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  eis: [
    {
      pos: 'adjective',
      text: 'あの',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  elah: [
    {
      pos: 'noun',
      text: '〜する者',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  elchel: [
    {
      pos: 'noun',
      text: 'まぶた',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  ele: [
    {
      pos: 'verb',
      text: '存在する',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '存在する',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  elen: [
    {
      pos: 'noun',
      text: '心',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  elenis: [
    {
      pos: 'adjective',
      text: '心の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  elfa: [
    {
      pos: 'adjective',
      text: '懐かしい',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  elma: [
    {
      pos: 'noun',
      text: '全てのもの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  elmei: [
    {
      pos: 'adjective',
      text: '全ての',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '全ての',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  elvine: [
    {
      pos: 'adjective',
      text: '素敵な',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ema: [
    {
      pos: 'auxiliaryVerb',
      text: 'できる(英語のcan)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: 'できる',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: '生きる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  emne: [
    {
      pos: 'verb',
      text: '委ねる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ende: [
    {
      pos: 'conjunction',
      text: '〜と(英語のand)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  endehec: [
    {
      pos: 'adjective',
      text: '終わらない',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  eposion: [
    {
      pos: 'noun',
      text: '時間',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  et: [
    {
      pos: 'auxiliaryVerb',
      text: '直後の動詞を過去形にする',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  evhe: [
    {
      pos: 'noun',
      text: '旋律',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  evhes: [
    {
      pos: 'adjective',
      text: '奏でる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  evo: [
    {
      pos: 'verb',
      text: '〜になる(英語のbecome)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  eyen: [
    {
      pos: 'verb',
      text: '還る',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'preposition',
      text: '〜のような(英語のlike)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  eza: [
    {
      pos: 'noun',
      text: '灰',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  eze: [
    {
      pos: 'adjective',
      text: '灰の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ezis: [
    {
      pos: 'noun',
      text: '埃',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  faite: [
    {
      pos: 'noun',
      text: '賛歌',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  fary: [
    {
      pos: 'adverb',
      text: 'とても',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  fel: [
    {
      pos: 'preposition',
      text: '〜から(英語のfrom)',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'preposition',
      text: '〜から・〜の上に(起点、英語のfrom/over)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  feo: [
    {
      pos: 'pronoun',
      text: '関係代名詞(節)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'pronoun',
      text: '誰か 例：deus Uhw leya quo feo (誰へと届く) ⇔ For whom does it reach?',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'pronoun',
      text: '関係代名詞(英語のwhich/who)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ferm: [
    {
      pos: 'noun',
      text: 'どこか',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  fert: [
    {
      pos: 'pronoun',
      text: '関係代名詞(句)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'pronoun',
      text: '関係代名詞(英語のwhich)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  fisa: [
    {
      pos: 'verb',
      text: '嘲笑う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  flan: [
    {
      pos: 'adjective',
      text: '冷たい',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  fluse: [
    {
      pos: 'noun',
      text: '儚さ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  fo: [
    {
      pos: 'preposition',
      text: '〜のために(英語のfor)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  frei: [
    {
      pos: 'adjective',
      text: '眩しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  fusen: [
    {
      pos: 'verb',
      text: '閉じる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  geen: [
    {
      pos: 'noun',
      text: '季節',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  getie: [
    {
      pos: 'adjective',
      text: '若い',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adjective',
      text: '弱い',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adjective',
      text: '小さな',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  gfend: [
    {
      pos: 'noun',
      text: '怖れ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  gillim: [
    {
      pos: 'verb',
      text: '結ぶ・一つにする',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  giri: [
    {
      pos: 'noun',
      text: '畏敬',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  giris: [
    {
      pos: 'noun',
      text: '誇り',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  girisi: [
    {
      pos: 'adjective',
      text: '誇り高い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  glia: [
    {
      pos: 'verb',
      text: '座る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  glim: [
    {
      pos: 'verb',
      text: '紡ぐ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  glio: [
    {
      pos: 'noun',
      text: '椅子',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  goen: [
    {
      pos: 'verb',
      text: '錆びつく',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  gridis: [
    {
      pos: 'adjective',
      text: '誇り高い',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  gulie: [
    {
      pos: 'adjective',
      text: '醜い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  harp: [
    {
      pos: 'verb',
      text: 'もたらす',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  haul: [
    {
      pos: 'verb',
      text: '灯す',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '灯火',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hear: [
    {
      pos: 'verb',
      text: '重ねる',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hec: [
    {
      pos: 'verb',
      text: '否定する',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  hem: [
    {
      pos: 'verb',
      text: '触れる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  hepne: [
    {
      pos: 'noun',
      text: 'ゆりかご',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hid: [
    {
      pos: 'noun',
      text: '上',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hio: [
    {
      pos: 'pronoun',
      text: 'それを(三人称目的格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hir: [
    {
      pos: 'pronoun',
      text: 'それ(三人称主格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hision: [
    {
      pos: 'noun',
      text: '喪失',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  hiz: [
    {
      pos: 'preposition',
      text: 'その(英語のthe)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'article',
      text: 'その(英語のthe)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  huda: [
    {
      pos: 'noun',
      text: '泉',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  hutia: [
    {
      pos: 'verb',
      text: '運ぶ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hyne: [
    {
      pos: 'noun',
      text: '調べ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  hypn: [
    {
      pos: 'verb',
      text: '眠る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  hypne: [
    {
      pos: 'noun',
      text: 'ゆりかご',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  hyte: [
    {
      pos: 'noun',
      text: '敗者',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  iden: [
    {
      pos: 'verb',
      text: '沈む',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '記憶の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ife: [
    {
      pos: 'conjunction',
      text: 'もし〜なら(仮定、英語のif)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ifex: [
    {
      pos: 'conjunction',
      text: 'たとえ〜しようとも(譲歩仮定)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  iflis: [
    {
      pos: 'noun',
      text: '優しさ',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '実がなる',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '希望',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ilis: [],
  ilmei: [
    {
      pos: 'adjective',
      text: '大いなる・大きな',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '大いなる・大きな',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ind: [
    {
      pos: 'noun',
      text: '背中',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  io: [
    {
      pos: 'noun',
      text: '吐息',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '吐息',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  isa: [
    {
      pos: 'other',
      text: 'さあ(呼びかけ)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  isel: [
    {
      pos: 'verb',
      text: '書き記す',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  jes: [
    {
      pos: 'article',
      text: 'その(英語のthe)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  kamis: [
    {
      pos: 'adjective',
      text: '記憶の',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adjective',
      text: '記憶の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  kamyu: [
    {
      pos: 'noun',
      text: '記憶',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '記憶',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  kaon: [
    {
      pos: 'noun',
      text: '牢獄',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '牢宮',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  karla: [
    {
      pos: 'noun',
      text: '血',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  keen: [
    {
      pos: 'adjective',
      text: '鋭い',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  kei: [
    {
      pos: 'noun',
      text: '雫',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '雫の',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '雫',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  kele: [
    {
      pos: 'adjective',
      text: '鋭い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  keof: [
    {
      pos: 'noun',
      text: '優しさ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  keofi: [
    {
      pos: 'adjective',
      text: '優しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  kills: [
    {
      pos: 'verb',
      text: '凍る',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '氷の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  kis: [
    {
      pos: 'verb',
      text: 'be動詞(三人称)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: 'be動詞(三人称)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  kissin: [
    {
      pos: 'adverb',
      text: '時に',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  kless: [
    {
      pos: 'noun',
      text: '旋律',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  kyel: [
    {
      pos: 'preposition',
      text: '〜へ(音語のsm？)',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'preposition',
      text: '〜へ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lah: [
    {
      pos: 'pronoun',
      text: 'もう一つの',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  laphia: [
    {
      pos: 'noun',
      text: '丘',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lash: [
    {
      pos: 'noun',
      text: '飛沫',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  laspha: [
    {
      pos: 'noun',
      text: '主',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lass: [
    {
      pos: 'verb',
      text: '過ぎる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lastis: [
    {
      pos: 'noun',
      text: '敗者',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lears: [
    {
      pos: 'pronoun',
      text: 'あなた(二人称主格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ledg: [
    {
      pos: 'noun',
      text: '刃',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lef: [
    {
      pos: 'preposition',
      text: '〜の(形容詞も使用可能、英語のof)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  left: [
    {
      pos: 'noun',
      text: '一瞬',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  leide: [
    {
      pos: 'noun',
      text: '花',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '花',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lemenet: [
    {
      pos: 'noun',
      text: '欠片',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lement: [
    {
      pos: 'noun',
      text: '欠片',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  leya: [
    {
      pos: 'verb',
      text: '届く',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lihit: [
    {
      pos: 'verb',
      text: '望む',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '望み',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lin: [
    {
      pos: 'preposition',
      text: '〜で(英語のat)',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  linsy: [
    {
      pos: 'adverb',
      text: 'そっと',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lipps: [
    {
      pos: 'noun',
      text: '鑓',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lish: [
    {
      pos: 'noun',
      text: '奇跡',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lishe: [
    {
      pos: 'noun',
      text: '愛',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '愛しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lisy: [
    {
      pos: 'adverb',
      text: '愛しく',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  loar: [
    {
      pos: 'noun',
      text: '風',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lom: [
    {
      pos: 'pronoun',
      text: 'あなたの(二人称所有格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  loo: [
    {
      pos: 'pronoun',
      text: 'あなたを(二人称目的格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lor: [
    {
      pos: 'pronoun',
      text: 'あなた(二人称主格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lostasia: [
    {
      pos: 'verb',
      text: '忘れる',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lotas: [
    {
      pos: 'adjective',
      text: '切ない',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lovi: [
    {
      pos: 'noun',
      text: '美しさ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lovier: [
    {
      pos: 'adjective',
      text: '美しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  lu: [
    {
      pos: 'verb',
      text: '結ぶ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lube: [
    {
      pos: 'noun',
      text: '声',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  lue: [
    {
      pos: 'noun',
      text: '音',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  madel: [
    {
      pos: 'verb',
      text: '断つ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  maria: [
    {
      pos: 'verb',
      text: '微笑む',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  medolia: [
    {
      pos: 'noun',
      text: '音色',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  meh: [
    {
      pos: 'adjective',
      text: '一つの',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '一つの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  mehnes: [
    {
      pos: 'other',
      text: 'いま一度',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  meki: [
    {
      pos: 'verb',
      text: '抱き寄せる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  meli: [
    {
      pos: 'noun',
      text: '抱擁',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'noun',
      text: '抱擁',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  melras: [
    {
      pos: 'adjective',
      text: '連なる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  ment: [
    {
      pos: 'noun',
      text: '欠片',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  mentis: [
    {
      pos: 'adjective',
      text: '一欠片の',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  metis: [
    {
      pos: 'verb',
      text: '知らせる',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '伝える',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '教える',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  mici: [
    {
      pos: 'adjective',
      text: '永劫の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  miel: [
    {
      pos: 'verb',
      text: '満たす',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: '注ぐ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  mihas: [
    {
      pos: 'noun',
      text: '絆',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  mihhya: [
    {
      pos: 'noun',
      text: '果て',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  mille: [
    {
      pos: 'verb',
      text: '生まれる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  milves: [
    {
      pos: 'adjective',
      text: '鏡の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  mios: [
    {
      pos: 'adjective',
      text: 'まどろむ',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  miqis: [
    {
      pos: 'adjective',
      text: '今の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  miqvy: [
    {
      pos: 'noun',
      text: '今',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  missin: [
    {
      pos: 'adverb',
      text: '彼方を',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adverb',
      text: '遥かに',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  missis: [
    {
      pos: 'adjective',
      text: '果てなき',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  mixe: [
    {
      pos: 'verb',
      text: '嫌う',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  mofie: [
    {
      pos: 'adjective',
      text: '悲劇の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  mofy: [
    {
      pos: 'noun',
      text: '惨劇',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  mutis: [
    {
      pos: 'adjective',
      text: 'まばゆい',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  muzel: [
    {
      pos: 'adjective',
      text: '愛しい',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'adjective',
      text: '眩しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  myizis: [
    {
      pos: 'adjective',
      text: '理想の',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'adjective',
      text: '理想の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nalis: [
    {
      pos: 'pronoun',
      text: '関係代名詞(英語のwhich)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nazal: [
    {
      pos: 'noun',
      text: '味',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nazalie: [
    {
      pos: 'adjective',
      text: '罪色の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nazalis: [
    {
      pos: 'adjective',
      text: '罪色の',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  nazarie: [
    {
      pos: 'adjective',
      text: '罪の',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '愚かさ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  nazyu: [
    {
      pos: 'verb',
      text: '枯れる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nec: [
    {
      pos: 'adverb',
      text: '否定の副詞',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  'nec-Sera': [
    {
      pos: 'conjunction',
      text: 'ならばまた',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  neckt: [
    {
      pos: 'conjunction',
      text: '否定(英語のnot)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  neen: [
    {
      pos: 'adjective',
      text: '緑色の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  nefis: [
    {
      pos: 'adjective',
      text: '新約の',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  nefit: [
    {
      pos: 'conjunction',
      text: 'たとえ〜しても',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nefla: [
    {
      pos: 'adjective',
      text: '新しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  nehhe: [
    {
      pos: 'noun',
      text: '名前',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  neight: [
    {
      pos: 'noun',
      text: '夜明け',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  neighti: [
    {
      pos: 'adjective',
      text: '夜明けの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  neights: [
    {
      pos: 'adjective',
      text: '夜明けの',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nelar: [
    {
      pos: 'adverb',
      text: 'ここに(英語のhere)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adverb',
      text: 'ここに(英語のhere)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nelit: [
    {
      pos: 'verb',
      text: '拭う',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  nemne: [
    {
      pos: 'verb',
      text: '〜に〜を与える',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nen: [
    {
      pos: 'noun',
      text: '砂',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  neoles: [
    {
      pos: 'adjective',
      text: '夢見る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nepies: [
    {
      pos: 'adjective',
      text: '安らぎの',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'adjective',
      text: '憩いの',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nes: [
    {
      pos: 'verb',
      text: 'be動詞(二人称)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: 'be動詞(二人称)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nett: [
    {
      pos: 'noun',
      text: '詠',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nevaliss: [
    {
      pos: 'conjunction',
      text: '〜だけど(英語のbut)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nexe: [
    {
      pos: 'verb',
      text: '嫌う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  noa: [
    {
      pos: 'preposition',
      text: '〜へ(音語のquo？)',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  noe: [
    {
      pos: 'noun',
      text: '昔',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: 'かつて',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  noi: [
    {
      pos: 'preposition',
      text: '〜の中で(英語のin)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  nuel: [
    {
      pos: 'noun',
      text: '中・内',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ole: [
    {
      pos: 'noun',
      text: '夢',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '降りる',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '彼方',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '夢',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  oles: [
    {
      pos: 'verb',
      text: '夢見る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  olte: [
    {
      pos: 'noun',
      text: '真極',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '頂点',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  omia: [
    {
      pos: 'noun',
      text: '扉',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  omnia: [
    {
      pos: 'verb',
      text: '変える',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  omnis: [
    {
      pos: 'verb',
      text: '変わる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  omunis: [
    {
      pos: 'noun',
      text: '万象',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ora: [
    {
      pos: 'verb',
      text: '讃える(oratorの省略形)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  orator: [
    {
      pos: 'verb',
      text: '讃える',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  orb: [
    {
      pos: 'noun',
      text: '誓い・約束',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  orza: [
    {
      pos: 'verb',
      text: '昇る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ovan: [
    {
      pos: 'preposition',
      text: '〜だけ(英語のonly)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  paf: [
    {
      pos: 'noun',
      text: '枝',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  paje: [
    {
      pos: 'adjective',
      text: '慎ましい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  paravel: [
    {
      pos: 'adjective',
      text: 'なくした',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  pedi: [
    {
      pos: 'adjective',
      text: '深い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  peg: [
    {
      pos: 'preposition',
      text: '〜と共に(英語のwith)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  pel: [
    {
      pos: 'noun',
      text: '鈴',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '鐘',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  pelma: [
    {
      pos: 'verb',
      text: '落ちる',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '〜に〜を与える',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '贈る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  pelnis: [
    {
      pos: 'adjective',
      text: '仮初めの',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  peq: [
    {
      pos: 'preposition',
      text: '〜と一緒に(英語のwith)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  peqqy: [
    {
      pos: 'adverb',
      text: '共に',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  peqxe: [
    {
      pos: 'preposition',
      text: '〜を伴わず(英語のwithout)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  personie: [
    {
      pos: 'adjective',
      text: '仮初めの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  pha: [
    {
      pos: 'pronoun',
      text: '関係代名詞(what)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  phanisis: [
    {
      pos: 'adjective',
      text: '自らの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  pheno: [
    {
      pos: 'noun',
      text: '名前・子供',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  phenoria: [
    {
      pos: 'noun',
      text: '子',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  phenoris: [
    {
      pos: 'adjective',
      text: '現世の',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  phes: [
    {
      pos: 'noun',
      text: '温もり',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  phi: [
    {
      pos: 'noun',
      text: '人',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  phia: [
    {
      pos: 'verb',
      text: '描く',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '世界・場所',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  phias: [
    {
      pos: 'noun',
      text: '必然',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  phio: [
    {
      pos: 'verb',
      text: '立ち上がる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  pile: [
    {
      pos: 'verb',
      text: '沈む',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'verb',
      text: '落ちる',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: '落とす',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  pridia: [
    {
      pos: 'verb',
      text: '翳す',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  qersonie: [
    {
      pos: 'adjective',
      text: '仮初めの',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  qhaon: [
    {
      pos: 'noun',
      text: '翼',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '羽ばたく',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '翼',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  quo: [
    {
      pos: 'preposition',
      text: '〜へ(対象は人やものや方角、動作の主体が動かない、英語のtoもしくはfor)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  qusi: [
    {
      pos: 'verb',
      text: '〜である(三人称のみ、英語のbe動詞)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ralphei: [
    {
      pos: 'adjective',
      text: '銀色の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  raqis: [
    {
      pos: 'adjective',
      text: '苔むした',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  raswel: [
    {
      pos: 'noun',
      text: '森',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ravience: [
    {
      pos: 'conjunction',
      text: '最上級表現の際に語の前に付属',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  rawa: [
    {
      pos: 'verb',
      text: '這う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  recrey: [
    {
      pos: 'verb',
      text: '映る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  redi: [
    {
      pos: 'adjective',
      text: '紅い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  reh: [
    {
      pos: 'adjective',
      text: '両方の(reh jasで「両手」)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  rei: [
    {
      pos: 'noun',
      text: '雨',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'noun',
      text: '雨',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  rein: [
    {
      pos: 'verb',
      text: '夢を見る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  reiply: [
    {
      pos: 'adverb',
      text: '再び',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  reive: [
    {
      pos: 'noun',
      text: '椅子',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ria: [
    {
      pos: 'preposition',
      text: '〜のために(英語のfor)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  rien: [
    {
      pos: 'verb',
      text: '鳴る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  riena: [
    {
      pos: 'verb',
      text: '鳴る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  rigveshi: [
    {
      pos: 'adjective',
      text: '魔性の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  riris: [
    {
      pos: 'noun',
      text: '約束',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ririsis: [
    {
      pos: 'adjective',
      text: '約束の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ris: [
    {
      pos: 'adjective',
      text: 'いたましい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  riss: [
    {
      pos: 'preposition',
      text: '〜と共に(英語のwith)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  roo: [
    {
      pos: 'adjective',
      text: '(心情的に)遥かな',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '遠く・遠い場所',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  roos: [
    {
      pos: 'adjective',
      text: '(物理的に)遠い',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ruy: [
    {
      pos: 'noun',
      text: '上',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sanc: [
    {
      pos: 'verb',
      text: '彩る',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: '彩る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  saria: [
    {
      pos: 'verb',
      text: '届ける',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sart: [
    {
      pos: 'noun',
      text: '帳',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  seim: [
    {
      pos: 'verb',
      text: '恋う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sephat: [
    {
      pos: 'noun',
      text: '軌跡',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  shadilis: [
    {
      pos: 'adjective',
      text: '黎い・暗い',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  shamis: [
    {
      pos: 'adjective',
      text: '煌めく',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  shan: [
    {
      pos: 'noun',
      text: '瞬き',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  shante: [
    {
      pos: 'noun',
      text: '煌めき',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  shantis: [
    {
      pos: 'adjective',
      text: '煌めく',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  shaz: [
    {
      pos: 'noun',
      text: '紡ぎ',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '紡ぎ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  she: [
    {
      pos: 'auxiliaryVerb',
      text: '〜でしょう・〜しましょう(意思・運命、英語のwill)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  shel: [
    {
      pos: 'adjective',
      text: '願いし',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  shela: [
    {
      pos: 'verb',
      text: '願う',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  shen: [
    {
      pos: 'noun',
      text: '願い',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sheon: [
    {
      pos: 'noun',
      text: '鐘',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '鐘',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sheza: [
    {
      pos: 'noun',
      text: '羽',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sic: [
    {
      pos: 'noun',
      text: '螺旋',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sink: [
    {
      pos: 'verb',
      text: '濡らす',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sinka: [
    {
      pos: 'verb',
      text: '濡らす',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  siole: [
    {
      pos: 'adjective',
      text: '真の',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '果てのない',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sion: [
    {
      pos: 'verb',
      text: '超える',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: '渇望する',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sis: [
    {
      pos: 'verb',
      text: 'be動詞(三人称)',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'verb',
      text: '辿る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  slin: [
    {
      pos: 'verb',
      text: '旅立つ',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '立つ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sm: [
    {
      pos: 'preposition',
      text: '〜へ(対象は場所、動作の主体が動く、英語のtoもしくはfor)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  soa: [
    {
      pos: 'verb',
      text: '響く',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  soana: [
    {
      pos: 'verb',
      text: '響く',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  solia: [
    {
      pos: 'verb',
      text: '渇かせる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  solit: [
    {
      pos: 'noun',
      text: '孤独',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  solitie: [
    {
      pos: 'adjective',
      text: '孤独な',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  solitis: [
    {
      pos: 'adjective',
      text: '孤独な',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  solituqs: [
    {
      pos: 'conjunction',
      text: '孤独に',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  sophia: [
    {
      pos: 'verb',
      text: '会う',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sophit: [
    {
      pos: 'noun',
      text: '想い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  soul: [
    {
      pos: 'adjective',
      text: '孤独な',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sraghch: [
    {
      pos: 'noun',
      text: '龍',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  steras: [
    {
      pos: 'adjective',
      text: '数多の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  sterei: [
    {
      pos: 'adjective',
      text: '数多の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  steris: [
    {
      pos: 'adjective',
      text: '砕けた',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  stery: [
    {
      pos: 'adverb',
      text: '千々に',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'adverb',
      text: '千々に',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  stig: [
    {
      pos: 'noun',
      text: '誓い',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  symphoeki: [
    {
      pos: 'adjective',
      text: '憫(いたわ)しい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  synda: [
    {
      pos: 'verb',
      text: '誓う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  tania: [
    {
      pos: 'verb',
      text: '語る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  teo: [
    {
      pos: 'verb',
      text: '開く',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'noun',
      text: '開放',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  term: [
    {
      pos: 'verb',
      text: '流れる',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  tes: [
    {
      pos: 'other',
      text: '〜と(英語のand)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  thelen: [
    {
      pos: 'noun',
      text: '茨',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  thes: [
    {
      pos: 'noun',
      text: '道',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  tiein: [
    {
      pos: 'adjective',
      text: '右の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  tih: [
    {
      pos: 'adjective',
      text: '多くの',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'adjective',
      text: '七色の',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  tinny: [
    {
      pos: 'noun',
      text: '時間',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '物語',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  tis: [
    {
      pos: 'noun',
      text: '理',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'noun',
      text: '道',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '道',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'verb',
      text: '着く',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  tissin: [
    {
      pos: 'verb',
      text: '続く',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'verb',
      text: '伝える',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  torn: [
    {
      pos: 'adjective',
      text: '冷たい',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  towle: [
    {
      pos: 'adjective',
      text: '儚い',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  twai: [
    {
      pos: 'verb',
      text: '誘う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  twispel: [
    {
      pos: 'noun',
      text: '黄昏',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  twispeli: [
    {
      pos: 'adjective',
      text: '黄昏の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  tyma: [
    {
      pos: 'verb',
      text: '叶う',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ubinis: [
    {
      pos: 'adjective',
      text: '織り成す',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  uc: [
    {
      pos: 'preposition',
      text: '〜によって(英語のby)',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'preposition',
      text: '〜によって(英語のby)',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'preposition',
      text: '〜によって(英語のby)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  univa: [
    {
      pos: 'verb',
      text: '帰る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  valen: [
    {
      pos: 'noun',
      text: '祈り',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  van: [
    {
      pos: 'preposition',
      text: '〜だけ(英語のonly)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  veci: [
    {
      pos: 'noun',
      text: '守る',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  vecisia: [
    {
      pos: 'noun',
      text: '真言の守護者',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  vefa: [
    {
      pos: 'verb',
      text: '覆う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  veiz: [
    {
      pos: 'noun',
      text: '爪',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '爪',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  vel: [
    {
      pos: 'auxiliaryVerb',
      text: '直後の動詞を不定詞 or 動名詞にする',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  veqlem: [
    {
      pos: 'noun',
      text: '蛇',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  vequs: [
    {
      pos: 'verb',
      text: '縛る',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '纏う',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'verb',
      text: '縛る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  'vi-': [
    {
      pos: 'preposition',
      text: '直後の名詞を不定形にする(vi-phia：「どこか」)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  via: [
    {
      pos: 'verb',
      text: '生まれる',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  vilis: [
    {
      pos: 'verb',
      text: '知る・知っている',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '知る',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  virse: [
    {
      pos: 'noun',
      text: '詩',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  virsel: [
    {
      pos: 'noun',
      text: '詩編',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  warbis: [
    {
      pos: 'adjective',
      text: 'ゆらめく',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  ward: [
    {
      pos: 'verb',
      text: '(精神的に)揺らぐ',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  was: [
    {
      pos: 'preposition',
      text: '〜へ(英語のto)',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'pronoun',
      text: '関係副詞(英語のwhere)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  wat: [
    {
      pos: 'noun',
      text: '足',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'preposition',
      text: '〜の上を(英語のon)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  wavir: [
    {
      pos: 'verb',
      text: '酔う・揺らす',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  weles: [
    {
      pos: 'noun',
      text: 'ゆりかご',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  wem: [
    {
      pos: 'pronoun',
      text: 'あなたの(二人称所有格、尊敬の意を含む)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  wer: [
    {
      pos: 'pronoun',
      text: 'あなた(二人称主格、尊敬の意を含む)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  wi: [
    {
      pos: 'noun',
      text: '前(noi wi lef = in front of)',
      supplementation: null,
      chantType: 'mateki',
    },
    {
      pos: 'other',
      text: 'さあ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  wire: [
    {
      pos: 'noun',
      text: '筐',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  wision: [
    {
      pos: 'noun',
      text: '輝石',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  wiz: [
    {
      pos: 'noun',
      text: '姿',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  wop: [
    {
      pos: 'noun',
      text: '力',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  writh: [
    {
      pos: 'noun',
      text: '宴',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  wue: [
    {
      pos: 'verb',
      text: '慕う',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  xaln: [
    {
      pos: 'noun',
      text: '扉',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  xearc: [
    {
      pos: 'adjective',
      text: '透き通った',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xearcs: [
    {
      pos: 'adjective',
      text: '透明な',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  xedelis: [
    {
      pos: 'verb',
      text: '思い出す',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'verb',
      text: '思い出す',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xedolis: [
    {
      pos: 'verb',
      text: '必要とする',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xeines: [
    {
      pos: 'adverb',
      text: '素足で',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xel: [
    {
      pos: 'noun',
      text: '星',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  xelie: [
    {
      pos: 'adjective',
      text: '星の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  xeo: [
    {
      pos: 'noun',
      text: '夜',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '夜',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  xeoi: [
    {
      pos: 'adjective',
      text: '夜の',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  xeph: [
    {
      pos: 'verb',
      text: '起きる',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xephias: [
    {
      pos: 'noun',
      text: '偶然',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xes: [
    {
      pos: 'preposition',
      text: '英語のof',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  xin: [
    {
      pos: 'noun',
      text: '時',
      supplementation: null,
      chantType: 'miko',
    },
    {
      pos: 'noun',
      text: '未来',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '未来・彼方',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  xins: [
    {
      pos: 'adjective',
      text: '時の',
      supplementation: null,
      chantType: 'miko',
    },
  ],
  xiss: [
    {
      pos: 'verb',
      text: '聞く',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xixic: [
    {
      pos: 'noun',
      text: 'ささやき',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  xshao: [
    {
      pos: 'conjunction',
      text: '倒置法を表す("A B" → "B xshao A" もしくは "xshao B A")',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  yahe: [
    {
      pos: 'noun',
      text: '言葉',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  years: [
    {
      pos: 'pronoun',
      text: '私(一人称主格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  yehle: [
    {
      pos: 'verb',
      text: '結ぶ',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '結ぶ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  yem: [
    {
      pos: 'pronoun',
      text: '私の(一人称所有格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  yer: [
    {
      pos: 'pronoun',
      text: '私(一人称主格)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  ymy: [
    {
      pos: 'noun',
      text: '口づけ',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '口づけ',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  yu: [
    {
      pos: 'preposition',
      text: '〜に(英語のfor)',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yubel: [
    {
      pos: 'verb',
      text: '許す',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yuks: [
    {
      pos: 'noun',
      text: '調べ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yulis: [
    {
      pos: 'verb',
      text: '忘れる・消える',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yum: [
    {
      pos: 'auxiliaryVerb',
      text: 'きっと〜する(英語のwill？)',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'verb',
      text: '沈む・消える',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yuma: [
    {
      pos: 'noun',
      text: '優しさ',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yumie: [
    {
      pos: 'adjective',
      text: '優しい',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yupa: [
    {
      pos: 'adverb',
      text: 'もはや',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  yuty: [
    {
      pos: 'adjective',
      text: '心踊るような',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  zarabearc: [
    {
      pos: 'verb',
      text: '泣く',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  zarabel: [
    {
      pos: 'noun',
      text: '涙',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '涙',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  zay: [
    {
      pos: 'preposition',
      text: '〜によって(英語のby)',
      supplementation: null,
      chantType: 'mateki',
    },
  ],
  zayxus: [
    {
      pos: 'adverb',
      text: '永劫に',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
  zea: [
    {
      pos: 'noun',
      text: '樹',
      supplementation: null,
      chantType: 'shingon',
    },
    {
      pos: 'noun',
      text: '木',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  zeon: [
    {
      pos: 'noun',
      text: '筐',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  zette: [
    {
      pos: 'conjunction',
      text: 'だから(順接、英語のso)',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  zorm: [
    {
      pos: 'verb',
      text: '拝む',
      supplementation: null,
      chantType: 'ongo',
    },
    {
      pos: 'noun',
      text: '尊厳・礼節',
      supplementation: null,
      chantType: 'ongo',
    },
  ],
  zsary: [
    {
      pos: 'verb',
      text: '泣く',
      supplementation: null,
      chantType: 'shingon',
    },
  ],
};
