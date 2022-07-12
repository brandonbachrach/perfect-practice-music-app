import { useState, useEffect } from 'react';

interface Props {
    singleMeasure: number;
}

const modes = [
    'Ionian',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Aeolian',
    'Locrian',
];

const ModeRandomizer = (props: Props) => {
    const { singleMeasure } = props;
    const [currentMode, setCurrentMode] = useState(modes[0]);

    const measuresPerChange = 4;
    const changeInterval = Math.floor(measuresPerChange * (singleMeasure || 2000));

    useEffect(() => {
        setInterval(() => {
            const newMode = modes[Math.floor(Math.random() * modes.length)];
            setCurrentMode(newMode);
        }, changeInterval);
      }, []);

    return (
        <>
            <h1 style={{fontSize: '60px', textAlign: 'center'}}>{currentMode} <span>mode</span></h1>
        </>
    );
}

export default ModeRandomizer;