'use client';
export const Title = ({text}: {text: string}) => {

  const words = text?.split(' ') || [];
  const firstWord = words[0] || '';
  const restOfWords = words.slice(1).join(' ');

  return (
    <h1 className="text-4xl lg:text-4xl font-bold tracking-wider text-black font-[family-name:var(--font-bebas-neue)] mb-4">
      <span className="text-primary">{firstWord}</span> {restOfWords}
    </h1>
  )
}
