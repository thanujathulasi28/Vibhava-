import { EventData, ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  { icon: 'celebration', label: 'Decorations' },
  { icon: 'photo_camera', label: 'Photography' },
  { icon: 'restaurant', label: 'Catering' },
  { icon: 'meeting_room', label: 'Hall Bookings' },
  { icon: 'face', label: 'Beauticians' },
  { icon: 'shopping_bag', label: 'Shopping' },
  { icon: 'card_giftcard', label: 'Return Gifts' },
  { icon: 'style', label: 'Cards & Banners' },
  { icon: 'hotel', label: 'Guest Rooms' },
  { icon: 'movie', label: 'Reels Making' },
  { icon: 'add_a_photo', label: 'On-Spot Photos' },
  { icon: 'storefront', label: 'Stalls' },
  { icon: 'event_available', label: 'End-to-End Management' },
];

export const EVENTS: Record<string, EventData> = {
  wedding: {
    id: 'wedding',
    title: 'Weddings',
    subtitle: 'Your Perfect Day, Perfectly Planned',
    description: 'We believe in creating unique, personalized wedding experiences that reflect your love story. Let us handle the details, so you can cherish every moment.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR9ix_Zyy9tHeVJMVxZZIeXUa2EFGdip-Citz0y8QgEohnJzw-RhBnFPp4-gmTgCGlqxSSYjgKD_AEGGWWSl-__nqbC1o2GXKwpicuhHpOH0N9JKI8IVZNCAMqvLtsZQ_JO5mgtnFSGgS38Zuh_JC1LJpXQfXL64r47F6iyXbsPLfu1uyt78MdaNrDXnezPvbxIbjf-9QOW7ZeEI8KNF9y743BERgO3dLJt1DJ26qPbfJ3WILw0lkIRxsgw3nD5qCO3YfgazS58dE',
    themeColor: 'pink',
    font: 'epilogue',
    type: 'scroll',
    gallery: [
      {
        title: 'Regal Mandap',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyyvRB6toINgdDrkMrbbr2eDvU4LOl2GJl47lJ2nZ_Gg5bqzDfgrZNhUUFAqLXQMlOEZ19Hs1-TAolSpa2YR09SfR9jk8kch4Kaxqgu3RvjXMMRiF1Tj5-U4tLHHcWNEZt0npN6KR_czG41bXpbx2vsChLaXpjBLfl9Ceuf9HQ8uM0RjxZNb5p0zQhdsL4s8bhQsY3D-C-LVYXrNyrKgCcXfqGFde_4Z1HxmCJapEIX7L5tCZm8GX2uXDowrI8GGxcr6qwdeNbNiM'
      },
      {
        title: 'Marigold Magic',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRV3eAtbDRQnN_udeIZ_mJr4-Pix9qOKzqKh09gxBTQQ8bH4fhGW3ktrLlZn9qLmK81muD85rzDE2Tb4E4DCetTsY3tLHU_w6VHAWDHB4saSG7yghr9OpnAbfW0SCtvfowz3L6V0fHYcVzzirbzGuJRXhwSkNNFoT5Kd89QGGBCuFch_B_cVW3S3nfuVYtdMznePD_jxLWK-PE_yqdlUhVsv22PMxK43940YQ1RdLVM-5IrAlAhZtWLHxwPtRz6tu2rtjZLw1tQ-Q'
      },
      {
        title: 'Ivory & Gold Soiree',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZie52aTU-5_2Vwyz983TBLMyO8B_OB5SZzBphGDstT_b6B3Nfbofs-4zdoC5mYjKV_EtiwAtdjijPqWcmEKVW9LA0QZvYyiHZAwS0PWyQC6yfsh7YT2eSg4D0Y2X24fwdmwZWOQD2z5iGxjgn7MN5IvijLSuTfjl7Lx0sD8efPo1hdeHD15nZ06aCnFn88QqvuaRLZTGANllCHSXYobeLrOoMw9wZpUuNpyihXttUr-sIXo81Bq-4NF1yqZVlsBXq9dc4ERtccqk'
      },
      {
        title: 'Mehendi Swing',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo3w3qGrXmIoTG0Rbz0LFkhIovThd_6SP3liL0OWeJizG-OhIQeeY2VqWLYwe73m372L9ZS4C0_OjrJbQWs3LR-inPxtnxd15ZnueylyyNIWGAAWNmsqaqXq72FzGHrK5I5hcNRnecLRF-ymk0PqoOG87ofaV2QjbkfI0EqTpq3kz7lfO2fb6eUcuP6L2z1YhK9GNwhtdDuxWLxGbkqlcUMT1HBbFYBauH0CZxf0ziGA-tuDh8iBKrP6RGF7ULlMoIBb9gBWXmc28'
      }
    ]
  },
  birthday: {
    id: 'birthday',
    title: 'Unforgettable Birthdays',
    subtitle: 'Crafting Your Perfect Celebration',
    description: 'Share your dream birthday ideas, we will make it memorable.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZUckjAdEONqOw-hqDkyP5jKhRIt1PxzhqRgHhJWh2rfHfCXZvhhHjW0zW--YE5k4dFAgx__HSdz4YqWJ5bqtLDZsPWtrTvvkDgOVoA_iHHMdqLk5-HBLAHpSqkSUgbGjx0DJ4xyAZUp8cwI2_ZV0jMrYtfCY-4F8koG7DwtNWKbjMOw1Opx8vjvVQtWMhT365zutLW8At2hSo0lL0KG7ASnntfi77Lt6lg2qn8akJmpG9bP3k5Ui3W--TvsiAElaly8-H7_TRg8w',
    themeColor: 'red',
    font: 'jakarta',
    type: 'scroll',
    gallery: [
      { title: "Kid's Parties", subtitle: "Fun & Whimsical", image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZe2Fur8cFSm9yI6U0ss24BSDjbr25mEIDiIxbjaVVt83xrFwOXo_DCC7DGf908dG5ljvr4gCbjyNWAImHXp-ZPie5JOtsaLx9WRIECQS1y9w49FdYWaabhfS0qNT8V-JIvrV9iu8HkMTwjghcipriZtNBlJweECRRDU3f1HGLkrQT1-v49A0PT4Qe2QVzOscfJ8YKiSUlGdjlOcxDC25yq3Hnxi060fvOv45HGLb-7Ww7lakWyYyv_f8Mxt8cQEvNXgpheyVfXGY' },
      { title: "Candlelight Dinner", subtitle: "Romantic & Intimate", image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHtdGMXzr2niGSSYMfYxDS5FsJj9rQEPo___-AB5UkmSGy-uBkiNWEoZTwZWNLLa9njuuCaZ8q_0yrnvzrZ-YxkHB4AGmRwqxk6bhkeZcB1SIkzxQExNMEmoVaET3qCltwxdGH67lKFQ4oPm2MADUYwJvkZR7H2gTnnjEiLeEPQRFA7vv5vua3AGMBiFdk7J-AzHsEvnPZN136_4dod-d0h49B423svx1huQAIXuRGOLhTMHTGCMZoHmdg0ox1wiCocz5RLKpt1WI' },
      { title: "Rooftop Celebration", subtitle: "Chic & Modern", image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfsmPcrzc-6nlG-61WpjuBjiclHfJ-VdSi38pVwFTpLfgg8nI8e3nZ18pGeEBurDvjg4kSHPx1ZYcCYctXAb8Egm7beYXslnMs6dK-RmjOgatB_Zx_neJerDikviDgVHjU-IXBsc2cK4Lg4oWOXZb9a8gnW8Zp-yDRTeJZFmOU7CYbbXiMy5oH1eKDN0lTMbQgfvd_Nl0T6B1FOEKPp_6qlmXl8z-KOqe4i88CEWzzmTjWByyyvJoOnrUVNUYQD_Y6bwmCqsRuT-8' },
      { title: "Themed Parties", subtitle: "Unique Experiences", image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjl99OPBbusGNt4Wm1UE1XpunKWDI-HAj4vWV3bE4sgO7JLYqqGeJJujZ31qor4QZ5AtVEFPo3YNwVPBSkeAI_Q5d1f_JsENmPCtxxMaJ4VXK0uo3uAB0H34Vx1-XhrYBocrwmzUW5qgYTzX7qOnWB_a_3fQf4Y1VzncNNjQExM-vOqX-Hequ2A7lBQ4FyfUR1eh2QWu0guqRpxWPLi-Y7jnmptgOZ6Vq7h34stVt86DaBzf16qSykYgY7CdQLZHpS-nAaDA0IfM' },
    ]
  },
  housewarming: {
    id: 'house-warming',
    title: 'Celebrate Your New Beginning',
    subtitle: 'Elegant House Warming Events, Crafted for You.',
    description: 'Share your dream house warming ideas, we will make it memorable.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyOS3dIPp8C3Ntkzi6EP74l95ZYqNldU8uKhIwPTKXQc--zQTxZpxqtddf1G4QWyTTV6u6d1HZf-IISOnLwVcu1gio2kq7TgiJIw7016Kp62ZyNuZfajBAeQ698oED4HtlJSfPmD-b745mG-YskWN7kxmFGp6fMqad_KOxVBYcZ3UyFmIUnA55618ZAyi9Acotg-KHkoUDZflFdRrbK0HmbunBQKfrDEp0HzRYy-s_JPMVBFMKHfUeqiyoWI_FNt_VwaNTI_FoUm0',
    themeColor: 'gold',
    font: 'jakarta',
    type: 'scroll',
    gallery: [
        { title: "Grand Entrances", subtitle: "Welcome with tradition", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8LOkM3vFZMLAfjQjudlrIWuZjnBmCKzQq8ykjd6GBqXfIY9sphdu7SRLmrnVr5IZXiYYB9_fqCnDTjivPLcJm1YSulU4QYlvekbL5k5hsDb4q-SCOF4RlzbI0eMfwRekF1kip0gqgPtaQe9xNt_UyYHtG41QPKs_SQuAiyrioBRL7KceMWBa0m27kZZIxke9YTJZ4AoSaXovOf9urNJfn_ZXXYzk0iaqi16KmiFUhmGqYHEDnd2wcGHht8wW0Jg1QxOyi5ikw9c" },
        { title: "Floral Artistry", subtitle: "Auspicious and beautiful", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTcUj_B5NAh1e0USn-FPtRD5HRYWk2Q3Lje0HU-D79Aff4Y_pkcf2J42qAld9rC04wQoBwRbtDIHeYQAiZtMQ8yrVG5YeY7JNF0tqdIm02Imibcx2a4eZR_qnPw_-dvQhoaRFwiseJFwCpHyOJIVBnBhDYlmBiley8NGIvMQZzisaopc0z1gJKP2hqMxs2_mZFXAWriiNa8wMF1ilQF6ivqlb0LK4XSX8ezEsyPGkCreDWmZQ82-N5r7qBKw0sBV2_uGByyiNKyPY" },
        { title: "Interior Elegance", subtitle: "Transform your space", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAhQAbUJK2gLnSB9kZkriyHxy9y-wdRyeR_imC4oFHn5e08jCt9ugo5S8jbU7K0wjDpPLQo3dEXxXLxldnf-UB_r7NdpO5bmBLMBng2ukWwU1b0Ymi5_K6GbVaaWnULZm8nRaZ6BBXyCvfSg73aRaYsjp0JHoyXrfHWW67h1l7uY9jg0At8rESTOKt8Np86t5swxuqX9IZrMlseJ5eRovmmpl5Oy_l76G0Kd7Lg2z7LXZ7ssHh7L71ayVkvvH470TFJu1WV9A7NBA" },
        { title: "Sacred Spaces", subtitle: "Blessings for your home", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkrzFGqXtSojqYrqeuvLQqyvwYdtGHrWuQgFy-jqY9DD-f8XD8OCyh-Ny2Tv3g3QJ0yPa_Yq7hNkS91StHnW6xLajC6vAwOHn17pmfNXxisLLOGuoP4Ptj-IO8PeOVmUxXWKD6Mvy3wvP5id-C2ysGiYiVyKs6rHsJ8meAeuwHyE40USOiGRB36NOCtHa14miDzVX_4dvSIVx0DD-TvCGYSnIrmvjw6XCb-oynO4Jl_vbmmuU2BHGxnzw-S18Cbx8TqloS7Edw02c" }
    ]
  },
  puberty: {
    id: 'puberty',
    title: 'Puberty Ceremony',
    subtitle: 'Embrace Tradition & Joy',
    description: 'Celebrating a beautiful milestone with grace and elegance.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIPKwpJyq7tPA7NaJGO9X3WJornpbWurDNjV8QTtQynVsW7VvRkusDKLjx33LzB3E4_Ltmqs9WUpQPKqoci0d39VMaV4nFlTDuWDR28bklju_mvIrKbSwa32XPEzywrY2m4FnvlOxn06JU_WQbfIAzpoxWjfVeKmTgRj62qJrlafpLQQ0sEgX9qZym_MBpLEdaNNs-5JUDBIoV7fnVoJaVA8sMGBc4nckTi7uJdpqQJ2eLz9r2Ert7odZbduQ0yvs4lVya0QO1UA0',
    themeColor: 'gold',
    font: 'jakarta',
    type: 'scroll',
    gallery: [
        { title: "Banana & Marigold Arch", subtitle: "Classic festive entrance", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO7x2fcD9SvnvCFmWvZHRi_sIj1R7sKqUIaN59tmb-xeif6rJL0ePFBavh1W08nLaFMHWGjKiMmBNerXJtFTBBLTstjQF2ntVcCoS6KRH_O3kK3iXnSs0-mIZ_B6EG5l1K2ADCR3H6YMjEhItQa4aoIBhiE3ngQNYcYVnmp1ghgtpKEIO9ri1CqqGMJSj-PGmUSjr_hjNjjzvWrzoef06sxrc50PVNC45oTsxEypVJ7aVpJ3NUrd_CMf9tjwr5B5nzmvNxRzrH9nk" },
        { title: "Jasmine & Silk Stage", subtitle: "Fragrant and royal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBotPEQU3ygeKZXXIP5oEuRfaXRmUMep2o8Unmw4OgDuvWLx3z948I43zqq4N4MY7XN-ctlarU6HSgamr7L6r-KybcQuftjciHZN1SHa_e9Ugr-qsMhcQig_6RNkpBXT2ABCJg2a0z6LwqSkF5NrFunx8ppn_Dkzp7ZrCRR52yYz9k6zPPCbMr4wNLgRRm63-IwrVqnZvstuNQ3JuJ3hEzOhUr2JmJi27lep_3q6j_h-3TUd-Ey9W-nONyBf-VDzpTRLXHk7oMXz0c" },
        { title: "Langa Voni Backdrop", subtitle: "Vibrant & traditional", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHGv4QrHCUt79kymWolyhrvZzZd-1Nf_7Sqf1DW1XRuqHJVBq0Eu0VTX_WBkocO4rfF9S-s0sCm3aAVeuUZZj2QqIby-v7R_F9QlRfQj32WTENTTNrYivc8CnP5OX805eKhDK9BuaSTVcOagYEvn2Jo6uLpWsk2f-vlYK4CdcvX4vgRC2cqUTuA0yfTKMjHKMCUf-nhgYa09CL06yDOzx9V4Z2vWXTUSVi8lYP7rrum68VgNSbisDBn4qzvOWgHcHcMwW6yu96FH0" },
        { title: "Floral Swing (Uyyala)", subtitle: "Playful & elegant", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqVGcsBLlgKk4gySHmZ569SU1mSLycOfpa3qb2W0kejo3uVE-3SkglyzJjbqu15Lf2Tbb8O5Dznj8vVrVgIp_I7G0ed68O3ghEOBq-Vi0NMo0vW1P14m7RBJcZSLFUbjycbdIxtwplsnKlf48KUYdchqcQM0EYzwtYWnGW_-kUH7GvsZ8fhlocD4sMl7FCZDKQkSXLlfsz-i559w6FNBDz51uCEizglapM3jEDloaTdokyo-0tFj0T8V9_vq3K9zXqGzJXFNF5N2o" }
    ]
  },
  dhothi: {
    id: 'dhothi',
    title: 'Traditional Dhothi Ceremony',
    subtitle: 'Celebrate his first step into tradition with an unforgettable event.',
    description: 'Traditional Dhothi Ceremony',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Zzay2VlV-xQiqkw1SfSq4xCO1mHA0yEl0dsdvTzetQAeWmsoPuw0kmvkNd0SKGiBIMVU_mPIhUIfcdYhuJMjNy6d5p2B_mJyvKUu29ByUej7vtbv4pmC491novyUzNQaJsymG1zpYRKqR8A10_qkAp6R-E5tTOzsfmO1BmC9vjM3OKZj1l-wyE1zQEN8AG2IG3uX0XvkOfsAbiTGTpH-T3QKcAFoGgP5eMCHVuAck3Wc2rGOpAl-_FD94Skdoj4G_XIzekoVX1k',
    themeColor: 'gold',
    font: 'jakarta',
    type: 'grid',
    gallery: [
        { title: 'Entrance', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj1zSM1SWbceNuzz6xgxsCUih-7qL4yAzwyLi004QBq3WhE7JTr8v6p5amn2kJTynfY55KkETe1gG2wtKBFHxjPa7rP4aSlAdp47ebvVDOofoIvAZNzTJXo7FvTywc-TlKyV7lAM3H4t8FF4okWgtq0jAwS1g_ficmGCjuHgW1XOnTm7quxwX8BcSs8rB6H3FtfPETAWnaUGCAfDEnzGGQREypmo-aUPHogMr1FiK1Yu7Iyh-St5kHDeTud-MgEEL1Uh293mJ_6u8' },
        { title: 'Stage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkQoWHh4dFZTipIyWOpEtjm1yKPbAn-NRAJnEGluKIecqy2uaWTbZNceMpFK9YIiMcG_ZN2SYUKmTRXJ2HXVrlDEfSv4uRCcT-Y-h9wh2yma1ujene-JtgGAnzzamhldrl2fhNLB5ENccFhpJqad5R7sjRbbmBLlk6uHKsK0p0KbrAsfysgX6ddl-n9s7WWyTR62kJivGpok8_6JMMWuZwI72IRN5ToDbsZAXDpIwW0iGM7jWYssakam9W1kH8vS4A9mHI1DAv8vE' },
        { title: 'Seating', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZ43ocPh6bsMEs16x5kAmyW85rZPSEgPwTDxhd-Cmf8fl7gwRJIad8cXvnjGo0z6ET1BaNnlN0PrikLZrWKv8W-FBQVg-zExUdCj0PK2DC3yulGjdECkX9vQH3G3COtedT14BgFGFrucL-GaVWCDulUP7PEeORPcjGoBOXmGmsEGZgM3vDgDdr0qUQBpr28-vhrn_h_sGVd4MM0iYFBKi4WvATGZGPAAp5Rs43KAg6AziGhABEQ6kscKw1SgoZ7zEn1GD9q72p9Y' },
        { title: 'Details', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZZHxmbhFDM8TzCy2ySDhphK4tojApLV3vF3cfCGIx7Sf8fZ3C2j68CNLXE1sOfDzYxp9zVh-YZtvZw_Ok73sjpMkqOh7DRz8_uv_XMkwDhbuSB_zIp64-SWN3CDjt4OsoBu6VLxBjcT_OlDPFvs8KLyih1YHINktt-cY6-JWs0FVK8xQKv0yfARtEZmxk9YZ32sTt6x-_ch3_lTsVIvk8kPv6DLd1IG_9DA5zUC7p_N4fdqtMIXg4t76X4u4FkyniLzVUyJRCBA' }
    ]
  }
};
