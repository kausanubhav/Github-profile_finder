import spin from './assets/spin.gif'
export default function Spinner() {
  return (
    <div className='mt-20'>
        <img width={180} className="text-center mx-auto" src={spin} alt="Loading.." />
    </div>
  )
}