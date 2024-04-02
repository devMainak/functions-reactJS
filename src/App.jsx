import './App.css'

// Question 1:
const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5]
  //function that reverses the array
  const reverseTheArray = (arr) => {
    return arr.reverse().join(", ")
  }

  return (
    <div>
      <h1>Reverse Array</h1>
      <p>Reversed Array: {reverseTheArray(originalArray)}</p>
    </div>
  )
}

// Question 2:
const CalculateBMI = () => {
  const calculateTheBmi = (weight, height) => {
    return weight / height**2
  }
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>BMI: {calculateTheBmi(70, 1.75).toFixed(2)}</p>
    </div>)
}

// Question 3:
const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
  ]
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * (quotes.length - 0) + 0)
    console.log(randomIndex)
    return quotes[randomIndex]
  }

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{getRandomQuote()}</p>
    </div>
  )
}

// Question 4:
const GradeAnalyser = () => {
  const score = 85
  const analyzeGrade = (score) => {
    let grade = ""
    let message = "" 
    if (score >= 90 && score <= 100)
    {
      grade = "A"
      message = "Excellent work!"
    }
    else if (score >= 80 && score <= 89)
    {
      grade = "B"
      message = "Good job!"
    }
    else if (score >= 70 && score <= 79)
    {
      grade = "C"
      message = "Not bad, keep it up!"
    }
    else if (score >= 60 && score <= 69)
    {
      grade = "D"
      message = "You passed, but aim higher next time."
    }
    else
    {
      grade = "F"
      message = "Sorry, you didn't pass. Keep working hard!"
    }
    
    return {grade, message}
  }

  return (
    <div>
      <h1>Grade Analyer</h1>
      <p>Score: {score}</p>
      <p>Grade: {analyzeGrade(score).grade}</p>
      <p>{analyzeGrade(score).message}</p>
    </div>
  )
}

// Question 5:
const TemperatureFeedback = () => {
  const currentTemp = 25
  const getTempFeedback = (temp) => {
    if (temp < 0) return "Brr, it's freezing!"
    else if (temp >= 0 && temp <= 10) return "It's quite cold, bundle up!"
    else if (temp >= 10 && temp <= 20) return "The weather is cool and comfortable"
    else if (temp >= 20 && temp <= 30) return "It's a warm day!"
    else return "It's hot outside. stay cool!"
  }

  return (
    <div>
      <h1>Temperature Feedback</h1>
      <p>Current Temperature: {currentTemp} degree celsius</p>
      <p>{getTempFeedback(currentTemp)}</p>
    </div>
  )
}


export default function App() {
  return (
    <main>
      <ReverseArray/>
      <GenerateQuote/>
      <CalculateBMI/>
      <GradeAnalyser/>
      <TemperatureFeedback/>
    </main>
  )
}
