import SheetMusic from 'react-sheet-music';
import styled from 'styled-components';
 
const StyledSheetMusic = styled(SheetMusic)`
  max-width: 850px;
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`

const SheetComponent = ({ music }) => {
  return (
    <CenteredDiv>
      <StyledSheetMusic
        // Textual representation of music in ABC notation
        // The string below will show four crotchets in one bar
        notation={music.replace(/\n$/, "")}
      />
    </CenteredDiv>
  );
};

export default SheetComponent;