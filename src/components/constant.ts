export const notesQuery = `
query notes($url: String) {
  allNotes(url: $url) {
    edges {
      node {
        id
        notes
        url
      }
    }
  }
}

`;

export const notesMutation = `
mutation notes($input: NotesInput!){
  createNotes(input: $input){
    notes{
      id
      notes
      url
    }
  }
}
`;

export const noteQuery = `
query n($id: ID!) {
  note(id: $id) {
    url
    notes
    id
  }
}
`;