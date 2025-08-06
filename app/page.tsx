import Link from "next/link"
import { ArrowRight, Users, Building, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-100 to-rose-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
              Servicios de especialidades en salud
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Brindamos atención especializada en psicología, fonoaudiología y otros servicios profesionales con un
              equipo altamente calificado y espacios diseñados para tu bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link
                href="/professionals"
                className="bg-green-400 hover:bg-green-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Conoce a Nuestros Profesionales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-rose-300 hover:bg-rose-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Quiénes Somos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Psicología</h3>
              <p className="text-gray-600">Atención psicológica especializada para niños, adolescentes y adultos</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fonoaudiología</h3>
              <p className="text-gray-600">Evaluación y tratamiento de trastornos del habla y lenguaje</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Building className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Arriendo de Espacios</h3>
              <p className="text-gray-600">Consultorios equipados disponibles para profesionales independientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-rose-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para agendar una cita o conocer más sobre nuestros servicios
          </p>
          <Link
            href="/rental"
            className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ver Espacios Disponibles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
