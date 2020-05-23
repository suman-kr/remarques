export const notesQuery = `
query {
    allNotes{
      edges{
        node{
          url
          notes
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
