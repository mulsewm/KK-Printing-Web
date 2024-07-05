import { getSession, useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default function Requests({ requests }) {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please log in to view your requests.</p>;
  }

  return (
    <div className="container">
      <h2>Your Proforma Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Name: {request.name}</p>
            <p>Organisation: {request.organisation}</p>
            <p>Email: {request.email}</p>
            <p>Phone Number: {request.phoneNumber}</p>
            <p>Message: {request.message}</p>
            {request.file && (
              <p>
                File: <a href={request.file}>Download</a>
              </p>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const requests = await prisma.request.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return {
    props: {
      requests,
    },
  };
}
