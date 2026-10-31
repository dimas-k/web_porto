export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] px-4 pb-28 sm:px-6">
      <div className="mono flex flex-wrap items-center justify-between gap-3 border-t border-edge pt-6 text-xs text-muted">
        <span>© {new Date().getFullYear()} Dimas Arya Ramadhan Setiawan</span>
        {/* <span>Next.js · Tailwind · Framer Motion</span> */}
      </div>
    </footer>
  )
}
