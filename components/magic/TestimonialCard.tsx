'use client';

import Image from 'next/image';

// No external deps — pure Tailwind + brand tokens.
// Ironclad brand: bg #1C1C1E, gold #D4A853, off-white #F5F5F0

interface TestimonialCardProps {
  name: string;
  location: string;
  rating?: number; // 1–5, defaults to 5
  text: string;
  /** Optional avatar URL. Falls back to initials. */
  avatarUrl?: string;
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? 'text-[#D4A853]' : 'text-[#3A3A3C]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ');
  const letters = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0][0];
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A853] text-[#1C1C1E] text-sm font-bold uppercase"
      aria-hidden="true"
    >
      {letters}
    </div>
  );
}

export function TestimonialCard({
  name,
  location,
  rating = 5,
  text,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#2C2C2E] bg-[#1C1C1E] p-6 shadow-lg">
      <Stars count={rating} />
      <p className="text-[#F5F5F0]/90 text-base leading-relaxed">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#2C2C2E]">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
            width={40}
            height={40}
          />
        ) : (
          <Initials name={name} />
        )}
        <div>
          <p className="text-[#F5F5F0] text-sm font-semibold">{name}</p>
          <p className="text-[#F5F5F0]/50 text-xs">{location}</p>
        </div>
        {/* Google Reviews badge */}
        <div className="ml-auto flex items-center gap-1 text-[#F5F5F0]/40 text-xs">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Google</span>
        </div>
      </div>
    </article>
  );
}
