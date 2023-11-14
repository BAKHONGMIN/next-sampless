import { GetStaticProps, NextPage, NextPageContext } from "next";

import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이페이지는 정적 사이트 생성을 통해 빌드시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp}에 getStaticProps가 실행됏습니다.`;
  console.log(message);
  return {
    props: {
      message
    }
  };
};

export default SSG;
