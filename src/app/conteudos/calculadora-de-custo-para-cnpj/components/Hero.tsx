import { ActivitiesContentProps } from '@/@types'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { roboto } from '@/lib/fonts'

const cities = [
  {
    label: 'Abadia de Goiás - GO',
    city: 'Abadia de Goiás - GO',
  },
  {
    label: 'Abadia dos Dourados - MG',
    city: 'Abadia dos Dourados - MG',
  },
  {
    label: 'Abadiânia - GO',
    city: 'Abadiânia - GO',
  },
  {
    label: 'Abaetetuba - PA',
    city: 'Abaetetuba - PA',
  },
  {
    label: 'Abaeté - MG',
    city: 'Abaeté - MG',
  },
  {
    label: 'Abaiara - CE',
    city: 'Abaiara - CE',
  },
  {
    label: 'Abaré - BA',
    city: 'Abaré - BA',
  },
  {
    label: 'Abatiá - PR',
    city: 'Abatiá - PR',
  },
  {
    label: 'Abaíra - BA',
    city: 'Abaíra - BA',
  },
  {
    label: 'Abdon Batista - SC',
    city: 'Abdon Batista - SC',
  },
  {
    label: 'Abel Figueiredo - PA',
    city: 'Abel Figueiredo - PA',
  },
  {
    label: 'Abelardo Luz - SC',
    city: 'Abelardo Luz - SC',
  },
  {
    label: 'Abre Campo - MG',
    city: 'Abre Campo - MG',
  },
  {
    label: 'Abreu e Lima - PE',
    city: 'Abreu e Lima - PE',
  },
  {
    label: 'Abreulândia - TO',
    city: 'Abreulândia - TO',
  },
  {
    label: 'Acaiaca - MG',
    city: 'Acaiaca - MG',
  },
  {
    label: 'Acajutiba - BA',
    city: 'Acajutiba - BA',
  },
  {
    label: 'Acarape - CE',
    city: 'Acarape - CE',
  },
  {
    label: 'Acaraú - CE',
    city: 'Acaraú - CE',
  },
  {
    label: 'Acari - RN',
    city: 'Acari - RN',
  },
  {
    label: 'Acará - PA',
    city: 'Acará - PA',
  },
  {
    label: 'Acauã - PI',
    city: 'Acauã - PI',
  },
  {
    label: 'Aceguá - RS',
    city: 'Aceguá - RS',
  },
  {
    label: 'Acopiara - CE',
    city: 'Acopiara - CE',
  },
  {
    label: 'Acorizal - MT',
    city: 'Acorizal - MT',
  },
  {
    label: 'Acrelândia - AC',
    city: 'Acrelândia - AC',
  },
  {
    label: 'Acreúna - GO',
    city: 'Acreúna - GO',
  },
  {
    label: 'Adamantina - SP',
    city: 'Adamantina - SP',
  },
  {
    label: 'Adelândia - GO',
    city: 'Adelândia - GO',
  },
  {
    label: 'Adolfo - SP',
    city: 'Adolfo - SP',
  },
  {
    label: 'Adrianópolis - PR',
    city: 'Adrianópolis - PR',
  },
  {
    label: 'Adustina - BA',
    city: 'Adustina - BA',
  },
  {
    label: 'Afogados da Ingazeira - PE',
    city: 'Afogados da Ingazeira - PE',
  },
  {
    label: 'Afonso Bezerra - RN',
    city: 'Afonso Bezerra - RN',
  },
  {
    label: 'Afonso Cláudio - ES',
    city: 'Afonso Cláudio - ES',
  },
  {
    label: 'Afonso Cunha - MA',
    city: 'Afonso Cunha - MA',
  },
  {
    label: 'Afrânio - PE',
    city: 'Afrânio - PE',
  },
  {
    label: 'Afuá - PA',
    city: 'Afuá - PA',
  },
  {
    label: 'Agrestina - PE',
    city: 'Agrestina - PE',
  },
  {
    label: 'Agricolândia - PI',
    city: 'Agricolândia - PI',
  },
  {
    label: 'Agrolândia - SC',
    city: 'Agrolândia - SC',
  },
  {
    label: 'Agronômica - SC',
    city: 'Agronômica - SC',
  },
  {
    label: 'Aguanil - MG',
    city: 'Aguanil - MG',
  },
  {
    label: 'Aguaí - SP',
    city: 'Aguaí - SP',
  },
  {
    label: 'Agudo - RS',
    city: 'Agudo - RS',
  },
  {
    label: 'Agudos - SP',
    city: 'Agudos - SP',
  },
  {
    label: 'Agudos do Sul - PR',
    city: 'Agudos do Sul - PR',
  },
  {
    label: 'Aguiar - PB',
    city: 'Aguiar - PB',
  },
  {
    label: 'Aguiarnópolis - TO',
    city: 'Aguiarnópolis - TO',
  },
  {
    label: 'Aimorés - MG',
    city: 'Aimorés - MG',
  },
]

