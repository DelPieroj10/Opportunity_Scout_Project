import { CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react"


export const COLUMNS = [
  {
    id: 1,
    key: "opportunities" as const,
    title: "Opportunities",
    icon: CheckCircle2,
    accent: "text-emerald-500",
  },
  {
    id: 2,
    key: "risks" as const,
    title: "Risks",
    icon: AlertTriangle,
    accent: "text-amber-500",
  },
  {
    id: 3,
    key: "recommendations" as const,
    title: "Recommendations",
    icon: Lightbulb,
    accent: "text-blue-500",
  },
]