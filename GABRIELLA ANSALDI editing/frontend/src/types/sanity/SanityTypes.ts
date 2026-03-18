export type SanityImage = {
    alt: string
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  
  export type PortableTextSpan = {
    _type: 'span'
    text: string
    marks: string[]
  }
  
  export type PortableTextMarkDef = {
    _key: string
    _type: string
    [key: string]: unknown // permette link, custom mark, ecc.
  }
  
  export type PortableTextBlock = {
    _type: 'block'
    _key?: string
    children: PortableTextSpan[]
    markDefs?: PortableTextMarkDef[]
    style?: string
  }

// Assumendo che questi tipi siano nel tuo file di definizioni
export type PortableTextList = PortableTextBlock[] | undefined | null; 
// e che PortableTextBlock e PortableTextSpan siano i tuoi tipi completi.