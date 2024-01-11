import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

const IssueDetailsPage = async ({ params }: Props) => {
  if (!parseInt(params.id)) notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.id}</p>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.createdAt.toDateString()}</p>
      <p>{issue.updateAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
