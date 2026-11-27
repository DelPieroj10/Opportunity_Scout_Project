import { CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react"


export const COLUMNS = [
  {
    id: 1,
    key: "opportunities" as const,
    title: "Opportunities",
    icon: CheckCircle2,
    accent: "text-success",
  },
  {
    id: 2,
    key: "risks" as const,
    title: "Risks",
    icon: AlertTriangle,
    accent: "text-warning",
  },
  {
    id: 3,
    key: "recommendations" as const,
    title: "Recommendations",
    icon: Lightbulb,
    accent: "text-brand-light",
  },
]