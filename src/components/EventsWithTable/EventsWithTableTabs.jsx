import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getTabs } from './requests';
import { calendar } from '../../utils/API_urls';
import { CalendarImageWrapper } from './styles';
import { useSelector } from 'react-redux';

export default function EventsWithTableTabs() {
    const [value, setValue] = React.useState('0');
    const [tablist, setTablist] = React.useState([])
    const lang = useSelector(state => state.language)


    React.useEffect(() => {
        getTabs(calendar, (response) => {
            setTablist(response.data)
            if(response.data.length !== 0){
                setValue(response.data[0].id+"")
            }
        }, (error) => {
            console.log(error)
        })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box>
                    <TabList 
                        onChange={handleChange}
                        centered
                        aria-label="lab API tabs example"
                    >
                        {
                            tablist.map((elem, index) => {
                                return <Tab 
                                        sx={{
                                            textTransform: "none",
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: '800',
                                            lineHeight: 'normal'
                                        }} 
                                        key={index} 
                                        label={elem.name} 
                                        value={elem.id+""} 
                                    />
                            })
                        }
                    </TabList>
                </Box>
                {
                    tablist.map((elem, index) => {
                        return <TabPanel sx={{
                            padding: '56px 0 50px 0'
                        }} key={index} value={elem.id+""}>
                            <CalendarImageWrapper>
                                <img src={elem[`image_${lang}`]} alt="tab img"/>
                            </CalendarImageWrapper>
                        </TabPanel>
                    })
                }
            </TabContext>
        </Box>
    );
}