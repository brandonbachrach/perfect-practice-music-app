import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import clickStrongFile from '../../assets/sounds/clickStrong.wav';
import clickWeakFile from '../../assets/sounds/clickWeak.wav';

interface Props {
    timeSignature: string;
    singleMeasure: number;
}

const Metronome = (props: Props) => {
  const { timeSignature, singleMeasure } = props;
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const clickStrong = new Audio(clickStrongFile);
  const clickWeak = new Audio(clickWeakFile);

  const playClick = () => {
    // Keep track of which beat we're on
    setCount(prevCount => {
      console.log('count1', count);
      console.log('prevCount1', prevCount);
      return (prevCount++) % Number(timeSignature);
    });
    
    // The first beat will have a different sound than the others
    if(count % Number(timeSignature) === 0) {
      clickStrong.play();
    } else {
      clickWeak.play();
    }
  }

  const togglePlaying = () => {
    if(playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
      setCount(0);
      playClick();
    }
  }

  useEffect(() => {
    if (playing){
      const interval = setInterval(() => {
        setCount(count => count + 1);
        playClick();
      }, singleMeasure);
      console.log(singleMeasure);
      return () => clearInterval(interval);
    }
    console.log('count', count);
    console.log('playing', playing);
  }, [playing, singleMeasure, count]);

  return (
    <IconButton onClick={togglePlaying} color='primary'>
        {
          playing ? 
          <PauseCircleIcon /> 
          : <PlayCircleIcon />
        }
    </IconButton>
  )
}

export default Metronome;