import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../components/work";
import P from '../components/paragraph'
import Layout from "../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Jasmine Genesis Media Com">
            <Container>
                <Title>
                    Jasmine Genesis Media Com <Badge>2021</Badge>
                </Title>
                <P>
                    A English education web application work with video and work sheet
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://jasminegenesismedia.000webhostapp.com/" target="_blank">
                            https://bit.ly/32XZs8s <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/tharathon5542/Jasmine" target="_blank">
                            https://bit.ly/3rods4I <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel, MySql</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/jasmine1.png" alt="jasmine" />
                <WorkImage src="/images/works/jasmine2.png" alt="jasmine" />
                <WorkImage src="/images/works/jasmine3.png" alt="jasmine" />
            </Container>
        </Layout>
    )
}

export default Work