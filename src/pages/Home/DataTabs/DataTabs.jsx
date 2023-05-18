import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../Toys/ToyCard';

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
        <Tabs className='shadow-lg my-container mx-auto my-16 border rounded-md px-6 pb-6 pt-3 text-center font-semibold'>
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
    );
};

export default DataTabs;