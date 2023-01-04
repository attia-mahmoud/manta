import { Container, Title } from "@mantine/core";

const Heading = ({ title }: { title: string }) => {
  return (
    <Container
      my="2rem"
      sx={{ textAlign: "center", fontFamily: `Greycliff CF` }}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export { Heading };
