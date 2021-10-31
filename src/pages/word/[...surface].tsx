import { NextPage } from 'next';
import { Word as WordType, surfaces, translations, useChantTypeDisplayName, usePosDisplayName } from '../../resources';
import NotFound from '../404';

interface Props {
  title?: string;
  word: WordType | null;
}

const Word: NextPage<Props> = ({ word }) => {
  if (!word) {
    return <NotFound />;
  }

  const getChantTypeDisplayName = useChantTypeDisplayName();
  const getPosDisplayName = usePosDisplayName();

  return (
    <>
      <div>{word.surface}</div>
      <div>
        {word.translations.map(({ pos, text, supplementation, chantType }) => {
          return <>{`${getPosDisplayName(pos)}, ${text}, ${supplementation}, ${getChantTypeDisplayName(chantType)}`}</>;
        })}
      </div>
    </>
  );
};

Word.getInitialProps = ({ query }) => {
  if (!query.surface || !Array.isArray(query.surface) || query.surface.length > 1) {
    return { word: null };
  }
  const surfaceString = query.surface[0];

  const surface = surfaces.find((s) => s === surfaceString);
  if (!surface) {
    return { word: null };
  }

  return {
    title: `単語詳細：${surface}`,
    word: {
      surface,
      translations: translations[surface],
    },
  };
};

export default Word;
