import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { todosQuery } from "../../../constants";
import { Todos } from "../../../types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todos>
) {
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

  const response = await client.query({ query: todosQuery }).then((result) =>
    result.data.todosCollection!.edges.map((item: any) => ({
      id: item.node.id,
      text: item.node.text,
    }))
  );
  res.status(200).json(response);
}
