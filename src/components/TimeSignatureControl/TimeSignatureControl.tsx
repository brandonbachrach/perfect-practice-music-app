import { useState, useEffect, ChangeEvent } from 'react'

interface Props {
  timeSignature: string;
  handleChangeTimeSignature: (newTimeSignature: string) => void;
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

const TimeSignatureControl = (props: Props) => {
  const { timeSignature, handleChangeTimeSignature } = props;
  const [newTimeSignature, setNewTimeSignature] = useState(timeSignature);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (Number(value) < 1 || Number(value) > 16) return;
    setNewTimeSignature(value);
  }
  
  useEffect(() => {
    handleChangeTimeSignature(newTimeSignature);
  }, [handleChangeTimeSignature, newTimeSignature]);

  return (
    <>
      <div> 
        <input type="number" value={timeSignature} onChange={handleChange} style={inputStyle} />
        / 4
      </div>
    </>
  )
}

export default TimeSignatureControl;