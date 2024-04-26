
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
interface IProps {
    dataCampain: CampainModel[];
    setDataCampain: (v: CampainModel[]) => void;
    describe: string;
    name: string;
    setName: (v: string) => void;
    setDescribe: (v: string) => void;
    errName: boolean;
    errCampain: number[];
    campainSelected: CampainModel;
    setCampainSelected: (v: CampainModel) => void;
}
export const TabsContainer = ({
    dataCampain,
    setDataCampain,
    setDescribe,
    setName,
    name,
    describe,
    errName,
    errCampain,
    campainSelected,
    setCampainSelected

}: IProps) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <TabOneInfomation
                    errName={errName}
                    describe={describe}
                    name={name}
                    setName={setName}
                    setDescribe={setDescribe}

                />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TabTwoCampaign
                    errCampain={errCampain}
                    campainSelected={campainSelected}
                    setCampainSelected={setCampainSelected}
                    setDataCampain={setDataCampain}
                    dataCampain={dataCampain}
                />
            </CustomTabPanel>
        </Box>
    );
}
