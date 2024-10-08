import { useState } from 'react'
import './Quiz.css'

function Quiz() {
  const [fillColor, setFillColor] = useState('white')
  const [fontColor, setFontColor] = useState('black')
  const btnHover = () => {
    setFillColor('#FB5043')
    setFontColor('white')
  }
  const btnHoverLeave = () => {
    setFillColor('white')
    setFontColor('black')
  }
  return (
    <div className="playQuizContainer" style={{ background: '#F9F7EF' }}>
      <div className="quizContainer">
        <div className="quizContent">
          <h1>WHAT SIMON&apos;S CAT CHARACTER ARE YOU?</h1>
          <p>
            Are you a Kitten or a Chloe?! Answer a couple of easy questions and
            you&apos;ll know which one of the Simon&apos;s Cat characters is
            your best match! Enjoy!
          </p>
          <svg
            className="relative z-0"
            width="176"
            height="50"
            viewBox="0 0 176 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              onMouseEnter={btnHover}
              onMouseLeave={btnHoverLeave}
              d="M62.149.141h9.05c2.925 0 6.274-.45 9.118.256 2.632.653 5.697.256 8.407.256h8.943c1.841 0 3.684.018 5.526.002 1.956-.019 3.81.485 5.75.515 2.898.044 5.8-.005 8.698-.005 5.26 0 10.542-.14 15.8-.006 1.346.035 2.535.539 3.907.522 1.525-.018 3.105-.123 4.626-.031.874.053 1.636.457 2.487.567.674.086 1.295-.105 1.975.085 1.135.317 2.256.491 3.392.796.64.171 1.21-.001 1.851.085.683.092 1.284.437 1.97.555 1.318.227 2.663.562 3.983 1.004 3.065 1.027 5.624 2.954 8.375 4.61 2.687 1.62 5.356 3.72 7.344 6.201 1.254 1.565 1.202 3.257 1.58 5.059.322 1.529.55 3.059.831 4.606.517 2.824.13 6.511-.572 9.238-1.023 3.966-4.195 7.444-7.224 9.835-3.052 2.41-6.414 4.52-10.316 4.462-1.706-.026-3.203.543-4.89.523-1.54-.019-3.08-.006-4.62-.006h-36.976c-2.621 0-5.243.016-7.864.001-1.551-.008-2.918.439-4.422.523-1.373.077-2.777-.012-4.152-.012H61.848c-3.388 0-7.113.472-10.479.027-1.578-.209-2.894-.558-4.541-.54-1.791.019-3.345-.52-5.148-.508-1.669.011-3.338-.013-5.008-.004-1.94.01-3.74-.485-5.654-.515-2.558-.041-5.12.045-7.678.017-1.617-.018-3.477-.412-5.052-.774-1.832-.42-3.485-.773-5.127-1.784-2.903-1.784-5.618-3.494-8.104-5.898-1.256-1.216-2.03-2.576-2.944-4.066C1.28 34.378.858 32.526.52 30.874c-.418-2.041.135-4.14-.343-6.172-.403-1.71-.031-2.596.259-4.193.626-3.44 1.213-6.722 3.679-9.41C6.873 8.093 9.61 4.255 13.63 3.213a68.216 68.216 0 0 1 4.714-1.074c.828-.154 1.55-.45 2.404-.483 1.067-.041 2.09.103 3.153-.093 3.925-.725 8.043-.395 12.038-.398 1.745-.001 3.198-.19 4.897-.468C42.39.442 44.135.653 45.72.653c1.446 0 2.987.163 4.425.02C51.587.527 52.818.165 54.31.14h7.839Z"
              fill={fillColor}
              fillRule="evenodd"
            ></path>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill={fontColor}
              fontSize="16"
              fontFamily="Arial"
            >
              TAKE THE QUIZ
            </text>
          </svg>
        </div>
        <div className="quizImage"></div>
      </div>
    </div>
  )
}

export default Quiz
