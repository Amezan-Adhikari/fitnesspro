import { CalendarDays } from "lucide-react"
import { PagePlaceholder } from "@/components/layout/page-placeholder"

export default function HistoryPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <PagePlaceholder
        title="History"
        description="Previous days and past logs will live here."
        icon={CalendarDays}
      />
    </div>
  )
}