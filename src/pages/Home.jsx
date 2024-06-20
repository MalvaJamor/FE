import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigator = useNavigate()
    const [isClicked, setIsClicked] = useState(false)
    const handleClicked = () => {
        setIsClicked(!isClicked)
        navigator('/plans')
    }
  return (
    <div className="flex items-center justify-between p-10">
        <h1>Home</h1>
        <button onClick={handleClicked} className="bg-custom-purplish-blue mt-4 px-4 py-2 rounded-lg text-white shadow-lg shadow-black mb-4">Get Started</button>
    </div>
  )
}
