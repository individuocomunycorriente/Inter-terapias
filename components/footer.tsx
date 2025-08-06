import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-200 to-rose-200 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-rose-400 rounded-full flex items-center justify-center">
                <img
                      src={"/logo.jpeg"}
                      alt={"logo"}
                      className="w-full h-full md:h-full object-cover"
                    />
              </div>
              <span className="text-xl font-bold">Servicios de especialidades en salud</span>
            </div>
            <p className="text-gray-700 mb-4 max-w-md">
              Centro especializado en servicios profesionales de salud mental y bienestar, comprometidos con brindar
              atención de calidad en un ambiente profesional y acogedor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">info@servicios.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-gray-700">
                  Av. Principal 123
                  <br />
                  Santiago, Chile
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-gray-700">
              <div>Lunes - Viernes: 8:00 - 20:00</div>
              <div>Sábados: 9:00 - 14:00</div>
              <div>Domingos: Cerrado</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-600">© 2024 Servicios Profesionales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
