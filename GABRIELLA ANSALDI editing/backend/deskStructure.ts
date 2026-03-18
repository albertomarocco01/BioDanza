import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenuti Sito')
    .items([
      // ——— SEZIONE PAGINE UNICHE (SINGLETONS) ———
      
      // 1. Home Page
      S.listItem()
        .title('Home Page')
        .id('home-item') // ID opzionale per l'item della lista
        .child(
          S.document()
            .schemaType('home') // Deve corrispondere al name in home.ts
            .documentId('home') // ID fisso del documento
            .title('Home Page')
        ),

      // 2. About & Contatti
      S.listItem()
        .title('About & Contatti')
        .child(
          S.document()
            .schemaType('contact') // Deve corrispondere al name in contact.ts
            .documentId('contact') // ID fisso del documento
            .title('About & Contatti')
        ),

      // ——— DIVISORE VISIVO ———
      S.divider(),

      // ——— SEZIONE COLLEZIONI (Opere, Eventi, ecc.) ———
      // Qui appariranno automaticamente 'artwork' ed 'event'
      // Escludiamo dalla lista automatica i singleton definiti sopra
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['home', 'contact', 'media'].includes(listItem.getId() ?? '')
      ),
    ])