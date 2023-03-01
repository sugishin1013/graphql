import { gql } from "@apollo/client";

export const supabaseUrl = process.env.SUPABASE_URL!;
export const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const todosQuery = gql(`
    query HogeQuery {
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
