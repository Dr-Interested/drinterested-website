export type EmailAddress = {
  department: string
  email: string
  description: string
}

export const emailAddresses: EmailAddress[] = [
  {
    department: "Administration",
    email: "admin@drinterested.tech",
    description: "For general inquiries and administrative matters",
  },
  {
    department: "Human Resources",
    email: "hr@drinterested.tech",
    description: "For membership applications and team-related inquiries",
  },
  {
    department: "Outreach",
    email: "outreach@drinterested.tech",
    description: "For partnership opportunities and collaborations",
  },
  {
    department: "Technology",
    email: "tech@drinterested.tech",
    description: "For website issues and technical support",
  },
]

