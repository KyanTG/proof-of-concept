# Embassy of the Free Mind - Online Catalog Redesign

## Case Instructions

This project challenges you to redesign and enhance the online catalog experience for the Embassy of the Free Mind's historical book collection. You will create a modern, user-friendly web application that improves upon the current online catalog available at [Embassy of the Free Mind](https://embassyofthefreemind.com/nl/collectie/online-catalogus/).

### Current Situation

The Embassy of the Free Mind currently offers an online catalog of their historical book collection. The existing interface has limitations in terms of user experience, search functionality, and visual presentation. Your task is to create a proof of concept that demonstrates how the catalog experience could be improved.

### Project Goals

1. Create a responsive web application that provides an improved user experience for browsing the historical book collection
2. Implement modern UI/UX design principles to make the catalog more engaging and accessible
3. Develop efficient search and filtering capabilities to help users find books of interest
4. Design an intuitive book detail view that showcases all available information and images
5. Complete a working proof of concept within a three-week timeframe

## Technical Requirements

### Development Approach

- You may choose any modern web development framework or library (e.g., React, Vue, Angular, Svelte)
- The application should be responsive and work well on desktop and mobile devices
- You should utilize the provided Proxy API (See docs below) to access the book data
- Your solution should demonstrate good software architecture and coding practices

### Desired Features

1. **Overview Page**

   - Display a grid or list of books from the collection
   - Show basic information for each book (title, author, year, thumbnail)
   - Implement pagination or infinite scrolling to navigate through the collection
   - Create search functionality to find books by title, author, or other metadata
   - Add filtering options based on available metadata (year, location, keywords)
   - Implement sorting options (alphabetical, chronological, etc.)

2. **Detail Page**

   - Display comprehensive information about the selected book
   - Show all available images with the ability to zoom or navigate between them
   - Present all metadata in a well-organized, readable format
   - Include a way to return to the overview page
   - Consider adding features like sharing, bookmarking, or related books

3. **General Requirements**

   - Clear navigation and intuitive user interface
   - Appropriate loading states and error handling
   - Consistent and appealing visual design
   - Accessibility considerations (keyboard navigation, screen reader support, etc.)

## Evaluation Criteria

Your project will be evaluated based on:

1. **Functionality** - Does the application work as expected? Are all required features implemented?
2. **User Experience** - Is the interface intuitive and easy to use? Does it improve upon the current catalog?
3. **Design** - Is the visual design appealing and appropriate for the content? Is it responsive?
4. **Code Quality** - Is the code well-structured, readable, and maintainable?
5. **Innovation** - Does the solution offer creative approaches to improving the catalog experience?

## Getting Started

