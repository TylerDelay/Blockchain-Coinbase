import { SanityClient } from "@sanity/client";

export const client = SanityClient( {
    projectId:'wmv44rtd',
    dataset: 'production',
    apiVersion: '2021-04-12',
    token: 'skP9gAvImq35a6FuBo51LFinJl4C20rhRB8ZGeKkaxNt5CBhsXAUYqrrvqdsZj5WwyZ4DkQ8x1J2tzjZocg9rErnQb8oGrXWlyAQCfxrGDdYLcZ9YYPO4nyKarBXHEMZl2m43NbehcapCLPGx56NMMUc9DIPAFGXG3GmuELy9zD3dF26wOc4'
    useCdn: false, //ensures we get fresh data
})