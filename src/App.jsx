import { useState } from 'react'
import './App.css'

function App () {
  const [inputValue, setInputValue] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const handleChange = (event) => {
    const newInputText = event.target.value

    newInputText.startsWith(' ')
      ? setInputValue(newInputText.trim())
      : setInputValue(newInputText)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!inputValue) return

    fetch(`https://cataas.com/cat/says/${inputValue}?fontSize=50&fontColor=white`)
      .then((response) => response
      )
      .then((data) => {
        const { url } = data
        setImgUrl(url)
      })
  }

  return (
    <>
      <h1>RANDOM CAT GENERATOR</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            className='input input-alt'
            type='text' onChange={handleChange}
            value={inputValue}
            name='input'
            placeholder='Write here...'
          />
          <span className='input-border input-border-alt' />
          <button type='submit'>Generate</button>
        </div>
      </form>
      <main>
        {imgUrl && <img src={imgUrl} alt='A random meme cat' />}
      </main>
    </>
  )
}

export default App
