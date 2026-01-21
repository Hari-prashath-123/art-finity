"use client"

import { useEffect, useState } from "react"

type Props = {
  sheetId: string
  gid?: string
}

export default function RegistrationCount({ sheetId, gid = "0" }: Props) {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchCount() {
      setLoading(true)
      setError(null)
      try {
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`
        const res = await fetch(url)
        const text = await res.text()

        // Extract JSON blob from Google gviz response
        const start = text.indexOf('{')
        const end = text.lastIndexOf(')')
        if (start === -1 || end === -1) throw new Error('Unexpected sheet response')
        const json = JSON.parse(text.slice(start, end))

        const rows = json.table?.rows ?? []

        if (!cancelled) {
          setCount(rows.length)
        }
      } catch (err: any) {
        if (!cancelled) setError(err?.message ?? 'Failed to load')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCount()

    return () => {
      cancelled = true
    }
  }, [sheetId, gid])

  return (
    <div className="mt-6">
      <div className="inline-flex items-center gap-4 bg-white/5 px-4 py-3 rounded-md border border-white/10">
        <div className="text-2xl font-bold">{loading ? '...' : error ? '—' : count}</div>
        <div className="text-sm text-gray-300">Teams Registered</div>
      </div>
      {error && <p className="text-sm text-red-400 mt-2">Unable to load registrations</p>}
    </div>
  )
}
