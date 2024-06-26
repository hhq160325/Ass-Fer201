const OrchidsListData = [
  {
    Id: 1,
    name: "Phalaenopsis",
    rating: 5,
    isSpecial: false,
    image: "/asset/images.jpg",
    color: "light mushroom pink",
    origin: "Australia",
    category: "Cymbidium",
    habitat: "Native to Southeast Asia, thrives in low-light conditions.",
    description:
      "Known for its broad, flat petals and long-lasting flowers, the Moth Orchid is one of the most popular and easiest to grow. Flowers come in various colors including white, pink, purple, and yellow.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 2,
    name: "Cattleya",
    rating: 7,
    isSpecial: true,
    image: "/asset/gdgs.jpg",
    color: "light orange",
    origin: "Australia",
    category: "Cymbidium",
    habitat: "Native to Central and South America, prefers bright light.",
    description:
      "Famous for its large, fragrant, and vibrant blooms, often used in corsages. Flowers are typically purple, pink, white, or yellow.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 3,
    name: "Dendrobium",
    rating: 5,
    isSpecial: true,
    image: "/asset/dg1.jpg",
    color: "yellow",
    origin: "Australia",
    category: "Dendrobium",
    habitat:
      "Found in diverse habitats across Asia, prefers intermediate light.",
    description:
      "Features tall canes with clusters of flowers. Blooms come in a wide range of colors and can be quite long-lasting.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 4,
    name: "Oncidium",
    rating: 5,
    isSpecial: false,
    image: "/asset/dg3.jpg",
    color: "white",
    origin: "Australia",
    category: "Sarcochilus",
    habitat:
      "Native to tropical and subtropical Americas, enjoys bright, indirect light.",
    description:
      "Recognizable by its spray of small, dancing flowers that resemble ballerinas. Flowers are often yellow with brown spots or markings.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 5,
    name: "Vanda",
    rating: 5,
    isSpecial: true,
    image: "/asset/dg12.jpg",
    color: "pink",
    origin: "Taiwan",
    category: "Cattleya",
    habitat:
      "Found in Southeast Asia, thrives in high humidity and bright light.",
    description:
      "Known for their vibrant colors and large, flat flowers. Vandas are highly prized for their intense blue, purple, or red hues.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 6,
    name: "Cymbidium",
    rating: 8,
    isSpecial: false,
    image: "/asset/dg13.jpg",
    color: "yellow",
    origin: "Taiwan",
    category: "Cattleya",
    habitat:
      "Native to Asia and Australia, prefers cooler temperatures and bright light.",
    description:
      "Features long, arching sprays of flowers that can last for months. Flowers come in a variety of colors including pink, yellow, green, and white.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 7,
    name: "Paphiopedilum",
    rating: 10,
    isSpecial: true,
    image: "/asset/dg9.jpg",
    color: "pink",
    origin: "Australia",
    category: "Cattleya",
    habitat: "Found in Southeast Asia, grows well in low to medium light.",
    description:
      "Notable for its unique pouch-shaped lip, resembling a slipper. Flowers are often mottled or spotted with a wide range of colors.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 8,
    name: "Miltoniopsis",
    rating: 7,
    isSpecial: true,
    image: "/asset/dg16.jpg",
    color: "yellow",
    origin: "New Caledonia",
    category: "Sarcochilus",
    habitat:
      "Native to Central and South America, prefers cooler temperatures and moderate light.",
    description:
      "Resembles pansies with their round, flat-faced flowers. They have a sweet fragrance and come in shades of pink, white, and purple.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 9,
    name: "Brassia",
    rating: 5,
    isSpecial: true,
    image: "/asset/dg10.jpg",
    color: "white",
    origin: "Australia",
    category: "Vandas",
    habitat:
      "Found in tropical America, likes intermediate light and high humidity.",
    description:
      "Named for its spider-like appearance with long, narrow petals. Flowers are usually yellow or green with brown spots.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 10,
    name: "Zygopetalum",
    rating: 4,
    isSpecial: false,
    image: "/asset/dg6.jpg",
    color: "pink",
    origin: "Australia",
    category: "Ascocentrum",
    habitat: "Winter and spring.",
    description:
      "Zygopetalum orchids are known for their bold, fragrant flowers with intricate patterns. They typically have green petals with purple or maroon markings.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 11,
    name: "Epidendrum",
    rating: 8,
    isSpecial: true,
    image: "/asset/dg16.jpg",
    color: "pink and red",
    origin: "Australia",
    category: "Dendrobium",
    habitat: "Throughout the year.",
    description:
      "This genus includes orchids with small, colorful, star-shaped flowers. Epidendrums are hardy and often produce clusters of blooms.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 12,
    name: "Masdevallia",
    rating: 3,
    isSpecial: true,
    image: "/asset/dg7.jpg",
    color: "white",
    origin: "Australia",
    category: "Dendrobium",
    habitat: "Year-round, peaking in fall and spring.",
    description:
      "Masdevallias have unusual, triangular flowers with vivid colors. They are often found in cooler climates and have a unique, striking appearance.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 13,
    name: "Ludisia",
    rating: 9,
    isSpecial: false,
    image: "/asset/dg19.jpg",
    color: "yellow",
    origin: "Australia",
    category: "Sarcochilus",
    habitat: "Winter",
    description:
      "Known more for their beautiful foliage than their flowers, Ludisia orchids have velvety, dark leaves with striking veining. Their small, white flowers are a secondary attraction.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 14,
    name: "Catasetum",
    rating: 10,
    isSpecial: true,
    image: "/asset/dg2.jpg",
    color: "red",
    origin: "Australia",
    category: "Sarcochilus",
    habitat: "Summer and fall.",
    description:
      "Catasetum orchids have unique, waxy flowers that can change form and color based on environmental conditions. They often exhibit both male and female flowers.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 15,
    name: "Coelogyne",
    rating: 10,
    isSpecial: true,
    image: "/asset/dg20.jpg",
    color: "yellow",
    origin: "Australia",
    category: "Sarcochilus",
    habitat: "Spring and summer.",
    description:
      "Coelogyne orchids produce elegant, fragrant flowers with delicate petals and lip structures. They often come in shades of white and cream with intricate lip markings.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
  {
    Id: 16,
    name: "Bulbophyllum",
    rating: 10,
    isSpecial: true,
    image: "/asset/dg14.jpg",
    color: "white",
    origin: "Australia",
    category: "Cymbidium",
    habitat: "Year-round, with different species blooming at different times.",
    description:
      "Known for their bizarre and often malodorous flowers, Bulbophyllum orchids have a wide variety of shapes and sizes. They are one of the largest genera in the orchid family.",
    videoUrl: "https://www.youtube.com/embed/Bj9nvQR_uFY?si=msu4oqiMB6SI_o8N",
  },
];
export default OrchidsListData;
