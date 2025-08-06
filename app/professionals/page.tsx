import { Mail, Phone, Award, Calendar } from "lucide-react"

const professionals = [
  {
    id: 1,
    name: "Constanza Cañete",
    specialty: "Psicóloga Clínica",
    experience: "X años de experiencia",
    education: "Especialista en Psicología Infantil y Adolescente, Universidad X",
    specializations: ["Terapia Cognitivo-Conductual", "Ansiedad y Depresión", "Terapia de Pareja"],
    image: "/perfil_cony.jpeg?height=300&width=300",
    email: "maria.gonzalez@centro.com",
    phone: "+56 9 1234 5678",
  },
  {
    id: 2,
    name: "Jose Szabo",
    specialty: "Fonoaudiólogo",
    experience: "C años de experiencia",
    education: "Licenciado en Fonoaudiología, Universidad X",
    specializations: ["Trastornos del Habla", "Rehabilitación Vocal", "Terapia Infantil"],
    image: "/perfil_jose.jpeg?height=300&width=300",
    email: "carlos.mendoza@centro.com",
    phone: "+56 9 8765 4321",
  },
  {
    id: 3,
    name: "Dra. Ana Rodríguez",
    specialty: "Psicóloga Infantil",
    experience: "10 años de experiencia",
    education: "Especialista en Psicología Infantil y Adolescente",
    specializations: ["Terapia de Juego", "TDAH", "Trastornos del Aprendizaje"],
    image: "/placeholder.svg?height=300&width=300",
    email: "ana.rodriguez@centro.com",
    phone: "+56 9 5555 6666",
  },
  {
    id: 4,
    name: "Dr. Luis Herrera",
    specialty: "Psicólogo Organizacional",
    experience: "12 años de experiencia",
    education: "Magíster en Psicología Organizacional",
    specializations: ["Coaching Ejecutivo", "Desarrollo Organizacional", "Gestión del Estrés"],
    image: "/placeholder.svg?height=300&width=300",
    email: "luis.herrera@centro.com",
    phone: "+56 9 7777 8888",
  },
  {
    id: 5,
    name: "Dr. Luis Herrera",
    specialty: "Psicólogo Organizacional",
    experience: "12 años de experiencia",
    education: "Magíster en Psicología Organizacional",
    specializations: ["Coaching Ejecutivo", "Desarrollo Organizacional", "Gestión del Estrés"],
    image: "/placeholder.svg?height=300&width=300",
    email: "luis.herrera@centro.com",
    phone: "+56 9 7777 8888",
  },
]

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-rose-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Nuestros Profesionales</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Conoce a nuestro equipo de profesionales altamente calificados, comprometidos con brindar la mejor
              atención y acompañamiento en tu proceso de bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {professionals.map((professional, index) => (
              <div
                key={professional.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay-${index + 1}`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{professional.name}</h3>
                      <p className="text-lg text-green-600 font-semibold mb-1">{professional.specialty}</p>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {professional.experience}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Formación:</h4>
                      <p className="text-gray-600 text-sm">{professional.education}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Especializaciones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {professional.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`mailto:${professional.email}`}
                        className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Contactar
                      </a>
                      <a
                        href={`tel:${professional.phone}`}
                        className="flex items-center gap-2 bg-rose-100 hover:bg-rose-200 text-rose-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Llamar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-rose-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Necesitas una consulta?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestros profesionales están listos para acompañarte en tu proceso de bienestar. Agenda tu cita hoy mismo.
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Agendar Cita
          </button>
        </div>
      </section>
    </div>
  )
}
