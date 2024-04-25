
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabTwoCampaign } from './tab-campaign';
import { TabOneInfomation } from './tab-infomation';
import { CampainModel } from '../model/campaign-model';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const TabsContainer = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [dataCampain, setDataCampain] = React.useState<CampainModel[]>([
        {
            id: 1,
            name: " Chiến dịch con 1",
            status: true,
            quantity: 0,
            advertisement: [
                {
                    id: 1,
                    quantity: 0,
                    name: "Quảng cáo 1"
                }
            ]
        }

    ]);
    let inDexEnd = dataCampain ? dataCampain.length - 1 : 0
    const [campainSelected, setCampainSelected] = React.useState<CampainModel>(dataCampain[inDexEnd])
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="THÔNG TIN" {...a11yProps(0)} />
                    <Tab label="CHIẾN DỊCH CON" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TabOneInfomation />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TabTwoCampaign
                    campainSelected={campainSelected}
                    setCampainSelected={setCampainSelected}
                    setDataCampain={setDataCampain}
                    dataCampain={dataCampain}
                />
            </CustomTabPanel>
        </Box>
    );
}
