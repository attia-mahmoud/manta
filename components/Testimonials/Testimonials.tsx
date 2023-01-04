import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Avatar,
  Group,
  Flex,
} from "@mantine/core";
import { IconStar } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "90vw",
    maxWidth: "55rem",
    marginBottom: theme.spacing.xl * 3,
  },

  card: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderColor: theme.colors.pink[5],
    borderWidth: "2px",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  name: string;
  job: string;
  review: string;
}

function Card({ image, name, job, review }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper shadow="xl" withBorder p="xl" radius="xl" className={classes.card}>
      <Flex justify="space-evenly" h="80%" direction="column" gap="1rem">
        <Flex justify="space-between" w="90%" m="0 auto">
          <Avatar src={image} alt="it's me" radius="xl" size={68} />
          <Group position="center" spacing="xs">
            <IconStar size={40} color="orange" />
            <Text size={24} color="orange">
              5.0
            </Text>
          </Group>
        </Flex>
        <Text size={32} weight="600">
          {name}
        </Text>
        <Text size={22} weight="700">
          {job}
        </Text>
        <Text size="md">{review}</Text>
      </Flex>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Bob Joe",
    job: "Businessman",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci facilis quod perspiciatis alias rerum amet atque nulla unde porro!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    name: "Sally Joe",
    job: "Businesswomen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci facilis quod perspiciatis alias rerum amet atque nulla unde porro!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Donald Joe",
    job: "Businessman",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci facilis quod perspiciatis alias rerum amet atque nulla unde porro!",
  },
];

function Testimonials() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      loop
      className={classes.wrapper}
      mx="auto"
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: "width 250ms ease",
          "&[data-active]": {
            width: 40,
          },
        },
        control: {
          width: 50,
          aspectRatio: "1",
          backgroundColor: "#ffffff",
          color: "black",
          marginInline: "-2rem",
        },
      }}
    >
      {slides}
    </Carousel>
  );
}

export { Testimonials };
