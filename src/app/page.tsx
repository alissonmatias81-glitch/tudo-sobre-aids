"use client"

import { Shield, Heart, Users, AlertCircle, CheckCircle, Info } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-red-100 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 p-2 sm:p-3 rounded-xl">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Prevenção da AIDS
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Informação salva vidas
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Alert Box */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 sm:p-6 rounded-lg mb-8 sm:mb-12">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                O que é AIDS?
              </h2>
              <p className="text-sm sm:text-base text-red-800 dark:text-red-200 leading-relaxed">
                A AIDS (Síndrome da Imunodeficiência Adquirida) é causada pelo vírus HIV, que ataca o sistema imunológico. 
                A boa notícia é que <strong>a AIDS é 100% prevenível</strong> quando seguimos as medidas corretas de proteção.
              </p>
            </div>
          </div>
        </div>

        {/* Prevention Methods */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Como se Prevenir
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 - Preservativo */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Use Preservativo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                O preservativo (camisinha) é a forma mais eficaz de prevenção durante relações sexuais. 
                Use SEMPRE, em todas as relações.
              </p>
              <div className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Eficácia de 98% quando usado corretamente</span>
              </div>
            </div>

            {/* Card 2 - PrEP */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                PrEP (Profilaxia Pré-Exposição)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Medicamento tomado ANTES da exposição ao vírus. Reduz em até 99% o risco de infecção. 
                Disponível gratuitamente no SUS.
              </p>
              <div className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Gratuito no Sistema Único de Saúde</span>
              </div>
            </div>

            {/* Card 3 - PEP */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                PEP (Profilaxia Pós-Exposição)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Medicamento de emergência tomado ATÉ 72 HORAS após exposição ao vírus. 
                Procure imediatamente um serviço de saúde!
              </p>
              <div className="flex items-start gap-2 text-sm text-orange-600 dark:text-orange-400">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Tempo é crucial: quanto antes, melhor</span>
              </div>
            </div>

            {/* Card 4 - Testagem */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Info className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Faça o Teste
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Teste regularmente para HIV. O diagnóstico precoce permite tratamento eficaz e vida normal. 
                Teste gratuito no SUS.
              </p>
              <div className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Rápido, gratuito e confidencial</span>
              </div>
            </div>

            {/* Card 5 - Não compartilhar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Não Compartilhe Objetos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Nunca compartilhe seringas, agulhas, lâminas de barbear ou outros objetos cortantes que possam ter contato com sangue.
              </p>
              <div className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Prevenção simples e eficaz</span>
              </div>
            </div>

            {/* Card 6 - Tratamento */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Tratamento = Prevenção
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Pessoas em tratamento com carga viral indetectável NÃO transmitem o vírus. 
                O tratamento protege você e outras pessoas.
              </p>
              <div className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Indetectável = Intransmissível</span>
              </div>
            </div>
          </div>
        </section>

        {/* Important Info */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Informações Importantes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                HIV NÃO se transmite por:
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Abraços, beijos sociais ou apertos de mão</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Compartilhar talheres, copos ou pratos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Usar o mesmo banheiro ou piscina</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Picadas de insetos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Suor, lágrimas ou saliva</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Formas de transmissão:
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Relações sexuais sem preservativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Compartilhamento de seringas e agulhas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Da mãe para o bebê (sem tratamento)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Transfusão de sangue contaminado</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Proteja-se e Proteja Quem Você Ama
          </h2>
          <p className="text-lg sm:text-xl mb-6 opacity-95 max-w-3xl mx-auto">
            A prevenção é a melhor arma contra a AIDS. Use preservativo, faça o teste regularmente 
            e busque informações confiáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="font-bold text-lg">Disque Saúde: 136</p>
              <p className="text-sm opacity-90">Atendimento gratuito 24h</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="font-bold text-lg">SUS</p>
              <p className="text-sm opacity-90">Tratamento 100% gratuito</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>
            Esta é uma página educativa. Para informações médicas específicas, consulte um profissional de saúde.
          </p>
        </footer>
      </main>
    </div>
  )
}
