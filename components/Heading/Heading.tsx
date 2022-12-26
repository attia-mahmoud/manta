import { Container, Title } from "@mantine/core";

const Heading = ({ title }: { title: string }) => {
  return (
    <Container m="2rem auto" sx={{ textAlign: "center" }}>
      <Title>{title}</Title>
    </Container>
  );
};

export { Heading };
