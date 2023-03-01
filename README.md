# GraphQL

Supabase 上で作成したデータに GraphQL API でアクセスしてみました。

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
    id integer primary key,
    text text
);
```

```
insert into public.todos
values
  (1,'予定1'),
  (2,'予定2'),
  (3,'予定3');
```

3. 上記 Typescript 用の型を自動作成し、GraphQL API でダミーデータを取得できることを確認

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
