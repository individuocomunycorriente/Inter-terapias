import { Heart, Target, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-rose-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Quiénes Somos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Somos un equipo de trabajo conformado por profesionales capacitados y
              motivados por aportar al desarrollo de cada niño, niña, adolescente y adulto con y
              sin discapacidad o condición.
            </p>
            <br></br>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              El centro InterTerapias Rut.es un espacio de apoyo terapéutico tanto presencial
              en nuestras oficinas ubicadas en MORANDÉ #322, Santiago centro, online y
              domicilio en el sector de Santiago, que busca aportar y potenciar al desarrollo de
              cada niño y adulto de manera integral, contribuyendo al bienestar para mejorar la
              calidad de vida de las personas y su entorno más cercano.
            </p>
            <br></br>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Nuestros programas están enfocados en cubrir dentro de lo más posible, las
              dificultades del participante y de sus padres, en caso de ser necesario, para
              potenciar y mejorar las necesidades básicas e instrumentales, entregar apoyo
              desde el área Fonoaudiológica, Terapia ocupacional, Kinesiología, Nutrición y
              Psicología. Este conjunto de profesionales trabaja desde una mirada integral, con
              el fin de cubrir todos los aspectos necesarios dentro de sus funciones educativas y
              de salud.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100 hover:shadow-lg transition-all duration-300">
              <Target className="w-16 h-16 text-rose-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Contribuir en el bienestar integral de personas neurodivergentes, salud mental u otros aspectos que dificultan el crecimiento y desarrollo neurocognitivo. 
                Como también entregar servicios de acompañamiento objetivos  de apoyo familiar, con la finalidad de un ver el contexto completo.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <Heart className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como el centro de referencia en servicios profesionales de salud mental, destacando por
                la calidad humana de nuestro equipo, la innovación en nuestros tratamientos y el compromiso con el
                bienestar integral de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Nos comprometemos con los más altos estándares de calidad en todos nuestros servicios
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Empatía</h3>
              <p className="text-gray-600">
                Entendemos y respetamos las necesidades únicas de cada persona que atendemos
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Colaboración</h3>
              <p className="text-gray-600">Trabajamos en equipo para brindar una atención integral y coordinada</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestra Historia</h2>
            <div className="bg-gradient-to-r from-green-50 to-rose-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Fundado con la visión de crear un espacio donde la salud mental y el bienestar sean prioritarios,
                nuestro centro ha crecido hasta convertirse en un referente en la comunidad. Comenzamos como un pequeño
                consultorio con el sueño de hacer la diferencia en la vida de las personas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                A lo largo de los años, hemos expandido nuestros servicios y nuestro equipo, siempre manteniendo nuestro
                compromiso con la excelencia y la atención personalizada. Hoy, no solo ofrecemos servicios directos,
                sino que también proporcionamos espacios para que otros profesionales puedan desarrollar su práctica en
                un ambiente colaborativo y profesional.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nuestro enfoque integral nos permite abordar las necesidades de nuestros pacientes desde múltiples
                perspectivas, trabajando en equipo para lograr los mejores resultados posibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
