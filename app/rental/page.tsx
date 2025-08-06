import { MapPin, Wifi, Car, Coffee, Shield, Clock } from "lucide-react"

const rentalSpaces = [
  {
    id: 1,
    name: "Consultorio Premium",
    size: "25 m²",
    capacity: "1-2 personas",
    price: "$150.000/mes",
    features: ["Mobiliario completo", "Aire acondicionado", "Ventana con vista", "Baño privado"],
    image: "/placeholder.svg?height=300&width=400",
    available: true,
  },
  {
    id: 2,
    name: "Consultorio Estándar",
    size: "18 m²",
    capacity: "1-2 personas",
    price: "$120.000/mes",
    features: ["Escritorio y sillas", "Iluminación LED", "Ventilación natural", "Acceso a baño compartido"],
    image: "/placeholder.svg?height=300&width=400",
    available: true,
  },
  {
    id: 3,
    name: "Sala de Terapia Grupal",
    size: "35 m²",
    capacity: "6-8 personas",
    price: "$200.000/mes",
    features: ["Sillas en círculo", "Pizarra", "Proyector", "Sistema de audio"],
    image: "/placeholder.svg?height=300&width=400",
    available: false,
  },
  {
    id: 4,
    name: "Consultorio Infantil",
    size: "22 m²",
    capacity: "1-3 personas",
    price: "$140.000/mes",
    features: ["Mobiliario infantil", "Juguetes terapéuticos", "Colores suaves", "Área de juegos"],
    image: "/placeholder.svg?height=300&width=400",
    available: true,
  },
]

const amenities = [
  { icon: Wifi, name: "WiFi de alta velocidad", description: "Internet fibra óptica incluido" },
  { icon: Car, name: "Estacionamiento", description: "Espacios disponibles para pacientes" },
  { icon: Coffee, name: "Área común", description: "Cocina y sala de descanso" },
  { icon: Shield, name: "Seguridad 24/7", description: "Sistema de seguridad y acceso controlado" },
  { icon: Clock, name: "Acceso flexible", description: "Horarios extendidos de lunes a sábado" },
  { icon: MapPin, name: "Ubicación céntrica", description: "Fácil acceso en transporte público" },
]

export default function RentalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-rose-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
              Arriendo de Espacios Profesionales
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Ofrecemos consultorios completamente equipados en un ambiente profesional y acogedor, ideal para
              psicólogos, fonoaudiólogos y otros profesionales de la salud.
            </p>
          </div>
        </div>
      </section>

      {/* Available Spaces */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Espacios Disponibles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {rentalSpaces.map((space, index) => (
              <div
                key={space.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-${index + 1} ${!space.available ? "opacity-75" : ""}`}
              >
                <div className="relative">
                  <img src={space.image || "/placeholder.svg"} alt={space.name} className="w-full h-48 object-cover" />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      space.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {space.available ? "Disponible" : "Ocupado"}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{space.name}</h3>
                      <p className="text-gray-600 text-sm mb-1">
                        {space.size} • {space.capacity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{space.price}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Características incluidas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {space.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      space.available
                        ? "bg-green-400 hover:bg-green-500 text-white transform hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!space.available}
                  >
                    {space.available ? "Consultar Disponibilidad" : "No Disponible"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Servicios Incluidos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-rose-50 to-green-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <amenity.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{amenity.name}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-rose-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Información de Arriendo</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Condiciones de Arriendo</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contrato mínimo de 6 meses</li>
                  <li>• Garantía equivalente a 2 meses de arriendo</li>
                  <li>• Servicios básicos incluidos</li>
                  <li>• Mantenimiento y limpieza incluidos</li>
                  <li>• Flexibilidad de horarios</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Qué incluye?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mobiliario profesional</li>
                  <li>• Internet de alta velocidad</li>
                  <li>• Servicios de limpieza</li>
                  <li>• Recepción compartida</li>
                  <li>• Sistema de citas online</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Interesado en arrendar un espacio?</h3>
              <p className="text-gray-600 mb-6">Contáctanos para agendar una visita y conocer nuestras instalaciones</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-400 hover:bg-green-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Agendar Visita
                </button>
                <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Solicitar Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
