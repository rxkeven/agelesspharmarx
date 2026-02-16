export function DNAHelix() {
  return (
    <svg
      className="absolute top-20 right-10 w-64 h-64 opacity-5"
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 0C100 0 50 40 50 100C50 160 100 200 100 200C100 200 150 160 150 100C150 40 100 0 100 0Z"
        stroke="#d4af37"
        strokeWidth="2"
      />
      <path
        d="M100 200C100 200 50 240 50 300C50 360 100 400 100 400C100 400 150 360 150 300C150 240 100 200 100 200Z"
        stroke="#d4af37"
        strokeWidth="2"
      />
      <circle cx="100" cy="50" r="4" fill="#d4af37" />
      <circle cx="100" cy="100" r="4" fill="#d4af37" />
      <circle cx="100" cy="150" r="4" fill="#d4af37" />
      <circle cx="100" cy="200" r="4" fill="#d4af37" />
      <circle cx="100" cy="250" r="4" fill="#d4af37" />
      <circle cx="100" cy="300" r="4" fill="#d4af37" />
      <circle cx="100" cy="350" r="4" fill="#d4af37" />
    </svg>
  );
}

export function MoleculeIcon() {
  return (
    <svg
      className="absolute bottom-20 left-10 w-48 h-48 opacity-5"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="15" fill="#d4af37" />
      <circle cx="50" cy="60" r="10" fill="#d4af37" />
      <circle cx="150" cy="60" r="10" fill="#d4af37" />
      <circle cx="50" cy="140" r="10" fill="#d4af37" />
      <circle cx="150" cy="140" r="10" fill="#d4af37" />
      <line x1="100" y1="100" x2="50" y2="60" stroke="#d4af37" strokeWidth="2" />
      <line x1="100" y1="100" x2="150" y2="60" stroke="#d4af37" strokeWidth="2" />
      <line x1="100" y1="100" x2="50" y2="140" stroke="#d4af37" strokeWidth="2" />
      <line x1="100" y1="100" x2="150" y2="140" stroke="#d4af37" strokeWidth="2" />
    </svg>
  );
}

export function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#162D6A]/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

export function PeptideChain() {
  return (
    <div className="relative w-full h-32 opacity-10">
      <div className="absolute inset-0 flex items-center justify-center space-x-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#d4af37]" />
            {i < 7 && <div className="w-6 h-0.5 bg-[#d4af37]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
