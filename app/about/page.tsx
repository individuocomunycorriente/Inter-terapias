import { Heart, Target, Award, Users, HandHeart, Handshake } from "lucide-react"

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
                Ser reconocidos y recordados por nuestros usuarios, por entregar un servicio de calidad, respeto, empatía, calidez humana. 
                Constituir espacios nuevos, con mayor equipo y herramientas que potencie el trabajo profesional, ya sea en tecnologías e investigaciones en el área de salud especializada.
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
                Nos comprometemos en entregar los más altos estándares de atención humana. 
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Handshake className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Empatía</h3>
              <p className="text-gray-600">
                Comprendemos y respetamos en base a nuestra experiencia profesional y bases académicas las necesidades de cada persona dentro del contexto de salud.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Colaboración</h3>
              <p className="text-gray-600">Generar espacios clínicos que potencien el trabajo colaborativo entre el grupos multidisciplinario o interdisciplinario.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <HandHeart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Calidez humana</h3>
              <p className="text-gray-600">Generar un espacio y ambiente confortable para generar lo que cualquier persona necesita, siendo un apoyo para cada proceso. </p>
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
                Con los más fuertes deseos de crear una buena respuesta a las distintas dificultades que presentas las personas y nuestro contexto social y cultural, 
                sin crear barreras, donde la única barrera eres tu, pero que terminas superando con todo el apoyo que mereces. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Con estas bases, interterapia nace el 2023, y se conforma el 2025, iniciamos con una oficina y un conjunto de profesionales, que tiene el único objetivo, contribuir 
                en esta sociedad con límites, para cada persona con sus características neurocognitivas que los hacen únicos, y que en muchas oportunidades se han discriminado o aislado, 
                desde su infancia hasta la adultez. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Es por esto que con bases teóricas, responsables y profesionales, hemos ido enmarcado y reforzando estos espacios de trabajo, para que todos los
                 profesionales tengan las herramientas y las capacidades de generar un trabajo objetivo, tanto a corto como a largo plazo, donde puedan disponer de una red de profesionales
                  que trabajarán en sus distintas áreas de especialidad, pero se vincularan, creando un encuadre integral. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                Por otro lado, siempre buscando la excelencia y el crecimiento de espacios cada ves más idóneo, integrando más profesionales vinculados a la salud, no solo física y mental
                 sino que desde un marco integral.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
