import '../CriminalProfile.css';

export default function CriminalProfileDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ACME</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-700">Features</a>
            <a href="#" className="text-purple-600 font-medium">Perfil de criminal</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Table</a>
          </nav>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">Juan Carlos Rodríguez</h1>
              <p className="text-gray-600">Alias: El Lobo</p>
              <p className="text-gray-600">Edad: 35</p>
              <p className="text-gray-600">Nacionalidad: Mexicano</p>
            </div>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Peligro Alto
            </span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Historial Criminal</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2">FECHA</th>
                <th className="pb-2">DELITO</th>
                <th className="pb-2">UBICACIÓN</th>
                <th className="pb-2">SENTENCIA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">2010-05-15</td>
                <td className="py-2">Robo a mano armada</td>
                <td className="py-2">Ciudad de México</td>
                <td className="py-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">5 años</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2015-11-03</td>
                <td className="py-2">Narcotráfico</td>
                <td className="py-2">Tijuana</td>
                <td className="py-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">8 años</span>
                </td>
              </tr>
              <tr>
                <td className="py-2">2022-07-20</td>
                <td className="py-2">Extorsión</td>
                <td className="py-2">Guadalajara</td>
                <td className="py-2">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">3 años</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}