import { useState } from 'react';
import { Car } from 'lucide-react';

interface AutomotiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function AutomotiveImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}: AutomotiveImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#15151B] via-[#0E0E13] to-[#1A1328] p-6 text-center ${className}`}
      >
        <Car className="mb-3 h-8 w-8 text-[#8C4FF4]" aria-hidden="true" />
        <span className="max-w-xs text-xs tracking-wide text-[#92909D]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
}
