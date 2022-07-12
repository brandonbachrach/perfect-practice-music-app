import { useState, useEffect, useRef } from 'react'
import './App.css';
import BeatIndicator from './components/BeatIndicator/BeatIndicator';
import Metronome from './components/Metronome/Metronome';
import ModeRandomizer from './components/ModeRandomizer/ModeRandomizer';
import TimeSignatureControl from './components/TimeSignatureControl/TimeSignatureControl';
import TempoControl from './components/TempoControl/TempoControl';

const App = () => {
  const [tempo, setTempo] = useState('120');
  const [timeSignature, setTimeSignature] = useState('4');

  let singleMeasure = useRef(2000);
  useEffect(() => {
    singleMeasure.current = (60000 / Number(tempo)) * Number(timeSignature);
    console.log(singleMeasure.current);
  }, [tempo, timeSignature]);
  

  const handleChangeTempo = (newTempo: string) => {
    setTempo(newTempo);
  }

  const handleChangeTimeSignature = (newTimeSignature: string) => {
    setTimeSignature(newTimeSignature);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Metronome timeSignature={timeSignature} singleMeasure={singleMeasure.current}/>
        <ModeRandomizer singleMeasure={singleMeasure.current}/>
        <TimeSignatureControl timeSignature={timeSignature} handleChangeTimeSignature={handleChangeTimeSignature}/>
        <TempoControl tempo={tempo} handleChangeTempo={handleChangeTempo}/>
        <BeatIndicator tempo={tempo} timeSignature={timeSignature}/>
      </header>
    </div>
  )
}

export default App;
