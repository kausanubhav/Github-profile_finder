import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div className="hero">
<div className="text-center hero content">
    <div className="max-w-lg">
        <h1 className="text-8xl text-white font-bold mb-8">
            Oops!
        </h1>
        <p className="text-5xl text-white mb-8">404 - Page not found!</p>
        <Link className="btn btn-primary btn-lg" to="/">
            <FaHome className="mr-2"/>
            Back To Home
        </Link>
    </div>
</div>
    </div>
  )
}