import Link from 'next/link'
import React from 'react'

const CardSeries = ({serie}) => {
  return (
    <Link href={`/series/${serie.id}`}>
      <div className="rounded-md relative min-w-[200px] h-72 overflow-hidden">
        {serie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
            alt={serie.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
            alt={serie.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </Link>
  )
}

export default CardSeries