import React from 'react'

const DestinationItem = ({ destination, removeDestination, toggleVisited }) => {
  return (
    <div
      className={`p-4 mb-2 border rounded-lg ${
        destination.visited ? "bg-green-200" : "bg-white"
      }`}
    >
      <h2 className="text-xl capitalize font-bold">{destination.name}</h2>
      <p className="capitalize">{destination.country}</p>
      <p className="capitalize">{destination.description}</p>
      <button className="mr-2" onClick={() => toggleVisited(destination.name)}>
        {destination.visited ? (
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
            >
              <g fill="red" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c2.017.143 5.434.323 9.929.323c2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0q-1.111-.041-2.036-.09a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6m-5 6.828l-2.492 2.492c1.93.097 4.462.18 7.492.18s5.562-.083 7.492-.18L29 12.828V8.62l-.302-.08C27.656 8.276 26.07 8 24 8s-3.656.276-4.698.54q-.16.04-.302.08zM30.148 9.01l-.002-.002z" />
                <path d="m24.288 28.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28q.125 0 .247.031l.008.002zM25 30.341l5 1.488V40h-5zm-7 1.488l5-1.488V40h-5z" />
                <path d="M9 36a1 1 0 0 0-1 1v3h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6zm33-1a1 1 0 0 1 1 1v3h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm3 1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5z" />
              </g>
            </svg>
            <p> Mark as Not Visited</p>
          </div>
        ) : (
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="red"
                d="M18 17q-.633 0-1.066-.434q-.434-.433-.434-1.066t.434-1.066T18 14t1.066.434q.434.433.434 1.066t-.434 1.066Q18.633 17 18 17m-3.5 4.5v-.575q0-.85.975-1.388T18 19t2.525.538t.975 1.387v.575zm2-9.5h-1V7q0-1.506-1.044-2.503T12 3.5t-2.456.997T8.5 7v10q0 1.412 1.044 2.456T12 20.5v1q-1.894 0-3.197-1.303T7.5 17V7q0-1.894 1.303-3.197T12 2.5t3.197 1.303T16.5 7zM12 9.884q.778 0 1.331-.553T13.885 8t-.554-1.331T12 6.116t-1.331.553T10.116 8t.553 1.331T12 9.885M10.116 16q0 .778.553 1.331t1.331.553t1.331-.553t.554-1.331t-.554-1.331T12 14.116t-1.331.553T10.116 16m1.88 1.116q-.504 0-.807-.348t-.304-.764t.308-.768q.307-.351.811-.351t.808.306t.304.806q0 .417-.308.768q-.308.35-.812.35"
              />
            </svg>
            <p> Mark as Visited</p>
          </div>
        )}
      </button>
      <button className="flex gap-2" onClick={() => removeDestination(destination.name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 26 26"
        >
          <path
            fill="red"
            d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
          />
        </svg>
        Remove
      </button>
    </div>
  );
};

export default DestinationItem