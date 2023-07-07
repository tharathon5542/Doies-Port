import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Lifelong CRRU">
            <Container>
                <Title>
                    CWIE : COOPERATIVE AND WORK INTEGRATED EDUCATION <Badge>2023 - NOW</Badge>
                </Title>
                <P>
                    A CRRU Web application that use to display and manage data for CWIE
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://cwie.crru.ac.th/" target="_blank">
                            https://cwie.crru.ac.th/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <span>Private</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web application</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP Codeigniter, MySql</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/cwie.png" alt="cwie" />
                <WorkImage src="/images/works/cwie1.png" alt="cwie" />
                <WorkImage src="/images/works/cwie2.png" alt="cwie" />
                <WorkImage src="/images/works/cwie3.png" alt="cwie" />
                <WorkImage src="/images/works/cwie4.png" alt="cwie" />
                <WorkImage src="/images/works/cwie5.png" alt="cwie" />
            </Container>
        </Layout>
    )
}

export default Work