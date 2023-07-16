import { useEffect, useState } from 'react'
import useScanDetection from 'use-scan-detection'


const App = () => {
  const [barcode, setBarcode] = useState()
  useScanDetection({
    onComplete: (code: any) => {
      setBarcode(code)
    }
  })

  useEffect(() => { console.log(barcode) }, [barcode])

  return (
    <div>
      <h1>code is {barcode} </h1>
    </div>
  )
}

export default App
