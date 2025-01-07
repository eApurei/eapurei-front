import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const paragraphContent = [
  {
    content:
      'Para calcular o salário PJ, você precisa primeiro calcular o seu salário líquido CLT somado de benefícios.',
  },
  {
    content:
      'Para calcular o salário CLT, some o salário líquido mais 1/12 de férias e sobre este valor adicione 33,33% relacionado sobre o terço de férias + 1/12 de 13º salário + 8% sobre salário bruto (FGTS) + benefícios de alimentação, saúde e outros.',
  },
  {
    content:
      'Para calcular o salário PJ líquido, desconte do seu salário PJ o valor do imposto da empresa (6 a 33% do faturamento), desconte também 11% de INSS sobre o valor do salário estabelecido e desconte também o custo com contabilidade.',
  },
  {
    content:
      'Na prática, uma remuneração de PJ bruta precisa ser, em média, de 20% a 50% maior do que o salário bruto como CLT.',
  },
]

export default function HowToCalculatePJSalary() {
  return (
    <main
      className={`${roboto.className} mt-8 flex w-full items-center justify-center gap-4 bg-secondary-100 px-8 py-12 lg_2:px-2`}
    >
      <div className="flex w-1/2 flex-col items-start justify-center gap-4 text-white">
        <h1 className="text-3xl font-bold">
          Como calcular salário <span className="text-yellow-300">PJ</span>
        </h1>

        {paragraphContent.map((item, index) => (
          <p key={index} className="text-zinc-200">
            {item.content}
          </p>
        ))}

        <ButtonComponent label="Eu quero ser PJ agora!" linkTo="#" />
      </div>

      <div className="flex h-80 w-1/2 flex-col items-center justify-center gap-4 bg-primary-100">
        IMAGEM
      </div>
    </main>
  )
}
