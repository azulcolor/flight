export default function Lines() {
  const elementosRepetidos = Array.from({ length: 9 }, (_, index) => <div key={index} className='line'></div>)

  return <div className='flex justify-between'>{elementosRepetidos}</div>
}
