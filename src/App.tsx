import { useCallback, useState } from 'react'
import { BookingCTA, BookingPanel } from './components/Booking'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Space } from './components/Space'
import type { Service } from './data/services'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [serviceId, setServiceId] = useState<string | null>(null)

  const openBooking = useCallback((id?: string) => {
    setServiceId(id ?? null)
    setBookingOpen(true)
  }, [])

  const closeBooking = useCallback(() => setBookingOpen(false), [])

  const onSelectService = useCallback(
    (service: Service) => {
      openBooking(service.id)
    },
    [openBooking],
  )

  return (
    <div className="min-h-svh">
      <Nav onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <Services onSelect={onSelectService} />
        <Process />
        <Space />
        <BookingCTA onBook={() => openBooking()} />
      </main>
      <Footer />
      <BookingPanel open={bookingOpen} onClose={closeBooking} initialServiceId={serviceId} />
    </div>
  )
}
