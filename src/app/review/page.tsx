import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Review Atlanta Irrigation',
  description: 'Had a great experience? Leave us a 5-star review!',
  openGraph: {
    title: 'Review Atlanta Irrigation on Google',
    description: 'Takes 60 seconds — we really appreciate it!',
    images: ['https://www.atlantairrigation.com/review-card.png'],
  },
}

export default function ReviewPage() {
  redirect('https://g.page/r/CcOMktXQ1JJ6EBM/review')
}

