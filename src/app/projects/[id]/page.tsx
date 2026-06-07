import { redirect } from 'next/navigation'

// Individual project pages have been removed.
// Clicking a project now redirects directly to the live site.
export default function ProjectDetailPage() {
  redirect('/projects')
}
