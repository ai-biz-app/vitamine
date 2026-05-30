interface LastUpdatedProps {
  date?: string
  className?: string
}

export default function LastUpdated({
  date = '2025-05-30',
  className = '',
}: LastUpdatedProps) {
  return (
    <p
      className={`text-[11px] text-[#4a4a4a] opacity-50 uppercase tracking-wider ${className}`}
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      Last updated: <time dateTime={date}>{date}</time>
    </p>
  )
}
