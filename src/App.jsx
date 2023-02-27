import { QRCode } from "qrcode"
import { useState } from "react"

function App() {
  const [url, seturl] = useState("")
  const [qrCode, setqrCode] = useState("")

  return (
    <div className="app">
      <h1>Armando's QR Code Generator</h1>
      <input 
        type="text"
        placeholder="e.g. https://google.com" />
        <button>Generate</button>
        <img src="" alt="" />
    </div>
  )
}

export default App
