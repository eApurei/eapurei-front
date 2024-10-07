import { SocialProofCardProps } from '@/@types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function SocialProofCard({ item }: SocialProofCardProps) {
  return (
    <Card className="h-[340px] w-[340px] p-4">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-primary-100"></div>
        <CardTitle className="text-primary-100">{item.name}</CardTitle>
        <CardDescription>{item.area}</CardDescription>
        <CardDescription>{item.plan}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4 pb-0">
        <div className="grid w-full items-center gap-4 text-sm">
          <div className="flex flex-col">
            <p className="text-center">{item.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
