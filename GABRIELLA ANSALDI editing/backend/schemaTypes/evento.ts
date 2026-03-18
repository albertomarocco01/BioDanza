import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'evento',
    title: 'Evento',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titolo Evento',
            type: 'string',
            validation: (Rule) => Rule.required().error('Il titolo è obbligatorio'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Data e Ora',
            type: 'datetime',
            validation: (Rule) => Rule.required().error('La data è obbligatoria'),
        }),
        defineField({
            name: 'location',
            title: 'Luogo',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descrizione',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'externalLink',
            title: 'Link Esterno (es. prenotazione su altra piattaforma, acquisto libro)',
            type: 'url',
            description: 'Inserisci un link esterno se applicabile (Nessun e-commerce interno)',
        }),
        defineField({
            name: 'contactInfo',
            title: 'Informazioni di Contatto',
            type: 'text',
            description: 'Modalità di contatto (es. Telefono, Email)',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
    },
})