const activities: ActivitiesContentProps[] = [
  {
    label: 'PJ em uma empresa',
    activity: 'PJ em uma empresa',
  },
  {
    label: 'Serviços de TI',
    activity: 'Serviços de TI',
  },
  {
    label: 'Serviços Administrativos',
    activity: 'Serviços Administrativos',
  },
  {
    label: 'Comércio',
    activity: 'Comércio',
  },
  {
    label: 'Medicina',
    activity: 'Medicina',
  },
  {
    label: 'Psicologia e outros saúde',
    activity: 'Psicologia e outros saúde',
  },
  {
    label: 'Marketing/Publicidade',
    activity: 'Marketing/Publicidade',
  },
  {
    label: 'Arquitetura',
    activity: 'Arquitetura',
  },
  {
    label: 'Engenharia',
    activity: 'Engenharia',
  },
  {
    label: 'Educação/Cursos',
    activity: 'Educação/Cursos',
  },
  {
    label: 'Advocacia',
    activity: 'Advocacia',
  },
  {
    label: 'Consultoria',
    activity: 'Consultoria',
  },
  {
    label: 'Representação Comercial',
    activity: 'Representação Comercial',
  },
]

export default function Hero() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-4 px-8 py-12 dark:bg-grey-100 lg_2:px-2">
        <h1 className="text-3xl font-bold text-primary-100">
          Calculadora Custo para tirar CNPJ
          <span className="text-secondary-150">.</span>
        </h1>
        <p className="dark:text-white">
          Confira quais são os principais custos para abrir sua empresa
          preenchendo as informações abaixo.
        </p>

        <section
          className={`flex w-full items-center justify-center py-8 ${roboto.className}`}
        >
          <div className="w-[35%]">oi</div>
          <div className="flex w-[35%] flex-col items-center justify-center gap-12">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <Label htmlFor="cities" className="font-bold dark:text-white">
                Em qual cidade você pretende abrir sua empresa?
              </Label>
              <Select>
                <SelectTrigger
                  className="w-full bg-white text-gray-500 focus-visible:ring-primary-100 dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100"
                  id="cities"
                >
                  <SelectValue
                    placeholder="Exemplo: São Paulo - SP"
                    className=""
                  />
                </SelectTrigger>
                <SelectContent position="popper" className="max-w-full">
                  {cities.map((city, index) => (
                    <SelectItem
                      key={index}
                      value={city.label}
                      className="font-medium focus:text-black focus-visible:bg-gray-100"
                    >
                      {city.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4">
              <Label htmlFor="activity" className="font-bold dark:text-white">
                Qual atividade você exerce ou exercerá?
              </Label>
              <Select>
                <SelectTrigger
                  className="w-full bg-white text-gray-500 focus-visible:ring-primary-100 dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100"
                  id="activity"
                >
                  <SelectValue
                    placeholder="Selecione uma atividade"
                    className=""
                  />
                </SelectTrigger>
                <SelectContent position="popper" className="max-w-full">
                  {activities.map((activity, index) => (
                    <SelectItem
                      key={index}
                      value={activity.label}
                      className="font-medium focus:text-black focus-visible:bg-gray-100"
                    >
                      {activity.activity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4">
              <Label htmlFor="activity" className="font-bold dark:text-white">
                Quanto você prevê que sua empresa faturará mensalmente?
              </Label>
              <Input type="text" prefix="R$" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
