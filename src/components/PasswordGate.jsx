import { useState } from 'react'

const PASSWORD = 'Protogen300!'
const STORAGE_KEY = '912days-unlocked'

function readStoredUnlock() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(readStoredUnlock)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) {
    return children
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (value === PASSWORD) {
      try {
        window.localStorage.setItem(STORAGE_KEY, 'true')
      } catch {
        // Storage unavailable — the session still unlocks, just won't persist.
      }
      setUnlocked(true)
      return
    }

    setError(true)
  }

  return (
    <div className="password-gate">
      <form className="password-gate__card" onSubmit={handleSubmit}>
        <p className="password-gate__label">🔒 Private story</p>
        <h1 className="password-gate__title">This one&rsquo;s password-protected.</h1>
        <p className="password-gate__body">Enter the password to keep reading.</p>
        <input
          type="password"
          className="password-gate__input"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
            setError(false)
          }}
          placeholder="Password"
          autoFocus
          aria-label="Password"
          aria-invalid={error}
        />
        {error && <p className="password-gate__error">That&rsquo;s not it — try again.</p>}
        <button type="submit" className="password-gate__submit">
          Unlock
        </button>
      </form>
    </div>
  )
}

export default PasswordGate
