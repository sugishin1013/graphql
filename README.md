# GraphQL

Supabase 上で作成したデータに GraphQL API を介して Todo リストを作成してみた

https://graphql-iota-gray.vercel.app/

[React.js](https://ja.reactjs.org/) + [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/ja/) + [Tailwind CSS](https://tailwindcss.com/) + [Apollo Client](https://www.apollographql.com/docs/react/) + [Supabase](https://supabase.com/)

## ローカル環境の構築、GraphQL API へのアクセステスト

1. Supabase の立ち上げからテストデータの投入、Apollo Studio sandbox 上での接続・取得テストは[コチラ](https://github.com/sugishin1013/supabase)の手順でおこない GraphQL API が正常に動作していることを確認

2. [TypeScript with Apollo Client](https://www.apollographql.com/docs/react/development-testing/static-typing/)を参考に Typescript 用の型を自動作成してくれるパッケージを導入

3. Next.js 上で[Get started with Apollo Client](https://www.apollographql.com/docs/react/get-started)のドキュメントのテストコードを記述し、データが取得できることを確認

## todo リスト UI と DB データ 作成

1. シンプルな todo リストの mock を作成

2. 上記 mock のデータに合わせて Supabase 上でテーブルを作成、ダミーデータも insert

```
create table todos (
    id integer primary key generated always as identity not null,
    text text
);
```

```
insert into public.todos (text)
values
  ('予定1'),
  ('予定2'),
  ('予定3');
```

3. 上記 Typescript 用の型を自動作成し、GraphQL API でダミーデータを取得できることを確認

## API Routes の使用

今回は Supabase（外部サービス）の API を使用するため、API キーの秘匿性のためにも「API Routes」機能を採用

1. `/src/pages/api/todos/queries.ts`ファイルを作成し、GraphQL API の接続テスト用の処理をこのファイルに移行

2. `http://localhost:3000/api/todos/list`にブラウザ上でアクセスし、DB に登録したダミーデータが取得できることを確認

## Mutation の作成

1. 一覧を取得できることがわかったので`/src/pages/api/todos/insert.ts`ファイル、`/src/pages/api/todos/delete.ts`ファイルを作成し追加・削除のエンドポイントを作成して、追加・削除の処理を実装

## ローカル DB からリモート DB へのデプロイ

1. 以下のコマンドを実行することでローカルのマイグレーションファイルを元に同じスキーマのテーブルが生成される

```
supabase db diff todos
supabase db reset
supabase link --project-ref <your-project-ref>
supabase db push
```

2. ダミーデータを挿入する場合は Supabase のダッシュボードから Insert 文の SQL を実行

## デプロイ

1. vercel にログインして該当のリポジトリをインポート

2. デプロイ時に「Environment Variables」（環境変数）に リモート用の API のエンドポイント、API キーを登録

```
NEXT_PUBLIC_SUPABASE_URL=<Project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Project API keys>
SUPABASE_URL=<Project URL>
SUPABASE_ANON_KEY=<Project API keys>
```

\*リモート用の API のエンドポイント、API キーはリモートの該当プロジェクトの`/settings/api`画面から確認

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mock References

https://tailwindcomponents.com/component/todo-list-app

## References

https://qiita.com/dshukertjr/items/be036d38f77b1359f4be

https://reffect.co.jp/react/next-js-api-route

https://qiita.com/wafuwafu13/items/0f4230a5301fb44dd796
