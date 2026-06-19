export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-purple-700 text-white">
      <h2 className="text-2xl font-bold">
        N L Marriage Hall Guest House
      </h2>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}