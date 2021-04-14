export interface ICard {
  id: string
  cover: string
  title: string
  description: string
  href: string
}

const mockCards: ICard[] = [
  {
    id: '1',
    cover:
      'https://s3-alpha-sig.figma.com/img/7a1e/9b52/6c5900b221e01f344b7f1b9d8e15cb72?Expires=1619395200&Signature=aHAUNmn89avW7TBa8MX-RIaW8ZHdUXW6ApRGH1FFJW5Fwf44Yjj-oCsWHNcuxBla6l~N0eGRF8H1N7afszK2rg3oox7-3VBlU8u59x76OlpQz0X8yVHlN1WlVUa-PUbe4ja5KS7wlgDugZx3kAoPjAtIlSIW4yJK7FsRpi9x6B-hqqCFDZYLQzAhw7Ko~6NpMH6tBrKyIhIahfACR0UqSTK0lQDVfvmuPcCWoDrPulTpNfYf6VIuzsBBYxxb6nj0a5xTV1dXw9MnHUHVCOhwQNaMxnfFxzEsrg7Iz62GpKnXc-k46rszS0hx-xMrtyG~A2uVqGviAemX6lCOhlzywQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Financial transaction',
    description: 'Description Financial transaction',
    href: '/transactions',
  },
  {
    id: '2',
    cover:
      'https://s3-alpha-sig.figma.com/img/0a73/1b8e/94c6f644d0e1e0fa9edf200719b0f850?Expires=1619395200&Signature=cINM0MC32YL-xTIktKOM~-h0dvYKXwT3iPZCgHZcz8n~Xo25oCLo4rb4HzQOjnHtB7VrD7glaei~A286a4jn4PwzfSghVXKiKF12SLMLl~RSrugn~hDWi-qAoYHZl39VDDh3qQzXbY0Bl6Iu60~U0RTjbFOwan~eKcVbbeu9BiQnt5x81RQjypzZSvf4dA5hdHiPhwHwWetzdHDNC1RdsW0sGbRwTFckH3n7VBVFmk~o4LUOc0Z-5tcZn9uAkPkY9tZeemzGKd1QfS1IIHCTlmYhXNQflewQagnOQgC1zM51gHsR3XckCYUkV4P6hU4juoeDh-HGnpR5XrVskXD8fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Managing authorizations',
    description: 'Description Managing users',
    href: '/authorizations',
  },
  {
    id: '3',
    cover:
      'https://s3-alpha-sig.figma.com/img/b530/aeea/fc4e98c8b545b6b50cf9b952923c1986?Expires=1619395200&Signature=K6cYlhWHMr8L1LdF5xexv1M0maFmYh81ep1WONPczzt7xb7I5MUE7HadyNTPQVD16EOE3FFG2PfCw6rdakLsRzg5Z9tUMA3PWGadiSMX7iO917-fhlWsJF29esDHY~UvxS~UuxZU-t~Y7RGF3kVomkRcX2Im2J9L0BgsrNoWmB~yOuWwuCHzT2q~qIeoj9wnRT37Detc67Sj14PLAtD0gBIXOxP8kRlGf3JZFEVR2au2MfUDjxP~MTXJ5d2NqUVHRsjeEtgyTEYoBkYpLLSxsr7Lt2p7fZlWH-H7VZYdY3gb8AWFZap5qOChsDb0qAq04ud3qa5imXHQb8blcOb3NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Managing documents',
    description: 'Description managing documents',
    href: '/documents',
  },
  {
    id: '4',
    cover:
      'https://s3-alpha-sig.figma.com/img/c335/e7ff/ec7ce61eeb89dbdf80c573ae44786192?Expires=1619395200&Signature=CmAs5tBSQaA~sV6WAhlPSNlxhvUaAv1XA3rEW3~agyezRgHZ59-CIl7DwnOz7AHMy-oQlQdjUqYvCUze1BI4DBr0NSV4xhztMCCorWDXJ95At8-WVD0YdW9uLDNrNqIfH02WSw4JKQNavI7Vm-S4m4BZ~G1QHIvUfYcvn1bF1fPxLkI117P201m51W9VUU2lHfxJC7m1D2ULsTUihHtoE80fwBPehF2ltx7YLkOnxVGt1SEKlDMmgDQfmwpt5EWJuqMwSnFWspY--b8UK9p~zFI-6782jPzhUHWgaYx1xFB6Xwg0xSXztccE7AeYA8GzUdgQyJN6fZN~ORYXICQVug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Managing POS terminals',
    description: 'Description Managing POS terminals',
    href: '/post-terminals',
  },
  {
    id: '5',
    cover:
      'https://s3-alpha-sig.figma.com/img/f2e5/4ec0/9638a111456e5fffd2955ca90ece6580?Expires=1619395200&Signature=KK90TZChZP4EuSwC3ArkzwNuvu2tMwokm5HMqpobfmbZJW3CAll3AKm6VOHEscn1Vq98ltgoXTnhIgfiJoa48nBHjJCdAJvy7IC20KfROl5KEn24ufg2Rfs8pj2YzIOGY0R4Y2~B1RG2BgYlgguawHWpa90Ol54733ENyUtcdxpzXkHTDd2GZLjP8wip9DKl42uubdi9-6p1p5NEB~rNgpDsbVRKxquVnvzSYDavMP4b21E7hcS5b8Na~makuiDEHYVsXQyCU7WaScEKniHObolfdamQ9IoUAtX5lejkZiIE-m3BB2WCyhP8NL23bJPaqGkpLBHkhxf1u8~DyIRezQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Documents signing',
    description: 'Short description Documents signing',
    href: '/document-signing',
  },
  {
    id: '6',
    cover:
      'https://s3-alpha-sig.figma.com/img/b9c6/3311/b1a342853337de10bd428c6905549ae2?Expires=1619395200&Signature=G~4i-XQyGP-R4qrRubkhNB5PMkgykhxbAt-1tRWwCMciuzHDNvGcswnLM6o~2mG~LpkgD2507DmnytcqlUzVEMmdye-AWLHxgQ62kNbaxANvPCpvRpfn06DFD~yd2KEfSe2kuiExDwBI2szawoGOg~5T0OMfJ44A3q4KBR27dVooekrxn-YhK4BiTB6~ZWcwod11H6OEUmPzhxpd6UsyOeThaRfbzFVeP9xYYUn-Rw8Pf~7JU65GvFOQ4be~x-1b1yjMwVTwEjXqAuSn7ig3f1ZCWoJxpkaeSQ~UJXRntV2bpmaBArFqSEAOa6hzI1I6GxGfajLHCVuEkSU151TZBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Managing Business Cards',
    description: 'Description Managing Business Cards',
    href: '/business-cards',
  },
]

export default mockCards
