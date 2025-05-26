export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-b from-transparent to-gray-900/80 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Ashvini. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with ❤️ and React
          </p>
        </div>
      </div>
    </footer>
  )
}