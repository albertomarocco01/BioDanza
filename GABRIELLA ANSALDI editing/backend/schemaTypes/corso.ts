import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'corso',
    title: 'Corso',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titolo Corso',
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
            name: 'discipline',
            title: 'Disciplina',
            type: 'string',
            options: {
                list: [
                    { title: 'Biodanza', value: 'biodanza' },
                    { title: 'Metamedicina', value: 'metamedicina' },
                    { title: "Medicina dell'Essere", value: 'medicina_dell_essere' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'schedule',
            title: 'Orari / Programma',
            type: 'text',
            description: 'Es. "Tutti i giovedì dalle 18:00 alle 20:00"',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descrizione del Corso',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'contactInfo',
            title: 'Informazioni di Contatto per Iscrizioni',
            type: 'text',
            description: 'Inserisci le modalità di contatto visibili agli utenti (es. Telefono, Email). Non inserire link a sistemi di prenotazione automatici.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'discipline',
        },
    },
})
