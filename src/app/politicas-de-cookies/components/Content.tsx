import Link from 'next/link'

import { roboto } from '@/lib/fonts'

export default function Content() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-8 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 px-12">
        <h1 className="text-3xl font-bold text-primary-100">
          Política de Cookies eApurei
          <span className="text-secondary-150">.</span>
        </h1>

        <p className="dark:text-white">
          A presente Política de Cookies é um documento complementar à Política
          de Privacidade da eApurei. Neste documento você encontrará informações
          objetivas e claras sobre o que são cookies, quais cookies a eApurei
          utiliza em suas aplicações, qual papel desempenham e como
          configurá-los.
        </p>
      </div>

      <div className="mt-8 flex w-full flex-col items-start justify-center gap-4 px-12">
        <h1 className="text-3xl font-bold text-primary-100">
          O que são Cookies?
        </h1>

        <p className="dark:text-white">
          Cookies são pequenos arquivos de textos ou fragmentos de informação
          que são armazenadas no computador ou dispositivo móvel (smartphone ou
          tablet) quando você visita as aplicações da eApurei. Eles servem para
          armazenar ou recolher informações no navegador e são utilizados
          principalmente para fazer com que o website funcione de forma mais
          rápida, eficiente e personalizada.
        </p>

        <p className="dark:text-white">
          Geralmente um cookie contém o nome do website de origem, seu tempo de
          vida (quanto tempo este cookie permanecerá em seu dispositivo) e um
          valor, que é normalmente um número exclusivo gerado aleatoriamente.
        </p>

        <p className="dark:text-white">
          Os cookies são utilizados para mapear as preferências do usuário e de
          seu dispositivo, bem como verificar informações, eliminando a
          necessidade de introduzir repetidamente os mesmos dados. Respeitando o
          direito à privacidade dos clientes e visitantes das aplicações da
          eApurei, esta política descreve as principais informações sobre os
          cookies utilizados para fornecer uma melhor performance e experiência
          para todos os usuários dos serviços da eApurei.
        </p>
      </div>

      <div className="mt-8 flex w-full flex-col items-start justify-center gap-8 px-12">
        <h1 className="text-3xl font-bold text-primary-100">
          Quais são os tipos de Cookies utilizados?
        </h1>

        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-bold text-primary-100">
            1. Quanto a sua propriedade:
          </h1>

          <p className="dark:text-white">
            <strong>• Cookies proprietários:</strong> são cookies definidos por
            nós ou por terceiros em nosso nome.
          </p>

          <p className="dark:text-white">
            <strong>• Cookies de terceiros:</strong> às vezes a eApurei recorre
            a outros fornecedores, que também têm permissão para instalar
            cookies nos dispositivos dos usuários em seu nome quando estes
            visitam site e aplicações.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-bold text-primary-100">
            2. Quanto ao seu tempo de vida:
          </h1>

          <p className="dark:text-white">
            <strong>• Cookies de sessão ou temporários:</strong> permanecem no
            dispositivo do usuário apenas durante a navegação no site e
            plataforma. Servem para analisar padrões de tráfego no site e para
            proporcionar melhor experiência e conteúdo contextualizado aos
            usuários.
          </p>

          <p className="dark:text-white">
            <strong>• Cookies persistentes:</strong> estes cookies permanecem
            por mais tempo no dispositivo, podendo ser excluídos manualmente
            pelo usuário. Este período de permanência do cookie depende do tipo
            de cookie utilizado. Podem ser utilizados para lembrar informações
            de login e senha dos usuários, por exemplo, ou para garantir uma
            melhor experiência entre diferentes sessões.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-bold text-primary-100">
            3. Quanto a sua finalidade:
          </h1>

          <p className="dark:text-white">
            <strong>• Cookies Estritamente Necessários:</strong> estes cookies
            são os mínimos necessários para que o website funcione da forma
            esperada e não podem ser desligados do website e aplicações.
            Normalmente, eles só são configurados em resposta a uma solicitação
            de serviço pelo usuário como, por exemplo, definição das
            preferências de privacidade, início de sessão ou preenchimento de
            formulários. O usuário pode configurar o seu navegador para bloquear
            ou alertá-lo sobre esses cookies, mas caso bloqueados, algumas
            partes do website não funcionarão corretamente. Estes cookies não
            armazenam qualquer informação pessoal identificável.
          </p>

          <p className="dark:text-white">
            <strong>• Cookies de Funcionalidade:</strong> estes cookies permitem
            que o website forneça personalização e funcionalidades melhoradas.
            Se o usuário não permitir a utilização destes cookies algumas destas
            funcionalidades, ou mesmo todas, podem não atuar corretamente.
          </p>

          <p className="dark:text-white">
            <strong>• Cookies de Desempenho ou Analíticos:</strong> estes
            cookies permitem a contagem de visitas e fontes de tráfego, de forma
            que a eApurei possa medir e melhorar o desempenho de suas
            aplicações. Eles mapeiam as páginas mais e menos populares e
            monitoram a movimentação dos usuários pelo website. Se o usuário não
            permitir estes cookies não é possível saber quando as visitas ao
            website ocorreram.
          </p>

          <p className="dark:text-white">
            <strong>• Cookies de Publicidade:</strong> estes cookies são
            estabelecidos para uma série de serviços das redes sociais que a
            eApurei pode adicionar ao website como, por exemplo, o
            compartilhamento de conteúdo nas redes sociais dos visitantes. Eles
            são capazes de rastrear a navegação dos usuários e criar um perfil
            sobre os seus interesses. Isso pode afetar o conteúdo e as mensagens
            que aparecem nos websites que o usuário visita.
          </p>
        </div>
      </div>

      <div className="mt-8 flex w-full flex-col items-start justify-center gap-4 px-12">
        <h1 className="text-3xl font-bold text-primary-100">
          Gerenciamento de Cookies
        </h1>

        <p className="dark:text-white">
          A instalação dos cookies está sujeita ao consentimento do usuário,
          suas permissões podem ser revisadas a qualquer momento, podendo
          bloqueá-los, aceitá-los ou ativar notificações para quando alguns
          cookies forem enviados ao dispositivo.
        </p>

        <p className="dark:text-white">
          No primeiro acesso às aplicações da eApurei, será requerida a
          concordância do usuário para instalação dos cookies. Para este
          gerenciamento, a eApurei utiliza um mecanismo que alerta e solicita o
          consentimento na página inicial.
        </p>

        <p className="dark:text-white">
          Como mencionado, o usuário pode a qualquer tempo e sem nenhum custo
          alterar as permissões, bloquear ou recusar os cookies, podendo
          configurá-los de acordo com suas preferências. Reforçando, a revogação
          do consentimento de determinados cookies pode inviabilizar o
          funcionamento correto de alguns recursos da plataforma.
        </p>

        <p className="dark:text-white">
          Para gerenciar os cookies, o usuário também poderá fazê-lo diretamente
          nas configurações do navegador, na área de “Gestão de Cookies”.
        </p>

        <p className="dark:text-white">
          É possível acessar os tutoriais sobre o tema diretamente nos links
          abaixo:
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={
              'https://support.microsoft.com/pt-br/windows/gerenciar-cookies-no-microsoft-edge-exibir-permitir-bloquear-excluir-e-usar-168dab11-0753-043d-7c16-ede5947fc64d'
            }
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Internet Explorer
          </Link>
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={
              'https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s'
            }
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Mozilla Firefox
          </Link>
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={'https://support.apple.com/pt-br/guide/safari/sfri11471/mac'}
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Safari
          </Link>
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={
              'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR'
            }
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Google Chrome
          </Link>
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={
              'https://support.microsoft.com/pt-br/windows/gerenciar-cookies-no-microsoft-edge-exibir-permitir-bloquear-excluir-e-usar-168dab11-0753-043d-7c16-ede5947fc64d'
            }
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Microsoft Edge
          </Link>
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={'https://help.opera.com/en/latest/web-preferences/#cookies'}
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Opera
          </Link>
        </p>

        <p className="dark:text-white">
          Se você usa o{' '}
          <Link
            href={'https://brave.com/glossary/cookie/'}
            className="text-primary-100 underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Brave
          </Link>
        </p>
      </div>

      <div className="mt-8 flex w-full flex-col items-start justify-center gap-4 px-12">
        <h1 className="text-3xl font-bold text-primary-100">
          Disposições finais
        </h1>

        <p className="dark:text-white">
          A eApurei considera a privacidade e confiança fundamentais e busca se
          atualizar constantemente para manter os mais altos padrões de
          segurança, podendo alterar esta Política de Cookies a qualquer tempo.
          Tais mudanças passarão a valer após a publicação e todos os usuários
          serão avisados. A eApurei recomenda que seus usuários sempre
          verifiquem a Política de Cookies, bem como a Política de Privacidade.
        </p>

        <p className="dark:text-white">
          Em caso de dúvidas sobre esta Política de Cookies, o usuário pode
          entrar em contato pelo seguinte meio:
        </p>

        <p className="dark:text-white">&nbsp; &nbsp;• dpo@eapurei.com.br</p>

        <p className="dark:text-white">
          Esta Política de Cookies foi atualizada em 02/06/2021.
        </p>
      </div>
    </main>
  )
}
