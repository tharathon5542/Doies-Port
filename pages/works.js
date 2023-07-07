import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbDisease from '../public/images/disease.png'
import thumbJasmine from '../public/images/jasmine.png'
import thumbLifelong from '../public/images/lifelong.png'
import thumbCWIE from '../public/images/cwie.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="insectPestPlantDiseaseDetection"
                            title="Insect Pests and Plant Disease Detection"
                            thumbnail={thumbDisease}>
                            A Insect Pests and Plant Disease Detection (Information part) which is display all the detail that detect by AI application.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="jasmine"
                            title="Jasmine Genesis Media Com"
                            thumbnail={thumbJasmine}>
                            A English education web application work with video and work sheet
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="lifelong"
                            title="Lifelong CRRU"
                            thumbnail={thumbLifelong}>
                            A Online - On site Courses Selling web application
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="cwie"
                            title="CWIE : COOPERATIVE AND WORK INTEGRATED EDUCATION"
                            thumbnail={thumbCWIE}>
                            A CRRU Web application that use to display and manage data for CWIE 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container >
        </Layout>
    )
}

export default Works
