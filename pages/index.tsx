import React from "react";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
  allUsers: [{ content: string; name: string }];
};

export const Home: React.FC<Props> = (props) => {
  const test = (
    <div>
      {props.allUsers.map((user) => (
        <div key={user.content}>{user.name}</div>
      ))}
    </div>
  );
  return (
    <div>
      <h1>dashboard</h1>
      <p>button</p>
      {test}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allUsers = await prisma.testuser.findMany();
  return {
    props: { allUsers },
  };
};

export default Home;
