import { User } from "lucide-react"
import { PagePlaceholder } from "@/components/layout/page-placeholder"

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <PagePlaceholder
        title="Profile"
        description="TDEE calculation and profile settings will live here."
        icon={User}
      />
    </div>
  )
}