import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard/ToyCard';

const DataTabs = ({ toys }) => {

    const makeToyCards = (subCat) => {
        return (
            <div className='grid lg:grid-cols-3 w-full gap-4 py-6'>
                {
                    toys.filter(toy => toy.subcategory === subCat).map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        )
    }

    return (
        <div data-aos='fade-up' data-aos-duration="1000">
            <h2 className='text-4xl pt-16 text-center font-semibold'>Car Categories</h2>
            <Tabs className='shadow-lg my-container mx-auto mt-4 mb-16 border rounded-md lg:p-6 p-3 text-center font-semibold border-orange-500'>
                < TabList >
                    {/* main catagories */}
                    <Tab> Car Cruisers</Tab >
                    <Tab>Zooming Cars</Tab>
                    <Tab>Race Track Fun</Tab>
                </TabList >
                <TabPanel>
                    <Tabs>
                        {/* subcatgories of catagory 1 */}
                        <TabList>
                            <Tab>Electric Drive Cars</Tab>
                            <Tab>Pedal Power Cars</Tab>
                        </TabList>
                        <TabPanel>
                            {
                                makeToyCards('Electric Drive Cars')
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                makeToyCards('Pedal Power Cars')
                            }
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs>
                        {/* subcatgories of catagory 2 */}
                        <TabList>
                            <Tab>Push Cars</Tab>
                            <Tab>Pull-Back Cars</Tab>
                        </TabList>
                        <TabPanel>
                            {
                                makeToyCards('Push Cars')
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                makeToyCards('Pull-Back Cars')
                            }
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs>
                        {/* subcatgories of catagory 3 */}
                        <TabList>
                            <Tab>Loop Track Adventures</Tab>
                            <Tab>Multi-Lane Races</Tab>
                        </TabList>
                        <TabPanel>
                            {
                                makeToyCards('Loop Track Adventures')
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                makeToyCards('Multi-Lane Races')
                            }
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs >
        </div>
    );
};

export default DataTabs;