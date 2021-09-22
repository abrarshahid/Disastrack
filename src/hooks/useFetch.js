import { useState, useEffect } from 'react'
// setTimeout+ useRef = background caching
const useFetch = (url) => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
    const fetchEvents = async () => {
        setLoading(true)
        const res = await fetch(url)
        const { events } = await res.json()
        setEventData(events)
        setLoading(false)
    }
    fetchEvents()
    }, [])
    return {eventData,loading}
}
export default useFetch;