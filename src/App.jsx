import QRCode from "qrcode"
import { useState } from "react"

function App() {
  const [url, seturl] = useState("")
  const [qr, setqrCode] = useState("")

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
        width: 800,
        margin: 1
    },  (err, url) => {
        if (err) return console.error(err)

        console.log(url)
        setqrCode(url)    
    })
  }

  return (
    <div className="app">
      <h1>Armando's QR Code Generator</h1>
      <input 
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => seturl(evt.target.value)} />
      <button onClick={generateQRCode}>Generate</button>
      {qr && <>
        <img src={qr} />
        <a href={qr} download="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App
