import { gql } from "./__generated__";

export const supabaseUrl = process.env.SUPABASE_URL!;
export const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const todosQuery = gql(`
    query TodoQuery {
      todosCollection {
        edges {
          node {
            id
            text
          }
        }
      }
    }
`);

export const todosInsertMutation = gql(`
    mutation TodoInsertMutation($objects: [todosInsertInput!]!) {
      insertIntotodosCollection(objects: $objects) {
        records {
          text
        }
      }
    }
`);

export const todosDeleteMutation = gql(`
    mutation TodoDeleteMutation($id: Int!) {
      deleteFromtodosCollection(filter: {id: {eq: $id}}) {
          records {
            text
        }
      }
    }
`);
