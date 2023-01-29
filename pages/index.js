import Layout from "../components/default";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import slug from "slug";
import { SimpleGrid, Box, Center, Square, Circle } from '@chakra-ui/react'

const index = ({ CharacterData }) => {
  return (
    <Layout>
      <h1 className="title">Index</h1>



      <SimpleGrid columns={2} spacing={10}>
        {CharacterData.results.map((character) => {
          return (
            <Box bg='azure' height='80px' key={character.id}>
              <Center h="100%">
              <Link 
                  href="/character/[slug]"
                  as={`/character/${slug(character.name)}-${character.id}`}
                >
                  {character.name}
                </Link>
              </Center>

            </Box>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  // data fetch
  const data = await unfetch("https://rickandmortyapi.com/api/character");
  const CharacterData = await data.json();
  return {
    props: {
      CharacterData,
    },
  };
}

export default index;
