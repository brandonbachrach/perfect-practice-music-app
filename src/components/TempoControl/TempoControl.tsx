import { useState, useEffect, ChangeEvent } from 'react'

interface Props {
  tempo: string;
  handleChangeTempo: (newTempo: string) => void;
}

const inputStyle = {
  background: 'transparent',
  color: '#fff',
  fontSize: '24px',
  fontWeight: 'bold',
  border: 'none',
  maxWidth: '100px',
  textAlign: 'center' as const,
}

const TempoControl = (props: Props) => {
  const { tempo, handleChangeTempo } = props;
  const [newTempo, setNewTempo] = useState(tempo);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setNewTempo(value);
  }
  
  useEffect(() => {
    handleChangeTempo(newTempo);
  }, [handleChangeTempo, newTempo]);

  return (
    <>
      <div> 
        <input type="number" value={tempo} onChange={handleChange} min="1" max="240" style={inputStyle} />
        BPM
      </div>
    </>
  )
}

export default TempoControl;