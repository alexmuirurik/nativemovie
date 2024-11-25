export const commonheader = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmYwZDVhMGFkZGRlMGVhZjNkYjVmZGNmNDZkNDY2NCIsIm5iZiI6MTczMTU3NDczMS4zMTA3MDE0LCJzdWIiOiI2NGQ0MWNjNmJmMzFmMjAxY2E4YTRiODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XjZdD6mI75cBxL7z-iHNv3iKy5uy1AQ2xyT1-z8_Rzk"

export const categories = [
    {
        active: 'movie',
        link: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        title: 'Upcoming Movies',
    },
    {
        active: 'movie',
        link: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        title: 'Trending Movies',
    },
    {
        active: 'series',
        link: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
        title: 'Airing Today',   
    },
    {
        active: 'tv',
        link: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
        title: 'TV Series',
    },
]
