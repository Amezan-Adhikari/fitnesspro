import { Flame } from "lucide-react"
import { PagePlaceholder } from "@/components/layout/page-placeholder"

export default function TodayPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <PagePlaceholder
        title="Today"
        description="Daily calorie and macro tracking will live here."
        icon={Flame}
      />
    </div>
  )
}