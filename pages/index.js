import { Button, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from './components/section'
import Paragraph from './components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from "./components/layouts/article";
import { BioSection, BioYear } from './components/bio'
import { IoLogoGithub } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io5"

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a Computer Science Fresh Graduate
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Tharathon Tippayasotti
                        </Heading>
                        <p>Digital Craftzman ( Developer / Learner )</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="WhiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile.jpg" alt='profile' />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Tharathon is a Computer Science fresh graduate student from Chiang Rai Rajabhat University
                        base in Chiang Rai Thailand with a passion to learn new things, building digital service/stuff,
                        or find the way to solving real-life problems with code. When not online, he loves hanging out with his pet
                        and playing video game with friends
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal"> My Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1999</BioYear>
                        Born in Bangkok , Thailand.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Intern with IT-CAT Co.,Ltd
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Intern with Genesis MediaCom Co.,Ltd.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Completed the Bachelor of Science Program in Computer Science at Chiang Rai Rajabhat University
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Music, Games, Animals
                    </Paragraph>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Social Media
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://www.facebook.com/profile.php?id=100008208909771' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                                    @Tharathon Tippayasotti
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://github.com/tharathon5542?tab=repositories' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @Tharathon Doies
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container >
        </Layout>
    )
}
export default Page