1. Explore the current [Embassy of the Free Mind online catalog](https://embassyofthefreemind.com/nl/collectie/online-catalogus/) to understand the existing user experience
2. Test the API endpoints to familiarize yourself with the available data
3. Optionally, create wireframes or mockups for your improved interface
4. Set up your development environment with your chosen tools
5. Begin implementation, focusing on core functionality first

## Tips for Success

- Focus on creating a minimum viable product first, then enhance it with additional features if time permits
- Pay attention to performance, especially when loading and displaying images
- Consider the specific needs of users interested in historical books
- Test your application regularly throughout development
- Seek feedback from peers or potential users to improve your design

Good luck with your project! This is an opportunity to showcase your skills in web development, design, and user experience while working with culturally significant content.

## Proxy API

A proxy API for accessing historical book data from the Embassy of the Free Mind catalogue. The API is deployed at [https://efm-student-case-proxy-api.vercel.app/](https://efm-student-case-proxy-api.vercel.app/)

### API Responses

#### Overview Endpoint

```
GET https://efm-student-case-proxy-api.vercel.app/overview
```

Returns a list of historical books with their basic information and primary images.

```json
[
  {
    "id": "ccd8134c-d290-e827-6877-48829d63b02b",
    "title": "Cras credo, hodie nihil",
    "description": "[Heinsius, Daniel], 1621, 18226, Leiden, rosicrucianism, R, Willems 183, 1: [Andreae, Johann Valentin] Turbo. 1621 (1 ex), neen",
    "metadata": [
      {
        "field": "uniek_boek_nummer",
        "label": "UBN",
        "value": "18226"
      },
      {
        "field": "titel",
        "label": "Titel",
        "value": "Cras credo, hodie nihil"
      },
      {
        "field": "auteur",
        "label": "Auteur",
        "value": ["[Heinsius, Daniel]"]
      },
      {
        "field": "plaats_van_uitgave",
        "label": "Plaats van uitgave",
        "value": ["Leiden"]
      },
      {
        "field": "jaar",
        "label": "Jaar",
        "value": "1621"
      },
      {
        "field": "signatuur",
        "label": "Signatuur",
        "value": ["R"]
      },
      {
        "field": "keywords",
        "label": "Trefwoorden",
        "value": "rosicrucianism"
      },
      {
        "field": "referentie",
        "label": "Bibliografie",
        "value": "Willems 183"
      },
      {
        "field": "web_opmerkingen",
        "label": "Opmerkingen",
        "value": "1: [Andreae, Johann Valentin] Turbo. 1621 (1 ex)"
      },
      {
        "field": "aantal_exemplaren",
        "label": "Aantal kopieën",
        "value": "1"
      },
      {
        "field": "status",
        "label": "Status",
        "value": "avail"
      },
      {
        "field": "bruikleen_icn",
        "label": "BPH State Collection shelf mark",
        "value": ["neen"]
      }
    ],
    "asset": {
      "small": "https://images.memorix.nl/rit/thumb/350x350crop/68f40151-5868-4603-195a-074c5aa8fa45.jpg",
      "medium": "https://images.memorix.nl/rit/thumb/350x350/68f40151-5868-4603-195a-074c5aa8fa45.jpg",
      "fluid": "https://images.memorix.nl/rit/thumb/mediabank-horizontal/68f40151-5868-4603-195a-074c5aa8fa45.jpg",
      "large": "https://images.memorix.nl/rit/thumb/640x480/68f40151-5868-4603-195a-074c5aa8fa45.jpg",
      "vertical": "https://images.memorix.nl/rit/thumb/mediabank-vertical/68f40151-5868-4603-195a-074c5aa8fa45.jpg"
    }
  }
  // ...
]
```

#### Detail Endpoint

```
GET https://efm-student-case-proxy-api.vercel.app/detail/:id
```

Returns detailed information about a specific book, including all available images.

```json
{
  "id": "5c7f8596-3787-2874-54d1-f7bbb9dcbf71",
  "title": "Adagiorum chiliades quatuor cum sesquicenturia",
  "description": "Erasmus, Desiderius, 1559, 131, Basel, E folio, Adams E 457; Bezzel 94; Van der Haeghen I, 5, neen",
  "metadata": [
    {
      "field": "uniek_boek_nummer",
      "label": "UBN",
      "value": "131"
    },
    {
      "field": "titel",
      "label": "Titel",
      "value": "Adagiorum chiliades quatuor cum sesquicenturia"
    },
    {
      "field": "auteur",
      "label": "Auteur",
      "value": ["Erasmus, Desiderius"]
    },
    {
      "field": "plaats_van_uitgave",
      "label": "Plaats van uitgave",
      "value": ["Basel"]
    },
    {
      "field": "jaar",
      "label": "Jaar",
      "value": "1559"
    },
    {
      "field": "signatuur",
      "label": "Signatuur",
      "value": ["E folio"]
    },
    {
      "field": "referentie",
      "label": "Bibliografie",
      "value": "Adams E 457; Bezzel 94; Van der Haeghen I, 5"
    },
    {
      "field": "aantal_exemplaren",
      "label": "Aantal kopieën",
      "value": "1"
    },
    {
      "field": "status",
      "label": "Status",
      "value": "avail"
    },
    {
      "field": "bruikleen_icn",
      "label": "BPH State Collection shelf mark",
      "value": ["neen"]
    }
  ],
  "assets": [
    {
      "small": "https://images.memorix.nl/rit/thumb/350x350crop/b09fd619-0709-a652-9500-2c7f83f2581c.jpg",
      "medium": "https://images.memorix.nl/rit/thumb/350x350/b09fd619-0709-a652-9500-2c7f83f2581c.jpg",
      "fluid": "https://images.memorix.nl/rit/thumb/mediabank-horizontal/b09fd619-0709-a652-9500-2c7f83f2581c.jpg",
      "large": "https://images.memorix.nl/rit/thumb/640x480/b09fd619-0709-a652-9500-2c7f83f2581c.jpg",
      "vertical": "https://images.memorix.nl/rit/thumb/mediabank-vertical/b09fd619-0709-a652-9500-2c7f83f2581c.jpg"
    }
    // ...
  ]
}
```
