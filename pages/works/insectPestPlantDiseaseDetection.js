import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Insect Pest and Plant Disease Detection">
            <Container>
                <Title>
                    Insect Pest and Plant Disease Detection <Badge>2020</Badge>
                </Title>
                <P>
                    A Insect Pests and Plant Disease Detection (Information part) which is display all the detail that detect by AI application, Web app built with PHP, Mysql and AI application built with Yolo V4 framework base from The Ai Guy on Github
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="http://student.crru.ac.th/601463017/diseaseDetector/index.php" target="_blank">
                            https://bit.ly/3JheHZN <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Username, Password</Meta>
                        tharathon0238@gmail.com
                        1234
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/tharathon5542/Pests-and-Disease-Detection" target="_blank">
                            https://bit.ly/3Hsikv4 <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Yolo V4 Detection Application</Meta>
                        <Link href="https://drive.google.com/file/d/1CtaXx0AJznhlInq_r6gvJz4gt20AQXxv/view?fbclid=IwAR3iaX4QYdMBaovFPqYgE3h2FbNESBMvqm8OR4AejoxUtkmHmjXiS2dnv-E" target="_blank">
                            https://bit.ly/3okXBSo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Detection Application Testing</Meta>
                        <Link href="https://www.youtube.com/watch?v=7PCqbbplVGc" target="_blank">
                            https://bit.ly/34gVTLc <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, MySql, Python</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/disease1.png" alt="disease" />
                <WorkImage src="/images/works/disease2.png" alt="disease" />
                <WorkImage src="/images/works/disease3.png" alt="disease" />
            </Container>
        </Layout>
    )
}

export default Work