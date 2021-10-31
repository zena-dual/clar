import { NextPage } from 'next';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { surfaces, translations, useChantTypeDisplayName, usePosDisplayName } from '../../resources';

interface Props {
  title: string;
}

const Words: NextPage<Props> = () => {
  const getChantTypeDisplayName = useChantTypeDisplayName();
  const getPosDisplayName = usePosDisplayName();

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">単語</TableCell>
              <TableCell align="center">意味</TableCell>
              <TableCell align="center">品詞</TableCell>
              <TableCell align="center">種別</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {surfaces.map((surface) =>
              translations[surface].map(({ chantType, pos, text }, index, translationBySurface) => (
                <TableRow key={`${chantType}${pos}${text}`}>
                  {index === 0 && (
                    <TableCell align="center" component="th" rowSpan={translationBySurface.length} scope="row">
                      {surface}
                    </TableCell>
                  )}

                  <TableCell align="left">{text}</TableCell>

                  <TableCell align="center">{getPosDisplayName(pos)}</TableCell>

                  <TableCell align="center">{getChantTypeDisplayName(chantType)}</TableCell>
                </TableRow>
              )),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

Words.getInitialProps = () => {
  return {
    title: '単語一覧',
  };
};

export default Words;
