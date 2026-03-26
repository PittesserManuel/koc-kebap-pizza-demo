export default function DemoBanner() {
  return (
    <div className="bg-gold/10 border-b border-gold/30 text-center py-2 px-4">
      <span className="text-gold text-xs font-medium">
        Dies ist eine Demo von Stratify –{' '}
        <a href="https://stratify.at" target="_blank" rel="noopener noreferrer"
          className="underline hover:text-gold-dark transition-colors">
          stratify.at
        </a>
      </span>
    </div>
  )
}
