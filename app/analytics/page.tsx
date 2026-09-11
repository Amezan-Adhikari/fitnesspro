import { BarChart3 } from "lucide-react"
import { PagePlaceholder } from "@/components/layout/page-placeholder"

export default function AnalyticsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <PagePlaceholder
        title="Analytics"
        description="Trends and charts for calories, macros and weight will live here."
        icon={BarChart3}
      />
    </div>
  )
}