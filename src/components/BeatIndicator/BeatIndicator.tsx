import BeatIndicatorCell from './BeatIndicatorCell';
interface Props {
  tempo: string;
  timeSignature: string;
}

const cellStyle = {
  width: '40px',
  height: '50px',
  border: '2px solid white',
  display: 'inline-block',
  margin: '50px 10px',
  backgroundColor: '#afa',
  listStyle: 'none',
};

const BeatIndicator = (props: Props) => {
  const { tempo, timeSignature } = props;
  const cells = Array(Number(timeSignature)).fill(<BeatIndicatorCell />);
  return (
    <div id="beat_indicator_container">
        {cells.map((e, i) => <li style={cellStyle} key={i}>{e}</li>)}
    </div>
  )
}

export default BeatIndicator