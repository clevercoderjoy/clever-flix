const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black">
      <div className="logo">
        <h1 className="text-[#e50914] font-bold tracking-widest text-2xl">CLEVERFLIX</h1>
      </div>
      <div className="authBtn">
        <button className="bg-[#e50914] py-1 px-4 font-bold rounded text-sm text-white">Sign In</button>
      </div>
    </header>
  )
}
export default Header