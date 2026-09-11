import type { LucideIcon } from "lucide-react"

export function PagePlaceholder({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-24 text-center">
      <div className="rounded-xl border p-3">
        <Icon className="size-5 text-muted-foreground" />
      </div>
      <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  )
}