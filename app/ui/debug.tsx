type Props = {
  content: any;
};

const Debug = ({ content }: Props) => {
  if (!content) return null;

  return <pre>{JSON.stringify(content, null, 2)}</pre>;
};

export default Debug;
