import { useFrequency } from 'react-frequency';

const FreqPlayer = () => {
  const { toggle, start, stop, playing } = useFrequency({
    hz: 174,
    type: "center",
    gain: 1,
    oscillator: "sine"
  })
  return (
    <div>FreqPlayer</div>
  )
}

export default FreqPlayer