import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { todosInsertMutation } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { text } = req.query;
  const value = Array.isArray(text) ? text[0] : text;

  const headers = {
    apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  };

  const client = new ApolloClient({
    ssrMode: true,
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
    cache: new InMemoryCache(),
    headers,
  });

  const response = await client.mutate({
    variables: { objects: [{ text: value }] },
    mutation: todosInsertMutation,
  });
  res.status(200).json(response);
}
