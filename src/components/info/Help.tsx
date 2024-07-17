import {
  Link as CharkaLink,
  Grid,
  LinkProps,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Link: React.FC<LinkProps> = ({ children, ...theRest }: LinkProps) => (
  <CharkaLink
    bgGradient="linear(45deg,#9945ff,#19fb9d)"
    bgClip="text"
    isExternal
    _hover={{ textShadow: "2px 2px 5px #9945FF" }}
    {...theRest}
  >
    {children}
  </CharkaLink>
);

export const Help: React.FC = () => (
  <Grid gridGap="3" my="5">
    <Text></Text>
    <Text></Text>
    <UnorderedList spacing="2">
      <ListItem>
        Load an example from Examples menu, to get a guided walkthrough of how
        to use this tool,
      </ListItem>

    </UnorderedList>
    <Text></Text>
    <Text></Text>
  </Grid>
);
