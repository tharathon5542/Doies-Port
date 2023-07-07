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
                    Lifelong CRRU <Badge>2023 - NOW</Badge>
                </Title>
                <P>
                    A On line - On site Courses Selling web application
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://lifelong.crru.ac.th/" target="_blank">
                            https://lifelong.crru.ac.th/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="javascript:void(0);">
                            Private <ExternalLinkIcon mx="2px" />
                        </Link>
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
                <WorkImage src="/images/works/lifelong.png" alt="lifelong" />
                <WorkImage src="/images/works/lifelong3.png" alt="lifelong" />
                <WorkImage src="/images/works/lifelong5.png" alt="lifelong" />
                <WorkImage src="/images/works/lifelong4.png" alt="lifelong" />
                <WorkImage src="/images/works/lifelong1.png" alt="lifelong" />
                <WorkImage src="/images/works/lifelong2.png" alt="lifelong" />
            </Container>
        </Layout>
    )
}

export default Work