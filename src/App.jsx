import { useCallback, useState } from 'react'
import './App.css'
import { Thanks } from './componentes/Thanks'
import { Cardizq } from './componentes/Cardizq'
import { CardData } from './componentes/Card.data'

function App() {
  const [nombre, setNombre] = useState('JANE APPLESSED');
  const [numeroCuenta, setNumeroCuenta] = useState('0000000000000000');
  const [cvc, setCvc] = useState('000')
  const [mes, setMes] = useState('0')
  const [year, setYear] = useState('0')
  const [showThanks, setShowThanks] = useState(false)
  const [showData, setShowData]= useState(true)
 
  const handleClick = useCallback(()=>{
    setShowData(false)
    setShowThanks(true)
  },[])

  const returnHandleClick = useCallback(()=>{
    setNombre('JANE APPLESSED')
    setNumeroCuenta('0000000000000000')
    setCvc('000')
    setMes('0')
    setYear('0')
    setShowData(true)
    setShowThanks(false)
  },[])
  
  return (
    <div className='card-app'>
      <div className='card-img'>
      <Cardizq nombre={nombre} numeroCuenta={numeroCuenta} 
      cvc={cvc} mes={mes} year={year}
      />
      </div>
      <div className='card-data'>
      {showData && (
        <CardData
        onSubscribeClick={handleClick}
        setNombreD={setNombre}
        setNumeroCuentaD={setNumeroCuenta}
        setCvcD={setCvc}
        setMesD={setMes}
        setYearD={setYear}
      />
      )}
        {showThanks && (
          <Thanks handleReturn={returnHandleClick}/>
        )}
      </div>
  
    </div>
  )
}

export default App
